import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address"),
  propertyType: text("property_type"),
  projectType: text("project_type"),
  squareFootage: text("square_footage"),
  message: text("message"),
  timeline: text("timeline"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  processed: boolean("processed").default(false).notNull(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
  active: boolean("active").default(true).notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
  processed: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true,
  active: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
