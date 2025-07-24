"use client";

import React from "react";
import { useRouter } from "next/navigation";

// components
import WeddingInvitation from "../../_components/wedding_template";
import MeetingInvitation from "../../_components/meeting_template";
import ReligiousInvitation from "../../_components/religious_template";
import BirthdayInvitation from "../../_components/birthday_template";

import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";

type Props = {
  id_template: string;
};

export default function PreviewInvitation({ id_template }: Props) {
  const router = useRouter();

  const {
    title,
    location,
    date,
    time,
    description,
    primary_color,
    secondary_color,
    background_image,
  } = useCreateInvitationStore((state) => state);

  React.useEffect(() => {
    if (!id_template) {
      router.push("/create-invitation");
    }
  }, []);

  if (id_template === "UNDANGAN1") {
    return (
      <WeddingInvitation
        title={title}
        location={location}
        date={date}
        time={time}
        description={description}
        primary_color={primary_color}
        secondary_color={secondary_color}
        background_image={background_image}
      />
    );
  }

  if (id_template === "UNDANGAN2") {
    return (
      <MeetingInvitation
        title={title}
        location={location}
        date={date}
        time={time}
        description={description}
        primary_color={primary_color}
        secondary_color={secondary_color}
        background_image={background_image}
      />
    );
  }

  if (id_template === "UNDANGAN3") {
    return (
      <ReligiousInvitation
        title={title}
        location={location}
        date={date}
        time={time}
        description={description}
        primary_color={primary_color}
        secondary_color={secondary_color}
        background_image={background_image}
      />
    );
  }

  if (id_template === "UNDANGAN4") {
    return (
      <BirthdayInvitation
        title={title}
        location={location}
        date={date}
        time={time}
        description={description}
        primary_color={primary_color}
        secondary_color={secondary_color}
        background_image={background_image}
      />
    );
  }
}
