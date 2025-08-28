import { z } from "zod";

// Zod schemas for validation
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const insertContactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  organization: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1),
});

// TypeScript types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
};

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: string | null;
  service: string | null;
  message: string;
  createdAt: Date;
};
