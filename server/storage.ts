import { contactSubmissions, newsletterSubscriptions, type ContactSubmission, type InsertContactSubmission, type NewsletterSubscription, type InsertNewsletterSubscription } from "@shared/schema";

export interface IStorage {
  // Contact form submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Newsletter subscriptions
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private currentContactId: number;
  private currentNewslettterId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentContactId = 1;
    this.currentNewslettterId = 1;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = {
      id,
      firstName: insertSubmission.firstName,
      lastName: insertSubmission.lastName,
      email: insertSubmission.email,
      phone: insertSubmission.phone,
      address: insertSubmission.address || null,
      propertyType: insertSubmission.propertyType || null,
      projectType: insertSubmission.projectType || null,
      squareFootage: insertSubmission.squareFootage || null,
      message: insertSubmission.message || null,
      timeline: insertSubmission.timeline || null,
      createdAt: new Date(),
      processed: false,
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = this.currentNewslettterId++;
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      subscribedAt: new Date(),
      active: true,
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }
}

export const storage = new MemStorage();
