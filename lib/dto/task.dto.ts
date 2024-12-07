import { UserDto } from "./user.dto";

export interface TaskDto {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    closing_date: string | null;
    user: UserDto;
  }
  