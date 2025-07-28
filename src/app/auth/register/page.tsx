import React from "react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import FormRegister from "./_components/form-register";

export default function page() {
  return (
    <Card className="mx-auto w-[90%] p-10 shadow md:w-[50%] lg:w-[35%]">
      <h1 className="text-center text-3xl">Register</h1>

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
