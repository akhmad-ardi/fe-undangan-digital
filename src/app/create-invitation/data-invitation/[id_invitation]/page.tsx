import React from "react";
import Link from "next/link";
import { ArrowUpRightFromSquare } from "lucide-react";

// components
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import FormDataInvitation from "./_components/form-data-invitation";
import FormAddBackgroundInvitation from "./_components/form-add-background-invitation";
import GenerateLinkComponent from "./_components/generate-link";

import { GetInvitation } from "@/services/api";

type Props = {
  params: Promise<{
    id_invitation: string;
  }>;
};

export default async function page({ params }: Props) {
  const { id_invitation } = await params;

  const data = await GetInvitation(id_invitation);

  console.log("data-invitation", data);

  return (
    <>
      <h1 className="my-5 text-center text-3xl">Data Undangan [{data.name}]</h1>

      <div className="relative mx-auto mt-10 w-[50%] lg:w-[25%]">
        <Slider defaultValue={[100]} disabled />

        <div className="border-primary bg-background ring-ring/50 absolute -top-1 left-0 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4"></div>
      </div>

      <div className="mx-auto mt-5 flex w-8/12 gap-3">
        <Button asChild>
          <Link href={`/preview/${data.id_invitation}`} target="_blank">
            <ArrowUpRightFromSquare />
            Pratinjau Undangan
          </Link>
        </Button>

        <GenerateLinkComponent id_invitation={data.id_invitation} />
      </div>

      <div className="mx-auto mt-4 flex w-8/12 flex-col gap-3">
        <FormAddBackgroundInvitation
          id_invitation={data.id_invitation}
          background_image={data.background_image}
        />
        <FormDataInvitation
          id_invitation={data.id_invitation}
          initial_data={data.data_invitation}
        />
      </div>
    </>
  );
}
