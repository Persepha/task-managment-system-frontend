"use client";

import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteTaskButton from "@/components/task_components/delete-task-button";
import { copyToClipboard } from "@/lib/utils";
import { taskSchema } from "@/lib/dto/task.dto";
import { toast } from "sonner";
import { priorities, statuses } from "@/components/task_components/data-types";
import { updateTask } from "@/lib/queries/task";
import { getMe } from "@/lib/queries/auth";
import { useRouter } from "next/navigation";
import { UpdateTaskButton } from "@/components/task_components/update_task_button";
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original);
  const router = useRouter();

  async function handleUpdateTaskStatus({
    actualValue,
    id,
    value,
    isPriority = false,
  }: {
    value: string;
    id: string;
    actualValue: string;
    isPriority: boolean;
  }) {
    // Check if the user is logged in and auth token is valid
    if (actualValue === value) return;

    const user = await getMe();
    if (!user) router.push("/signin");

    try {
      if (isPriority) {
        const res = await updateTask(id, {
          priority: value.toLowerCase() as "low" | "medium" | "high",
        });
      } else {
        const res = await updateTask(id, {
          status: value.toLowerCase() as "pending" | "in process" | "done",
        });
      }

      toast.success("Task updated");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <UpdateTaskButton
          taskId={task.id.toString()}
          task={{
            title: task.title,
            description: task.description,
            status: task.status.toLowerCase() as
              | "pending"
              | "in process"
              | "done",
            priority: task.priority.toLowerCase() as "low" | "medium" | "high",
            closing_date: task.closing_date,
          }}
        />

        <DropdownMenuItem
          onClick={() => {
            copyToClipboard(task.id.toString());
            toast.success("Task ID copied to clipboard");
          }}
        >
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={task.status}
              onValueChange={(e) =>
                handleUpdateTaskStatus({
                  value: e,
                  actualValue: task.status,
                  id: task.id.toString(),
                  isPriority: false,
                })
              }
            >
              {statuses.map((status) => (
                <DropdownMenuRadioItem key={status.value} value={status.value}>
                  {status.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Priority</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={task.priority}
              onValueChange={(e) =>
                handleUpdateTaskStatus({
                  value: e,
                  actualValue: task.priority,
                  id: task.id.toString(),
                  isPriority: true,
                })
              }
            >
              {priorities.map((priority) => (
                <DropdownMenuRadioItem
                  key={priority.value}
                  value={priority.value}
                >
                  {priority.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DeleteTaskButton taskId={task.id.toString()} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
