// API queries for Client components

import { TaskDTO, TaskUpdateDTO } from "@/lib/dto/task.dto";
import { CREATE_TASK_URL, TASKS_URL } from "@/lib/consts/apiUrls";
import { getCookie } from "cookies-next";


export async function createTask(task: TaskDTO): Promise<boolean> {
    const access_token = getCookie("_auth"); 
    
    const res = await fetch(CREATE_TASK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token, 
        },
        credentials: "include",
        body: JSON.stringify(task),
      });
    
      if (!res.ok) {
        console.log(res);
        throw new Error("Failed to create task");
      }
    
      return res.ok;
  
    console.log(task);
}

export async function deleteTask(id: string): Promise<boolean> {
  const access_token = getCookie("_auth"); 

  const res = await fetch(TASKS_URL + id + "/delete", {
    method: "DELETE",
    cache: "no-store",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to delete task");
  }

  return res.ok;
}

export async function updateTask(id: string, task: TaskUpdateDTO): Promise<boolean> {
  const access_token = getCookie("_auth"); 
    
  const res = await fetch(TASKS_URL + id + "/update/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token, 
      },
      credentials: "include",
      body: JSON.stringify(task),
    });
  
    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to update task");
    }
  
    return res.ok;
}

