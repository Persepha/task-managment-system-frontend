import { redirect } from "next/navigation";

export default function Home() {
  redirect("/tasks");
  return <h1>Test</h1>;
}
