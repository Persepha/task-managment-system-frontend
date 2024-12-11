import * as z from "zod";

export const taskCreateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["pending", "in process", "done"]),
  priority: z.enum(["low", "medium", "high"]),
  closing_date: z.date().nullable(),
});


export const taskUpdateSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(['pending', 'in process', 'done']).optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  closing_date: z.date().nullable().optional(),
});

