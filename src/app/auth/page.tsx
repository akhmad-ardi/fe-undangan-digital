import React from "react";
import { redirect } from "next/navigation";
import { Auth } from "@/services/auth";

export default async function page() {
  const data = await Auth();
  if (data.is_auth) {
    return redirect("/");
  }

  return redirect("/auth/login");
}
