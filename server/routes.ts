import express from 'express';
import rateLimit from 'express-rate-limit';
import { insertContactSchema } from '../shared/schema.js';
import { storage } from './storage.js';

const router = express.Router();

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to all routes
router.use(limiter);

// Contact form endpoint
router.post('/contact', async (req, res) => {
  try {
    // Validate input
    const validatedData = insertContactSchema.parse(req.body);
    
    // Insert contact
    const result = await storage.createContact(validatedData);
    
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: result.id
    });
    
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all contacts (for admin purposes)
router.get('/contacts', async (_req, res) => {
  try {
    const contacts = await storage.getContacts();
    res.json({
      success: true,
      contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;
