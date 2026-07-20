import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Please add a subject"),
  message: z.string().min(10, "Tell us a little more (min 10 characters)"),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  serviceType: z.string().min(1, "Select a service"),
  mode: z.enum(["Sea", "Air", "Land"]),
  cargoType: z.string().min(1, "Select a cargo type"),
  origin: z.string().min(2, "Enter origin"),
  destination: z.string().min(2, "Enter destination"),
  readyDate: z.string().optional(),
  details: z.string().optional(),
});
export type QuoteInput = z.infer<typeof quoteSchema>;

export const careersSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  position: z.string().min(1, "Select a position"),
  message: z.string().optional(),
});
export type CareersInput = z.infer<typeof careersSchema>;

export const trackSchema = z.object({
  trackingNumber: z
    .string()
    .min(4, "Enter a valid tracking number")
    .max(40, "Tracking number too long"),
});
export type TrackInput = z.infer<typeof trackSchema>;
