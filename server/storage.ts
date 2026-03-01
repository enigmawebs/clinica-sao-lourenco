import { db } from "./db";
import {
  contactMessages,
  type InsertContactMessage,
  type ContactMessage
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db!.insert(contactMessages)
      .values(message)
      .returning();
    return newMessage;
  }
}

class MemStorage implements IStorage {
  private messages: ContactMessage[] = [];
  private nextId = 1;

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      ...message,
      id: this.nextId++,
      consent: message.consent ?? true,
      createdAt: new Date(),
    };
    this.messages.push(newMessage);
    console.log("[mem-storage] Contact message saved:", newMessage);
    return newMessage;
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new MemStorage();
