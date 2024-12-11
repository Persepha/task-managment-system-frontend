import { SignInForm } from "@/components/auth/signin_form";
import { getMe } from "@/lib/fetchers/user";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getMe();
  if (user) {
    redirect("/tasks");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SignInForm />
    </div>
  );
}
