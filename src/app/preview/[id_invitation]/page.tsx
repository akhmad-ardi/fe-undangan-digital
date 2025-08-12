import React from "react";

import { GetInvitation } from "@/services/api";
import PreviewInvitation from "./_components/preview_invitation";

type Props = {
  params: Promise<{
    id_invitation: string;
  }>;
};

export default async function page({ params }: Props) {
  const { id_invitation } = await params;

  const data = await GetInvitation(id_invitation);

  return (
    <PreviewInvitation
      id_template={data.id_template}
      background_image={data.background_image}
    />
  );
}
