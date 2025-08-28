// Service Worker with Self-Healing Features
const CACHE_NAME = 'dogan-ai-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/assets/index-ClEr2QG7.css',
  '/assets/index-BR15dFf_.js',
  '/assets/ui-B7Ij-LAU.js',
  '/assets/vendor-Ber6wfih.js',
  '/robots.txt',
  '/sitemap.xml'
];

// Network strategies
const NETWORK_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only'
};

// Self-healing configuration
const SELF_HEALING_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000,
  healthCheckInterval: 30000, // 30 seconds
  cacheCleanupInterval: 24 * 60 * 60 * 1000, // 24 hours
  maxCacheAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('[SW] Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
      .then(() => {
        // Start health monitoring
        startHealthMonitoring();
        startCacheCleanup();
      })
  );
});

// Fetch event - handle requests with self-healing
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests
  if (url.pathname.startsWith('/api/')) {
    // API requests - network first with fallback
    event.respondWith(handleApiRequest(request));
  } else if (url.pathname.startsWith('/assets/')) {
    // Static assets - cache first
    event.respondWith(handleStaticAsset(request));
  } else {
    // HTML pages - network first with fallback
    event.respondWith(handlePageRequest(request));
  }
});

// Handle API requests with retry logic
async function handleApiRequest(request) {
  const maxRetries = SELF_HEALING_CONFIG.maxRetries;
  let lastError;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(request);
      
      if (response.ok) {
        // Cache successful API responses
        const cache = await caches.open(DYNAMIC_CACHE);
        cache.put(request, response.clone());
        return response;
      }
      
      // Don't retry on client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        return response;
      }
      
      throw new Error(`HTTP ${response.status}`);
      
    } catch (error) {
      lastError = error;
      console.warn(`[SW] API request failed (attempt ${attempt + 1}/${maxRetries + 1}):`, error);
      
      if (attempt < maxRetries) {
        // Exponential backoff
        const delay = SELF_HEALING_CONFIG.retryDelay * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  // All retries failed, try to serve from cache
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log('[SW] Serving API response from cache');
    return cachedResponse;
  }
  
  // Return error response
  return new Response(
    JSON.stringify({ 
      error: 'Service temporarily unavailable',
      message: 'Please check your connection and try again'
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Handle static assets with cache-first strategy
async function handleStaticAsset(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Failed to fetch static asset:', error);
    return new Response('Asset not available', { status: 404 });
  }
}

// Handle page requests with network-first strategy
async function handlePageRequest(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page
    return caches.match('/offline.html') || new Response('Offline', { status: 503 });
  }
}

// Health monitoring
function startHealthMonitoring() {
  setInterval(async () => {
    try {
      const response = await fetch('/health', { 
        method: 'GET',
        cache: 'no-cache'
      });
      
      if (response.ok) {
        console.log('[SW] Health check passed');
        // Notify clients of good health
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({ type: 'HEALTH_CHECK', status: 'healthy' });
          });
        });
      } else {
        console.warn('[SW] Health check failed:', response.status);
      }
    } catch (error) {
      console.error('[SW] Health check error:', error);
      // Notify clients of poor health
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'HEALTH_CHECK', status: 'unhealthy', error: error.message });
        });
      });
    }
  }, SELF_HEALING_CONFIG.healthCheckInterval);
}

// Cache cleanup
function startCacheCleanup() {
  setInterval(async () => {
    try {
      const cache = await caches.open(DYNAMIC_CACHE);
      const requests = await cache.keys();
      const now = Date.now();
      
      for (const request of requests) {
        const response = await cache.match(request);
        if (response) {
          const dateHeader = response.headers.get('date');
          if (dateHeader) {
            const responseDate = new Date(dateHeader).getTime();
            if (now - responseDate > SELF_HEALING_CONFIG.maxCacheAge) {
              await cache.delete(request);
              console.log('[SW] Cleaned up old cache entry:', request.url);
            }
          }
        }
      }
    } catch (error) {
      console.error('[SW] Cache cleanup error:', error);
    }
  }, SELF_HEALING_CONFIG.cacheCleanupInterval);
}

// Message handling for client communication
self.addEventListener('message', (event) => {
  const { type, data } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_CACHE_INFO':
      event.ports[0].postMessage({
        type: 'CACHE_INFO',
        data: {
          staticCache: STATIC_CACHE,
          dynamicCache: DYNAMIC_CACHE,
          staticFiles: STATIC_FILES
        }
      });
      break;
      
    case 'CLEAR_CACHE':
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }).then(() => {
        event.ports[0].postMessage({ type: 'CACHE_CLEARED' });
      });
      break;
      
    case 'UPDATE_CACHE':
      // Force update of static files
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(STATIC_FILES);
      }).then(() => {
        event.ports[0].postMessage({ type: 'CACHE_UPDATED' });
      });
      break;
  }
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(performBackgroundSync());
  }
});

async function performBackgroundSync() {
  try {
    // Get stored offline actions
    const offlineActions = await getOfflineActions();
    
    for (const action of offlineActions) {
      try {
        await retryAction(action);
        await removeOfflineAction(action.id);
      } catch (error) {
        console.error('[SW] Background sync failed for action:', action, error);
      }
    }
  } catch (error) {
    console.error('[SW] Background sync error:', error);
  }
}

// Helper functions for offline actions
async function getOfflineActions() {
  // In a real implementation, you'd store these in IndexedDB
  return [];
}

async function retryAction(action) {
  // Retry the stored action
  const response = await fetch(action.url, {
    method: action.method,
    headers: action.headers,
    body: action.body
  });
  
  if (!response.ok) {
    throw new Error(`Action failed: ${response.status}`);
  }
  
  return response;
}

async function removeOfflineAction(actionId) {
  // Remove the action from storage
  console.log('[SW] Removed offline action:', actionId);
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Dogan AI', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('[SW] Service worker script loaded');
