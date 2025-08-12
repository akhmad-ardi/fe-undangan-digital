"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AlertCircle, CheckCircle, Router } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { BACKEND_URL } from "@/lib/utils";
import { AddBackgroundImage } from "@/services/api";

type Props = {
  id_invitation: string;
  background_image: string;
};

export default function FormAddBackgroundInvitation({
  id_invitation,
  background_image,
}: Props) {
  const router = useRouter();

  const [loading, set_loading] = React.useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    set_loading(true);

    const token = Cookies.get("token") || "";

    const formData = new FormData(e.currentTarget);
    const imageFile = formData.get("bg_image");

    if (!(imageFile instanceof File) || imageFile.size === 0) {
      set_loading(false);
      toast("Tidak ada gambar dipilih", {
        icon: <AlertCircle />,
        position: "top-center",
      });

      return;
    }

    const data = await AddBackgroundImage(id_invitation, formData, token);

    if (!data.message) {
      toast(data.message_error, {
        icon: <AlertCircle />,
        position: "top-center",
      });

      set_loading(false);

      return;
    }

    toast(data.message, {
      icon: <CheckCircle />,
      position: "top-center",
    });

    set_loading(false);

    router.refresh();
    return;
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Latar Belakang Undangan</CardTitle>
        <CardDescription>Silahkan ubah latar belakang</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-3">
          <Image
            className="mx-auto mb-3 w-1/2"
            src={`${BACKEND_URL}/public/${background_image}`}
            width={100}
            height={100}
            alt="Background Image"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Label htmlFor="bg_image" className="mb-2">
              Latar Belakang
            </Label>
            <Input
              type="file"
              id="bg_image"
              name="bg_image"
              className=""
              placeholder="Judul Acara"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
