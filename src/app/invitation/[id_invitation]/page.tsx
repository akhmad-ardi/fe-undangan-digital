import React from "react";
import { headers } from "next/headers";

import Invitation from "./_components/invitation";
import { GetInvitation } from "@/services/api";

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

  // console.log(invitation);

  return (
    <>
      <Invitation
        invitation={invitation}
        ip_address={ip}
        user_agent={userAgent}
      />
    </>
  );
}
