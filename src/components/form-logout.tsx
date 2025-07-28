"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { Button } from "./ui/button";
import { DialogClose } from "./ui/dialog";

export default function FormLogout() {
  const router = useRouter();

  const [loading, set_loading] = React.useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    set_loading(true);
    e.preventDefault();

    Cookies.remove("token");

    router.push("/auth/login");

    set_loading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-1">
      <DialogClose asChild>
        <Button type="button" variant="destructive" disabled={loading}>
          Tidak
        </Button>
      </DialogClose>
      <Button type="submit" disabled={loading}>
        Ya
      </Button>
    </form>
  );
}
