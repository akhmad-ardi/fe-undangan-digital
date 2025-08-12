import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

// components
import { Slider } from "@/components/ui/slider";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

import { GetTemplates } from "@/services/api";
import { Auth } from "@/services/auth";
import DialogChooseTemplate from "./_components/dialog-choose-template";

export default async function page() {
  const auth = await Auth();

  if (!auth.is_auth) {
    return redirect("/auth");
  }

  const { templates: TEMPLATES } = await GetTemplates(auth.token);

  // console.log(TEMPLATES[0].data_template.theme);

  return (
    <>
      <h1 className="my-5 text-center text-3xl">Buat Undangan</h1>

      <div className="relative mx-auto mt-10 w-[50%] lg:w-[25%]">
        <Slider defaultValue={[0]} disabled />

        <div className="border-primary bg-background ring-ring/50 absolute -top-1 right-0 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4"></div>
      </div>

      <h1 className="mt-10 text-center">Pilih Template Undangan</h1>

      <div className="mt-7 mb-10 flex flex-col flex-wrap justify-center gap-3 lg:flex-row">
        {Array.isArray(TEMPLATES) &&
          TEMPLATES.map((template, index) => (
            <Card className="p-3" key={index}>
              <CardContent className="p-0">
                <Image
                  src={`http://localhost:3001/public/${template.background_image}`}
                  height={250}
                  width={250}
                  alt="Gambar Tidak Ditemukan"
                />

                <CardTitle className="mt-5">{template.name}</CardTitle>
              </CardContent>

              <CardFooter className="p-0">
                <DialogChooseTemplate
                  id_template={template.id_template}
                  name_template={template.name}
                  background_image={template.background_image}
                  data_invitation={template.data_template}
                />
              </CardFooter>
            </Card>
          ))}
      </div>
    </>
  );
}
