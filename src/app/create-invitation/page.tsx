import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function page() {
  const TEMPLATES = [
    {
      name: "Undangan Pernikahan 1",
      image: "wedding_template_1.png",
    },
    {
      name: "Undangan Pernikahan 2",
      image: "wedding_template_2.png",
    },
    {
      name: "Undangan Rapat 1",
      image: "meeting_template_1.png",
    },
    {
      name: "Undangan Rapat 2",
      image: "meeting_template_2.png",
    },
    {
      name: "Undangan Keagamaan 1",
      image: "religious_template_1.png",
    },
    {
      name: "Undangan Keagamaan 2",
      image: "religious_template_2.png",
    },
    {
      name: "Undangan Ulang Tahun 1",
      image: "birthday_template_1.png",
    },
    {
      name: "Undangan Ulang Tahun 2",
      image: "birthday_template_2.png",
    },
  ];

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

                  <form action="">
                    <div className="mb-5">
                      <Label htmlFor="background_invitation" className="mb-2">
                        Upload Latar Belakang
                      </Label>
                      <Input type="file" id="background_invitation" />
                    </div>

                    <div className="flex justify-end gap-2">
                      <DialogClose asChild>
                        <Button type="button" variant="destructive">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit">Isi Formulir Undangan</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
