"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { CircleAlert, CirclePlus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

import { GenerateLink } from "@/services/api";

type Props = {
  id_invitation: string;
};

export default function DialogGenerateLink({ id_invitation }: Props) {
  const router = useRouter();

  const [open_dialog, set_open_dialog] = React.useState<boolean>(false);
  const [loading, set_loading] = React.useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    set_loading(true);
    e.preventDefault();

    const token = Cookies.get("token") || "";

    const data = await GenerateLink({ id_invitation }, token);

    if (data.message_error) {
      toast(data.message_error, {
        icon: <CircleAlert />,
        position: "top-center",
      });
    }

    router.refresh();

    set_loading(false);
  }

  return (
    <Dialog open={open_dialog} onOpenChange={set_open_dialog}>
      <DialogTrigger className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
        <CirclePlus />
        Generate Link
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Link</DialogTitle>
          <DialogDescription>Anda akan men-generate link!</DialogDescription>

          <form onSubmit={handleSubmit}>
            <DialogFooter className="mt-3">
              <DialogClose asChild>
                <Button type="button" variant="destructive" disabled={loading}>
                  Tutup
                </Button>
              </DialogClose>

              <Button type="submit" disabled={loading}>
                Generate
              </Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
