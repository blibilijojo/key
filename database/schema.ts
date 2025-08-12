import { pgTable, serial, varchar, timestamp } from 'npm:drizzle-orm/pg-core';

export const keys = pgTable('keys', {
  id: serial('id').primaryKey(),
  value: varchar('value', { length: 256 }).notNull().unique(),
  model: varchar('model', { length: 128 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
