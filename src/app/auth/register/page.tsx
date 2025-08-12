import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import FormRegister from "./_components/form-register";
import { Auth } from "@/services/auth";

export default async function page() {
  const data = await Auth();
  if (data.is_auth) {
    return redirect("/");
  }

  return (
    <Card className="mx-auto w-[90%] p-10 shadow md:w-[50%] lg:w-[35%]">
      <h1 className="text-center text-3xl">Daftar</h1>

      <FormRegister />

      <p className="text-center">
        Silahkan{" "}
        <Link href="/auth/login" className="text-blue-700 underline">
          login
        </Link>{" "}
        jika sudah punya akun
      </p>
    </Card>
  );
}
