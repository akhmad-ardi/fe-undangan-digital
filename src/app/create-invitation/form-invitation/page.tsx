import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// components
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/date-picker";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <h1 className="my-5 text-center text-3xl">Formulir Undangan</h1>

      <div className="relative mx-auto mt-10 w-[50%] lg:w-[25%]">
        <Slider defaultValue={[100]} disabled />

        <div className="border-primary bg-background ring-ring/50 absolute -top-1 left-0 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4"></div>
      </div>

      <form action="" className="mx-auto mt-10 mb-3 w-[80%] lg:w-[40%]">
        <div className="mb-3">
          <Button asChild>
            <Link href="">Pratinjau Undangan</Link>
          </Button>
        </div>

        <div className="mb-3">
          <Label htmlFor="title" className="mb-2">
            Judul Acara
          </Label>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="text"
              id="title"
              className="basis-4/5"
              placeholder="Judul Acara"
            />
            <Input type="color" id="color_title" className="basis-1/5" />
          </div>
        </div>

        <div className="mb-3">
          <Label htmlFor="date" className="mb-2">
            Tanggal
          </Label>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="date"
              id="date"
              className="basis-4/5"
              placeholder="Judul Acara"
            />
            <Input type="color" id="color_date" className="basis-1/5" />
          </div>
        </div>

        <div className="mb-3">
          <Label htmlFor="time" className="mb-2">
            Waktu
          </Label>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="time"
              id="time"
              className="basis-4/5"
              placeholder="Lokasi"
            />
            <Input type="color" id="color_time" className="basis-1/5" />
          </div>
        </div>

        <div className="mb-3">
          <Label htmlFor="location" className="mb-2">
            Lokasi
          </Label>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="text"
              id="location"
              className="basis-4/5"
              placeholder="Lokasi"
            />
            <Input type="color" id="color_location" className="basis-1/5" />
          </div>
        </div>

        <div className="mb-3">
          <Label htmlFor="description" className="mb-2">
            Deskripsi Acara
          </Label>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Textarea
              id="description"
              className="basis-4/5"
              placeholder="Deskripsi Acara"
            />
            <Input type="color" id="color_description" className="basis-1/5" />
          </div>
        </div>

        <div className="mb-3 flex flex-col gap-1">
          <Button type="submit">Buat Undangan</Button>

          <Button asChild variant="destructive">
            <Link href="/create-invitation">
              <ArrowLeft />
              Pilih Template
            </Link>
          </Button>
        </div>
      </form>
    </>
  );
}
