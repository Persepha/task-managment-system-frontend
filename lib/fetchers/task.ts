import { TASKS_URL } from "../consts/apiUrls";
import { TaskDTO, TaskOutputDTO } from "../dto/task.dto";
import { getMe } from "./user";
import { redirect } from "next/navigation";
import { ErrorResponse } from "../consts/types";
import { getCookie, getCookies } from "cookies-next";
import { cookies } from "next/headers";
import { taskCreateSchema } from "@/lib/validations/task";

export async function getTaskById(
  id: string
): Promise<TaskOutputDTO | { error: string }> {
  const res = await fetch(TASKS_URL + id, { cache: "no-store" });

  if (!res.ok) {
    const data = (await res.json()) as ErrorResponse;
    return { error: data.message };
  }

  const data = (await res.json()) as TaskOutputDTO;
  console.log(data);
  return data;
}

export async function getTasks(): Promise<TaskOutputDTO[]> {
  const user = await getMe();
  if (!user) {
    redirect("/signin");
  }

  const cookieStore = cookies();
  const access_token = cookieStore.get("_auth");

  const res = await fetch(TASKS_URL, {
    cache: "no-store",
    headers: {
      Cookie: `_auth=${access_token?.value}`,
    },
  });

  if (!res.ok) {
    return [];
  }

  return (await res.json()) as TaskOutputDTO[];
}

export async function deleteTask(id: string): Promise<boolean> {
  const user = await getMe();
  if (!user) {
    redirect("/signin");
  }

  const access_token = getCookie("_auth");
  console.log(access_token);

  const res = await fetch(TASKS_URL + id + "/delete", {
    method: "DELETE",
    headers: {
      Cookie: `_auth=${access_token}`,
    },
  });

  return res.ok;
}
