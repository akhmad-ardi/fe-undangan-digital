import React from "react";
import { redirect } from "next/navigation";

import PreviewInvitation from "./_components/preview_invitation";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function page({ searchParams }: Props) {
  const { id_template } = await searchParams;

  if (!id_template || Array.isArray(id_template)) {
    return redirect("/create-invitation");
  }

  return <PreviewInvitation id_template={id_template} />;
}
