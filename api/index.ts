import express from "express";
import { z } from "zod";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { Resend } from "resend";

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

// Resend (optional — skips email if key not set)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CLINIC_EMAIL = "saolourencoclinica@gmail.com";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/contact", async (req, res) => {
  try {
    const input = insertContactMessageSchema.parse(req.body);

    // Save to DB
    if (db) {
      await db.insert(contactMessages).values(input);
    }

    // Send email notification
    if (resend) {
      await resend.emails.send({
        from: "Clínica São Lourenço <onboarding@resend.dev>",
        to: CLINIC_EMAIL,
        subject: `Nova mensagem do site: ${input.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h2 style="color: #1a6b5e; margin-bottom: 24px;">📩 Nova mensagem do website</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 140px;">Nome</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${input.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Contacto</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${input.emailOrPhone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Assunto</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${input.subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Mensagem</td>
                <td style="padding: 10px 0; color: #111; white-space: pre-wrap;">${input.message}</td>
              </tr>
            </table>
            <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
              Esta mensagem foi enviada através do formulário de contacto em saolourencoclinica.com
            </p>
          </div>
        `,
      });
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
