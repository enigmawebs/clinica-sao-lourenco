import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Tabela para guardar as mensagens de contacto do formulário
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  emailOrPhone: text("email_or_phone").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  consent: boolean("consent").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Zod schemas
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });

// Types
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
