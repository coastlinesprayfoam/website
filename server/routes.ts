import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Here you would typically send an email notification
      // For now, we'll just log the submission
      console.log("New contact submission:", submission);
      
      res.json({ 
        success: true, 
        message: "Thank you for your quote request! We'll get back to you within 24 hours.",
        submissionId: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request. Please try again." 
        });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        res.status(400).json({ 
          success: false, 
          message: "This email is already subscribed to our newsletter." 
        });
        return;
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to our newsletter!",
        subscriptionId: subscription.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please provide a valid email address", 
          errors: error.errors 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while subscribing. Please try again." 
        });
      }
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error fetching contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
