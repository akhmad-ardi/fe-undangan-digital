"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";

type Props = {
  id_template: string;
  primary_color: string;
  secondary_color: string;
  default_background_image: string;
};

export default function FormChooseTemplate({
  id_template,
  primary_color,
  secondary_color,
  default_background_image,
}: Props) {
  const router = useRouter();

  const {
    updateIdTemplate,
    updatePrimaryColor,
    updateSecondaryColor,
    setDefaultBackgroundImage,
    setBackgroundImage,
  } = useCreateInvitationStore((state) => state);

  React.useEffect(() => {
    updateIdTemplate(id_template);
    updatePrimaryColor(primary_color);
    updateSecondaryColor(secondary_color);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fileInput = form.elements.namedItem(
      "background_invitation",
    ) as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (!file) {
      setDefaultBackgroundImage(default_background_image);
      return router.push("/create-invitation/form-invitation");
    }

    setBackgroundImage(file);
    return router.push("/create-invitation/form-invitation");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <Label htmlFor="background_invitation" className="mb-2">
          Upload Latar Belakang
        </Label>
        <Input
          type="file"
          name="background_invitation"
          id="background_invitation"
          accept="image/*"
        />
      </div>

      <div className="flex justify-end gap-2">
        <DialogClose asChild>
          <Button type="button" variant="destructive">
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit">Isi Formulir Undangan</Button>
      </div>
    </form>
  );
}
