"use client";

import React from "react";
import { Check, Copy, X } from "lucide-react";

import { toast } from "sonner";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

type Props = {
  link: string;
};

export default function CopyLink({ link }: Props) {
  function handleCopy() {
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
    <DropdownMenuItem onClick={handleCopy}>
      <Copy />
      Salin Link
    </DropdownMenuItem>
  );
}
