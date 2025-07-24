import React from "react";
import Image from "next/image";

// components
import { Slider } from "@/components/ui/slider";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FormChooseTemplate from "./_components/form-choose-template";
import { Button } from "@/components/ui/button";

import { TEMPLATES } from "@/lib/constant";

export default function page() {
  return (
    <>
      <h1 className="my-5 text-center text-3xl">Buat Undangan</h1>

      <div className="relative mx-auto mt-10 w-[50%] lg:w-[25%]">
        <Slider defaultValue={[0]} disabled />

        <div className="border-primary bg-background ring-ring/50 absolute -top-1 right-0 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4"></div>
      </div>

      <h1 className="mt-10 text-center">Pilih Template Undangan</h1>

      <div className="mt-7 mb-10 flex flex-col flex-wrap justify-center gap-3 lg:flex-row">
        {TEMPLATES.map((template, index) => (
          <Card className="p-3" key={index}>
            <CardContent className="p-0">
              <Image
                src={`/assets/${template.image}`}
                height={250}
                width={250}
                alt="Gambar Tidak Ditemukan"
              />

              <CardTitle className="mt-5">{template.name}</CardTitle>
            </CardContent>

            <CardFooter className="p-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Pilih</Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{template.name}</DialogTitle>
                  </DialogHeader>

                  <DialogDescription className="my-3">
                    Silahkan ubah warna dan latar belakang dari template jika
                    dibutuhkan.
                  </DialogDescription>

                  <FormChooseTemplate
                    id_template={template.id_template}
                    primary_color={template.primary_color}
                    secondary_color={template.secondary_color}
                    default_background_image={template.default_background_image}
                  />
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
