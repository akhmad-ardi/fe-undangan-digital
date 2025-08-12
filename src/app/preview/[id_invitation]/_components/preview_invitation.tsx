"use client";

import React from "react";

import WeddingInvitation from "@/app/invitation/_components/wedding_template";
import BirthdayInvitation from "@/app/invitation/_components/birthday_template";

import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";

type Props = {
  id_template: string;
  background_image: string;
};

export default function PreviewInvitation({
  id_template,
  background_image,
}: Props) {
  const { data_invitation } = useCreateInvitationStore((state) => state);

  if (Object.keys(data_invitation).length !== 0) {
    if (id_template === "UNDANGN1") {
      return (
        <WeddingInvitation
          background_image={background_image}
          data_invitation={data_invitation}
        />
      );
    }

    if (id_template === "UNDANGN2") {
      return (
        <BirthdayInvitation
          background_image={background_image}
          data_invitation={data_invitation}
        />
      );
    }
  }
}
