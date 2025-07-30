import React from "react";

import Invitation from "./_components/invitation";
import { GetInvitation } from "@/services/api";

type Props = {
  params: Promise<{
    id_invitation: string;
  }>;
};

export default async function page({ params }: Props) {
  const { id_invitation } = await params;

  const invitation = await GetInvitation(id_invitation);

  console.log(invitation);

  return (
    <>
      <Invitation invitation={invitation} />
    </>
  );
}
