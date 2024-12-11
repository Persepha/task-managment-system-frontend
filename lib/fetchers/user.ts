import { cookies } from "next/headers";
import { USER_URL } from "../consts/apiUrls";
import { UserDto } from "../dto/user.dto";

export async function getMe(): Promise<UserDto> {
  const cookieStore = cookies();
  const access_token = cookieStore.get("_auth");


  const res = await fetch(USER_URL, {
    cache: "no-store",
    headers: {
      Cookie: `_auth=${access_token?.value}`,
    },
  });

  if (!res.ok) return undefined;

  return (await res.json()) as UserDto;
}
