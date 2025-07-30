"use client";

import React from "react";
import { useRouter } from "next/navigation";

// components
import WeddingInvitation from "../../_components/wedding_template";
import MeetingInvitation from "../../_components/meeting_template";
import ReligiousInvitation from "../../_components/religious_template";
import BirthdayInvitation from "../../_components/birthday_template";

import { GetInvitationInterface } from "@/lib/utils";

type Props = {
  invitation: GetInvitationInterface;
};

export default function Invitation({ invitation }: Props) {
  const router = useRouter();

  React.useEffect(() => {
    if (!invitation) {
      router.push("/");
    }
  }, []);

  if (!invitation.InvitationLink?.is_active) {
    return <h1>Undang tidak Aktif</h1>;
  }

  if (invitation.id_template === "UNDANGN1") {
    return (
      <WeddingInvitation
        title={invitation.title}
        location={invitation.location}
        date={new Date(invitation.date).toISOString().split("T")[0]}
        time={new Date(invitation.time).toISOString().split("T")[1].slice(0, 5)}
        description={invitation.description}
        primary_color={invitation.primary_color}
        secondary_color={invitation.secondary_color}
        background_image={invitation.background_image}
      />
    );
  }

  if (invitation.id_template === "UNDANGN2") {
    return (
      <MeetingInvitation
        title={invitation.title}
        location={invitation.location}
        date={new Date(invitation.date).toISOString().split("T")[0]}
        time={new Date(invitation.time).toISOString().split("T")[1].slice(0, 8)}
        description={invitation.description}
        primary_color={invitation.primary_color}
        secondary_color={invitation.secondary_color}
        background_image={invitation.background_image}
      />
    );
  }

  if (invitation.id_template === "UNDANGN3") {
    return (
      <ReligiousInvitation
        title={invitation.title}
        location={invitation.location}
        date={new Date(invitation.date).toISOString().split("T")[0]}
        time={new Date(invitation.time).toISOString().split("T")[1].slice(0, 8)}
        description={invitation.description}
        primary_color={invitation.primary_color}
        secondary_color={invitation.secondary_color}
        background_image={invitation.background_image}
      />
    );
  }

  if (invitation.id_template === "UNDANGN4") {
    return (
      <BirthdayInvitation
        title={invitation.title}
        location={invitation.location}
        date={new Date(invitation.date).toISOString().split("T")[0]}
        time={new Date(invitation.time).toISOString().split("T")[1].slice(0, 8)}
        description={invitation.description}
        primary_color={invitation.primary_color}
        secondary_color={invitation.secondary_color}
        background_image={invitation.background_image}
      />
    );
  }
}
