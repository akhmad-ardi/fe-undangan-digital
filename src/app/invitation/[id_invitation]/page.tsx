import React from "react";
import { headers } from "next/headers";

import WeddingInvitation from "../_components/wedding_template";
import BirthdayInvitation from "../_components/birthday_template";

import { GetInvitation, GuestView } from "@/services/api";

type Props = {
  params: Promise<{
    id_invitation: string;
  }>;
};

export default async function page({ params }: Props) {
  const { id_invitation } = await params;

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "Unknown";
  const userAgent = headersList.get("user-agent") || "Unknown";

  const invitation = await GetInvitation(id_invitation);

  await GuestView({
    id_invitation_link: invitation.InvitationLink.id_invitation_link,
    ip_address: ip,
    user_agent: userAgent,
  });

  if (invitation.id_template === "UNDANGN1") {
    return (
      <>
        <WeddingInvitation
          background_image={invitation.background_image}
          data_invitation={invitation.data_invitation}
        />
      </>
    );
  }

  if (invitation.id_template === "UNDANGN2") {
    return (
      <>
        <BirthdayInvitation
          background_image={invitation.background_image}
          data_invitation={invitation.data_invitation}
        />
      </>
    );
  }
}
