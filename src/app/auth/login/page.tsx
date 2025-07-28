import React from "react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import FormLogin from "./_components/form-login";
import { redirect } from "next/navigation";

import { Auth } from "@/services/auth";

export default async function page() {
  const data = await Auth();
  if (data.is_auth) {
    return redirect("/");
  }

  return (
    <Card className="mx-auto w-[90%] p-10 shadow md:w-[50%] lg:w-[35%]">
      <h1 className="text-center text-3xl">Login</h1>

      <FormLogin />

      <p className="text-center">
        Silahkan{" "}
        <Link href="/auth/register" className="text-blue-700 underline">
          daftar
        </Link>{" "}
        jika belum punya akun
      </p>
    </Card>
  );
}
