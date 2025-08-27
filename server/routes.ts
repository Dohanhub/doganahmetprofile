import express from 'express';
import { insertContactSchema } from '../shared/schema.js';
import { storage } from './storage.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting middleware
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Contact form endpoint
router.post('/contact', contactLimiter, async (req, res) => {
  try {
    // Validate input data
    const validatedData = insertContactSchema.parse(req.body);
    
    // Log the submission
    const timestamp = new Date().toISOString();
    console.log(`New contact submission from ${validatedData.email} at ${timestamp}`);
    
    // Store in database
    const result = await storage.createContact(validatedData);
    
    res.json({ success: true, id: result.id });
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error.name === 'ZodError') {
      return res.status(400).json({ 
        success: false, 
        error: 'Validation failed', 
        details: error.errors 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

// Get all contacts (admin endpoint)
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await storage.getContacts();
    res.json({ success: true, contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

export default router;
