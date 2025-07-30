"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Check, Copy, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";

import { GenerateLink } from "@/services/api";

type Props = {
  id_invitation: string;
};

export default function FormGenerateLink({ id_invitation }: Props) {
  const router = useRouter();

  const [loading, set_loading] = React.useState<boolean>(false);

  const [link, set_link] = React.useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    set_loading(true);
    e.preventDefault();

    const token = Cookies.get("token") || "";

    const data = await GenerateLink({ id_invitation }, token);

    set_link(data.link);

    router.refresh();

    set_loading(false);
  }

  function handleCopy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast("Salin Tautan Undangan Berhasil", {
          position: "top-center",
          icon: <Check />,
        });
      })
      .catch((err) => {
        toast("Salin Tautan Undangan Tidak Berhasil", {
          position: "top-center",
          icon: <X />,
        });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
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
