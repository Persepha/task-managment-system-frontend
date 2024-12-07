import { TASKS_URL } from "../consts/apiUrls";
import { TaskDto } from "../dto/task.dto";


export async function getTaskById(id: string): Promise<TaskDto> {
    const res = await fetch(TASKS_URL + id, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch task');
    }

    return (await res.json()) as TaskDto;
}
