import { DataTable } from "@/components/task_components/data-table";
import { columns } from "@/components/task_components/columns";

import { getTasks } from "@/lib/fetchers/task";
import { UserNav } from "@/components/auth/user-nav";
import { getMe } from "@/lib/fetchers/user";
import { redirect } from "next/navigation";

export default async function Page() {
  const data = await getTasks();
  const user = await getMe();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav user={user} />
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
