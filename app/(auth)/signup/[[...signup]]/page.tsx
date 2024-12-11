import { getMe } from "@/lib/fetchers/user";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
};

export default async function Page() {
  const user = await getMe();
  if (user) {
    redirect("/tasks");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SignUpForm />
    </div>
  );
}
