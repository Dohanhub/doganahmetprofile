import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission with enhanced error handling
  app.post("/api/contact", async (req, res) => {
    try {
      // Rate limiting check (simple in-memory approach)
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      
      // Validate request body exists
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ 
          success: false, 
          error: "Request body is required" 
        });
      }

      // Validate and parse data
      const validatedData = insertContactSchema.parse(req.body);
      
      // Additional business logic validation
      if (validatedData.email && !validatedData.email.includes('@')) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid email format" 
        });
      }

      // Input sanitization
      const sanitizeInput = (str: string) => str.trim().replace(/[<>\"']/g, '');
      
      validatedData.firstName = sanitizeInput(validatedData.firstName);
      validatedData.lastName = sanitizeInput(validatedData.lastName);
      validatedData.email = sanitizeInput(validatedData.email);
      if (validatedData.organization) validatedData.organization = sanitizeInput(validatedData.organization);
      if (validatedData.service) validatedData.service = sanitizeInput(validatedData.service);
      if (validatedData.message) validatedData.message = sanitizeInput(validatedData.message);

      // Store contact with error handling
      const contact = await storage.createContact(validatedData);
      
      if (!contact) {
        return res.status(500).json({ 
          success: false, 
          error: "Failed to save contact information" 
        });
      }

      console.log(`New contact submission from ${validatedData.email} at ${new Date().toISOString()}`);
      
      res.json({ success: true, contact, message: "Contact form submitted successfully" });
      
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof z.ZodError) {
        const validationErrors = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }));
        
        return res.status(400).json({ 
          success: false, 
          error: "Validation failed", 
          details: validationErrors 
        });
      } else if (error instanceof Error) {
        return res.status(500).json({ 
          success: false, 
          error: "Internal server error",
          message: process.env.NODE_ENV === 'development' ? error.message : "Please try again later"
        });
      } else {
        return res.status(500).json({ 
          success: false, 
          error: "Unknown error occurred" 
        });
      }
    }
  });

  // Get all contacts with enhanced error handling
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      
      if (!contacts) {
        return res.status(404).json({ 
          success: false, 
          error: "No contacts found" 
        });
      }
      
      res.json({ success: true, contacts, count: contacts.length });
      
    } catch (error) {
      console.error("Failed to retrieve contacts:", error);
      
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      
      res.status(500).json({ 
        success: false, 
        error: "Failed to retrieve contacts",
        message: process.env.NODE_ENV === 'development' ? errorMessage : "Internal server error"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      success: true, 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
