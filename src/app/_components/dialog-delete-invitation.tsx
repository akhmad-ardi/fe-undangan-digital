"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AlertCircle, Check, Trash2 } from "lucide-react";

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

import { DeleteInvitation } from "@/services/api";

import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";

type Props = {
  id_invitation: string;
  title: string;
};

export default function DialogDeleteInvitation({
  id_invitation,
  title,
}: Props) {
  const router = useRouter();

  const [loading, set_loading] = React.useState<boolean>(false);

  const { reset_states } = useCreateInvitationStore((state) => state);

  React.useEffect(() => {
    reset_states();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set_loading(true);

    const TOKEN = Cookies.get("token") || "";

    const data = await DeleteInvitation(id_invitation, TOKEN);

    if (data.message_error) {
      toast(data.message_error, {
        icon: <AlertCircle />,
        position: "top-center",
      });
    }

    if (data.message) {
      router.refresh();

      toast(data.message, {
        icon: <Check />,
        position: "top-center",
      });
    }

    set_loading(false);
  }

  return (
    <Dialog>
      <DialogTrigger className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-red-600 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
        <Trash2 color="red" />
        Hapus Undangan
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hapus Undangan</DialogTitle>

          <DialogDescription>
            Apakah anda ingin menghapus undangan {title}
          </DialogDescription>

          <form onSubmit={handleSubmit}>
            <DialogFooter className="mt-3">
              <DialogClose asChild>
                <Button type="button" variant="destructive" disabled={loading}>
                  Tutup
                </Button>
              </DialogClose>

              <Button type="submit" disabled={loading}>
                Hapus Undangan
              </Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
