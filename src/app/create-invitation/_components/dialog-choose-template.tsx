"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AlertCircle } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

import { CreateInvitation } from "@/services/api";

type Props = {
  id_template: string;
  name_template: string;
  background_image: string;
  data_invitation: any;
};

export default function DialogChooseTemplate({
  id_template,
  name_template,
  background_image,
  data_invitation,
}: Props) {
  const router = useRouter();

  const [loading, set_loading] = React.useState<boolean>(false);
  const [name_invitation, set_name_invitation] = React.useState<string>("");

  // React.useEffect(() => {
  //   console.log(data_invitation);
  // }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set_loading(true);

    const TOKEN = Cookies.get("token") || "";

    const data = await CreateInvitation(
      { id_template, name: name_invitation, background_image, data_invitation },
      TOKEN,
    );

    if (data.id_invitation) {
      // console.log(data);
      return router.push(
        `/create-invitation/data-invitation/${data.id_invitation}`,
      );
    }

    toast("Gagal membuat undangan", {
      icon: <AlertCircle />,
      position: "top-center",
    });

    set_loading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Pilih</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name_template}</DialogTitle>
        </DialogHeader>

        <DialogDescription className="my-1">
          Silahkan masukkan nama undangan!
        </DialogDescription>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Label htmlFor="name" className="mb-2">
              Nama
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nama Undangan"
              onChange={(e) => set_name_invitation(e.target.value)}
              value={name_invitation}
            />
          </div>

          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="destructive" disabled={loading}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              Edit Data Undangan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
