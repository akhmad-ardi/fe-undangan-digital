"use server";

import { cookies } from "next/headers";

import { CheckAuth } from "./api";

export async function Auth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  const data = await CheckAuth(token);
  if (data.hasOwnProperty("message_error")) {
    // if (cookieStore.get("token")) cookieStore.delete("token");

    return { is_auth: false, token: "" };
  }

  return {
    is_auth: data.is_auth,
    token,
  };
}
