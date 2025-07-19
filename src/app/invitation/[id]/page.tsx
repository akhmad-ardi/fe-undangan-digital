import React from "react";

import WeddingInvitation from "./_components/wedding_template";
import BirthdayInvitation from "./_components/birthday_template";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <BirthdayInvitation />
    </>
  );
}
