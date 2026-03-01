import express from "express";
import { z } from "zod";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

const { Pool } = pg;

// Schema (inline to avoid path alias issues in Vercel serverless)
const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  emailOrPhone: text("email_or_phone").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  consent: boolean("consent").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

// DB (optional — falls back gracefully if DATABASE_URL is not set)
const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

const db = pool ? drizzle(pool, { schema: { contactMessages } }) : null;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/contact", async (req, res) => {
  try {
    const input = insertContactMessageSchema.parse(req.body);
    if (db) {
      await db.insert(contactMessages).values(input);
    }
    res.status(201).json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400).json({
        message: err.errors[0].message,
        field: err.errors[0].path.join("."),
      });
      return;
    }
    res.status(500).json({ message: "Ocorreu um erro interno. Tente novamente mais tarde." });
  }
});

export default app;
