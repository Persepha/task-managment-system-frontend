import { z } from "zod";
import { UserDto } from "./user.dto";

export interface TaskDTO {
  title: string;
  description: string;
  status: "pending" | "in process" | "done";
  priority: "low" | "medium" | "high";
  closing_date: string | null;
}

export interface TaskOutputDTO extends TaskDTO {
  id: number;
  user: UserDto;
}

export interface TaskUpdateDTO{
  title?: string;
  description?: string;
  status?: "pending" | "in process" | "done";
  priority?: "low" | "medium" | "high";
  closing_date?: string | null;
}


export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.enum(["Pending", "In process", "Done"]),
  priority: z.enum(["Low", "Medium", "High"]),
  closing_date: z.string().nullable(),
});

export type Task = z.infer<typeof taskSchema>;
