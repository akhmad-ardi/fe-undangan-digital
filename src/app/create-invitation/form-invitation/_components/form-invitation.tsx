"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Loading from "@/components/page-loader";

import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";

export default function FormInvitation() {
  const router = useRouter();

  const STATE = useCreateInvitationStore((state) => state);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (hydrated && !STATE.id_template) {
      router.push("/create-invitation");
    }
  }, [hydrated, STATE.id_template]);

  if (!hydrated) {
    return <Loading />;
  }

  return (
    <form action="" className="mx-auto mt-10 mb-3 w-[80%] lg:w-[40%]">
      <div className="mb-3">
        <Button asChild>
          <Link
            href={`/invitation/preview?id_template=${STATE.id_template}`}
            target="_blank"
          >
            Pratinjau Undangan
          </Link>
        </Button>
      </div>

      <div className="mb-3">
        <Label htmlFor="primary_color" className="mb-2">
          Primary Color
        </Label>
        <Input
          type="color"
          id="primary_color"
          className="basis-4/5"
          placeholder="Primary Color"
          value={STATE.primary_color}
          onChange={(e) => STATE.updatePrimaryColor(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="secondary_color" className="mb-2">
          Secondary Color
        </Label>
        <Input
          type="color"
          id="secondary_color"
          className="basis-4/5"
          placeholder="Primary Color"
          value={STATE.secondary_color}
          onChange={(e) => STATE.updateSecondaryColor(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="title" className="mb-2">
          Judul Acara
        </Label>
        <Input
          type="text"
          id="title"
          className="basis-4/5"
          placeholder="Judul Acara"
          value={STATE.title}
          onChange={(e) => STATE.updateTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="location" className="mb-2">
          Lokasi
        </Label>
        <Input
          type="text"
          id="location"
          className="basis-4/5"
          placeholder="Lokasi"
          value={STATE.location}
          onChange={(e) => STATE.updateLocation(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="date" className="mb-2">
          Tanggal
        </Label>
        <Input
          type="date"
          id="date"
          className="basis-4/5"
          placeholder="Judul Acara"
          value={STATE.date}
          onChange={(e) => STATE.updateDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="time" className="mb-2">
          Waktu
        </Label>
        <Input
          type="time"
          id="time"
          className="basis-4/5"
          placeholder="Lokasi"
          value={STATE.time}
          onChange={(e) => STATE.updateTime(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="description" className="mb-2">
          Deskripsi Acara
        </Label>
        <Textarea
          id="description"
          className="basis-4/5"
          placeholder="Deskripsi Acara"
          value={STATE.description}
          onChange={(e) => STATE.updateDescription(e.target.value)}
        />
      </div>

      <div className="mb-3 flex flex-col gap-1">
        <Button type="submit">Buat Undangan</Button>

        <Button
          type="button"
          variant="destructive"
          onClick={() => STATE.resetStates()}
          asChild
        >
          <Link href="/create-invitation">
            <ArrowLeft />
            Pilih Template
          </Link>
        </Button>
      </div>
    </form>
  );
}
