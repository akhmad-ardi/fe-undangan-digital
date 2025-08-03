"use client";

import React from "react";
import Cookies from "js-cookie";
import { Check, Share2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { ShareSocialMedia } from "@/services/api";

type Props = {
  id_invitation: string;
};

export default function DialogShareSocialMedia({ id_invitation }: Props) {
  const [loading, set_loading] = React.useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set_loading(true);

    const TOKEN = Cookies.get("token") || "";

    const data = await ShareSocialMedia(
      {
        id_invitation,
        name_platform: "whatsapp",
      },
      TOKEN,
    );

    if (data.link) {
      toast("Berhasil dibagikan", {
        icon: <Check />,
        position: "top-center",
      });

      const encodedText = encodeURIComponent(
        `Hai! Saya ingin mengundangmu ke acara ini: ${data.link}`,
      );

      window.open(`https://wa.me/?text=${encodedText}`, "_blank");
    }

    set_loading(false);
  }

  return (
    <Dialog>
      <DialogTrigger className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
        <Share2 />
        Bagikan ke Sosial Media
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bagikan ke Sosial Media</DialogTitle>
          <DialogDescription>
            Pilih platform yang anda ingin bagikan!
          </DialogDescription>
          <div className="my-5 flex justify-center gap-3">
            <form className="w-1/3" onSubmit={handleSubmit}>
              <Button
                type="submit"
                className="flex h-fit w-full cursor-pointer flex-col bg-green-600 hover:bg-green-500"
                disabled={loading}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                Bagikan ke WhatsApp
              </Button>
            </form>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive" disabled={loading}>
              Tutup
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
