import { SIGN_IN_URL, LOGOUT_URL } from "@/lib/consts/apiUrls";
import { SignInFormDto, SignInResponseDto } from "@/lib/dto/auth.dto";
import { deleteCookie } from "cookies-next";

export async function signIn(data: SignInFormDto): Promise<SignInResponseDto> {
  const res = await fetch(SIGN_IN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to  sign in");
  }

  return (await res.json()) as SignInResponseDto;
}

export async function logout() {
  const res = await fetch(LOGOUT_URL, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to logout");
  }

  deleteCookie("_auth");
  deleteCookie("_refresh");
}


