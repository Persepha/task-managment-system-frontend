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
import { Plus } from "lucide-react";

export function CreateTaskButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95%] rounded-lg sm:w-full">
        <DialogHeader className="text-start">
          <DialogTitle>New task</DialogTitle>
          <DialogDescription>
            Fill up the fields below to create your new task
          </DialogDescription>
        </DialogHeader>

        <CreateNewTaskForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
