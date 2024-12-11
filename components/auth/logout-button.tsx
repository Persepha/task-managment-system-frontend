"use client";

import { logout } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      onClick={async () => {
        await logout();
        router.push("/signin");
      }}
      className="w-full flex justify-start"
    >
      Log out
    </Button>
  );
}
