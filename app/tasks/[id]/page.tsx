import { getTaskById } from "@/lib/fetchers/task";

type Props = {
  params: {
    id: string;
  };
};

export default async function TaskPage({ params: { id } }: Props) {
  const task = await getTaskById(id);
  return <h1>{JSON.stringify(task)}</h1>;
}
