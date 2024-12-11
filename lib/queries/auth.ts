// API queries for Client components

import { getCookie } from "cookies-next";
import { UserDto } from "@/lib/dto/user.dto";
import { USER_URL } from "@/lib/consts/apiUrls";

export async function getMe(): Promise<UserDto> {
  const access_token = getCookie("_auth"); 

  const res = await fetch(USER_URL, {
    cache: "no-store",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + access_token, //the token is a variable which holds the token
    },
  });

  if (!res.ok) return undefined;

  return (await res.json()) as UserDto;
}
