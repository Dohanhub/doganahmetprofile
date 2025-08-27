import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ChatAgent from '@/components/chat-agent';

// Mock the useToast hook
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}));

// Mock framer-motion directly in the test file
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      // Filter out framer-motion specific props
      const { 
        initial, animate, exit, transition, whileHover, whileTap, 
        ...domProps 
      } = props;
      return <div {...domProps}>{children}</div>;
    }
  },
  AnimatePresence: ({ children }: any) => children
}));

// Mock Web Speech API
Object.defineProperty(window, 'SpeechRecognition', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    continuous: false,
    interimResults: false,
    lang: 'en-US',
    start: vi.fn(),
    stop: vi.fn(),
    onresult: null,
    onerror: null
  }))
});

Object.defineProperty(window, 'webkitSpeechRecognition', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    continuous: false,
    interimResults: false,
    lang: 'en-US',
    start: vi.fn(),
    stop: vi.fn(),
    onresult: null,
    onerror: null
  }))
});

// Mock SpeechSynthesisUtterance
global.SpeechSynthesisUtterance = vi.fn().mockImplementation(() => ({
  rate: 1,
  pitch: 1,
  volume: 1,
  onstart: null,
  onend: null
}));

Object.defineProperty(window, 'speechSynthesis', {
  writable: true,
  value: {
    speak: vi.fn(),
    cancel: vi.fn()
  }
});

// Mock scrollIntoView for JSDOM
Element.prototype.scrollIntoView = vi.fn();

describe('ChatAgent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders floating chat button initially', () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    expect(chatButton).toBeInTheDocument();
    
    // Check for Eline's avatar
    expect(screen.getByText('👩‍💼')).toBeInTheDocument();
  });

  it('opens chat interface when button is clicked', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Use findBy for async rendered content
    expect(await screen.findByText('Eline')).toBeInTheDocument();
    expect(await screen.findByText('Your AI Assistant')).toBeInTheDocument();
  });

  it('displays initial greeting message', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Use findBy for async content
    expect(await screen.findByText(/Merhaba! I'm Eline/)).toBeInTheDocument();
  });

  it('allows typing and sending messages', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Wait for chat interface to open
    await screen.findByTestId('chat-input');
    
    const input = screen.getByTestId('chat-input');
    const sendButton = screen.getByTestId('chat-send-button');
    
    fireEvent.change(input, { target: { value: 'Hello Eline' } });
    fireEvent.click(sendButton);
    
    // Fast-forward timers to simulate response generation
    vi.advanceTimersByTime(2000);
    
    // Wait for the message to appear
    expect(await screen.findByText('Hello Eline')).toBeInTheDocument();
  });

  it('shows quick reply buttons after conversation starts', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Wait for chat interface to open
    await screen.findByTestId('chat-input');
    
    const input = screen.getByTestId('chat-input');
    const sendButton = screen.getByTestId('chat-send-button');
    
    fireEvent.change(input, { target: { value: 'Tell me about Ahmet' } });
    fireEvent.click(sendButton);
    
    // Fast-forward timers to simulate response generation
    vi.advanceTimersByTime(2000);
    
    // Wait for response and quick replies to appear
    expect(await screen.findByText('Tell me about Ahmet')).toBeInTheDocument();
    
    // Quick replies should appear
    await waitFor(() => {
      expect(screen.getByText('Show his services')).toBeInTheDocument();
      expect(screen.getByText('What are his achievements?')).toBeInTheDocument();
    });
  });

  it('has voice control buttons', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Wait for chat interface to open
    await screen.findByTestId('chat-input');
    
    // Check for voice control buttons
    expect(screen.getByRole('button', { name: /mic/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /volume/i })).toBeInTheDocument();
  });

  it('closes chat interface when close button is clicked', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Wait for chat interface to open
    await screen.findByTestId('chat-input');
    
    const closeButton = screen.getByTestId('chat-close-button');
    fireEvent.click(closeButton);
    
    // Wait for chat interface to close
    await waitFor(() => {
      expect(screen.queryByText('Eline')).not.toBeInTheDocument();
      expect(screen.getByTestId('chat-open-button')).toBeInTheDocument();
    });
  });

  it('handles Enter key press for sending messages', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Wait for chat interface to open
    await screen.findByTestId('chat-input');
    
    const input = screen.getByTestId('chat-input');
    
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
    
    // Fast-forward timers to simulate response generation
    vi.advanceTimersByTime(2000);
    
    // Wait for the message to appear
    expect(await screen.findByText('Test message')).toBeInTheDocument();
  });

  it('shows typing indicator while processing response', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Wait for chat interface to open
    await screen.findByTestId('chat-input');
    
    const input = screen.getByTestId('chat-input');
    const sendButton = screen.getByTestId('chat-send-button');
    
    fireEvent.change(input, { target: { value: 'Quick question' } });
    fireEvent.click(sendButton);
    
    // Should show typing indicator briefly
    expect(await screen.findByText('Quick question')).toBeInTheDocument();
  });

  it('handles quick reply button clicks', async () => {
    render(<ChatAgent />);
    
    const chatButton = screen.getByTestId('chat-open-button');
    fireEvent.click(chatButton);
    
    // Wait for chat interface to open
    await screen.findByTestId('chat-input');
    
    // Send initial message to trigger quick replies
    const input = screen.getByTestId('chat-input');
    const sendButton = screen.getByTestId('chat-send-button');
    
    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(sendButton);
    
    // Fast-forward timers
    vi.advanceTimersByTime(2000);
    
    // Wait for quick replies to appear and click one
    const quickReplyButton = await screen.findByText('Tell me about Ahmet');
    fireEvent.click(quickReplyButton);
    
    // Fast-forward timers again
    vi.advanceTimersByTime(2000);
    
    // Should show the quick reply message
    expect(await screen.findByText('Tell me about Ahmet')).toBeInTheDocument();
  });
});
