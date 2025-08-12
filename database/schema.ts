import { pgTable, serial, varchar, timestamp } from 'https://deno.land/x/drizzle_orm@0.30.10/pg-core/index.ts';

export const keys = pgTable('keys', {
  id: serial('id').primaryKey(),
  value: varchar('value', { length: 256 }).notNull().unique(),
  model: varchar('model', { length: 128 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
