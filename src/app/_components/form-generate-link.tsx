"use client";

import React from "react";
import Cookies from "js-cookie";
import { Copy } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

import { GenerateLink } from "@/services/api";

type Props = {
  id_invitation: string;
};

export default function FormGenerateLink({ id_invitation }: Props) {
  const [loading, set_loading] = React.useState<boolean>(false);

  const [link, set_link] = React.useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    set_loading(true);
    e.preventDefault();

    const token = Cookies.get("token") || "";

    const data = await GenerateLink({ id_invitation }, token);

    set_link(data.link);

    set_loading(false);
  }

  function handleCopy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log("Tautan berhasil disalin!");
      })
      .catch((err) => {
        console.error("Gagal menyalin tautan:", err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 flex w-full items-center gap-2">
        <Input type="text" value={link} disabled />
        <Button type="button" variant="outline" onClick={handleCopy}>
          <Copy />
        </Button>
      </div>

      <div className="flex justify-end gap-2">
        <DialogClose asChild>
          <Button type="button" variant="destructive" disabled={loading}>
            Tutup
          </Button>
        </DialogClose>

        <Button type="submit" disabled={loading}>
          Generate
        </Button>
      </div>
    </form>
  );
}
