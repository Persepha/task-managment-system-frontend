"use client";

import { useState } from "react";
import { CreateNewTaskForm } from "@/components/task_components/create_new_task_form";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TaskUpdateDTO } from "@/lib/dto/task.dto";
import { UpdateTaskForm } from "@/components/task_components/update_task_form";

interface UpdateTaskButtonProps {
  taskId: string;
  task: TaskUpdateDTO;
}

export function UpdateTaskButton({ taskId, task }: UpdateTaskButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex justify-start px-2 py-1.5"
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95%] rounded-lg sm:w-full">
        <DialogHeader className="text-start">
          <DialogTitle>New task</DialogTitle>
          <DialogDescription>
            Fill up the fields below to update your task
          </DialogDescription>
        </DialogHeader>

        <UpdateTaskForm setOpen={setOpen} task={task} taskId={taskId} />
      </DialogContent>
    </Dialog>
  );
}
