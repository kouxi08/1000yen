import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { quizSetLogTable } from '../schema/schema';

const quizSetLogSchema = {
  id: z.string().uuid(),
  userId: z.string().uuid(),
  quizModeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
}

export const insertQuizSetLogSchema = createInsertSchema(quizSetLogTable, {
  ...quizSetLogSchema
}).omit({ createdAt: true, updatedAt: true });

export const selectQuizSetLogSchema = createSelectSchema(quizSetLogTable, {
  ...quizSetLogSchema
});

export type InsertQuizSetLogType = z.infer<typeof insertQuizSetLogSchema>;
export type SelectQuizSetLogType = z.infer<typeof selectQuizSetLogSchema>;
