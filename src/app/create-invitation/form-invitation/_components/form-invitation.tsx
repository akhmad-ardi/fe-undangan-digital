"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ArrowLeft, CircleAlert } from "lucide-react";

// components
import { Alert } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Loading from "@/components/page-loader";

import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";

import { CreateInvitation, GenerateLink } from "@/services/api";

import { base64ToFile } from "@/lib/utils";

export default function FormInvitation() {
  const router = useRouter();

  const [loading, set_loading] = React.useState<boolean>(false);

  const STATE = useCreateInvitationStore((state) => state);

  const [title_msg_error, set_title_msg_error] = React.useState<string>("");
  const [location_msg_error, set_location_msg_error] =
    React.useState<string>("");
  const [date_msg_error, set_date_msg_error] = React.useState<string>("");
  const [time_msg_error, set_time_msg_error] = React.useState<string>("");
  const [description_msg_error, set_description_msg_error] =
    React.useState<string>("");

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    set_loading(true);
    e.preventDefault();

    const TOKEN = Cookies.get("token") || "";

    const CreateData = await CreateInvitation(
      {
        id_template: STATE.id_template,
        title: STATE.title,
        location: STATE.location,
        date: STATE.date,
        time: `${STATE.time}:00`,
        description: STATE.description,
        primary_color: STATE.primary_color,
        secondary_color: STATE.secondary_color,
        background_image: base64ToFile(STATE.background_image),
      },
      TOKEN,
    );

    set_title_msg_error(CreateData.validation_errors?.title || "");
    set_location_msg_error(CreateData.validation_errors?.location || "");
    set_date_msg_error(CreateData.validation_errors?.date || "");
    set_time_msg_error(CreateData.validation_errors?.time || "");
    set_description_msg_error(CreateData.validation_errors?.description || "");

    if (CreateData.message) {
      const submitter = (e.nativeEvent as SubmitEvent)
        .submitter as HTMLButtonElement;
      const action = submitter?.value;

      console.log(action);
      if (action === "create-invitation-and-generate-link") {
        await GenerateLink({ id_invitation: CreateData.id_invitation }, TOKEN);
      }

      STATE.setMsgSuccess(CreateData.message);

      set_loading(false);
      router.push("/");
    }

    set_loading(false);
  }

  return (
    <div className="mx-auto mt-10 mb-3 w-[80%] lg:w-[40%]">
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
        {title_msg_error && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {title_msg_error}
          </Alert>
        )}
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
        {location_msg_error && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {location_msg_error}
          </Alert>
        )}
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
        {date_msg_error && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {date_msg_error}
          </Alert>
        )}
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
        {time_msg_error && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {time_msg_error}
          </Alert>
        )}
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
        {description_msg_error && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {description_msg_error}
          </Alert>
        )}
      </div>

      <div className="mb-3 flex flex-col gap-1">
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" disabled={loading}>
              Buat Undangan
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Generate Link</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Apakah anda ingin generate link?
            </DialogDescription>
            <form onSubmit={handleSubmit}>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    disabled={loading}
                  >
                    Tutup
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  disabled={loading}
                  name="action"
                  value="create-invitation"
                >
                  Buat Undangan
                </Button>

                <Button
                  type="submit"
                  disabled={loading}
                  name="action"
                  value="create-invitation-and-generate-link"
                >
                  Buat Undangan dan Generate Link
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Button
          type="button"
          variant="destructive"
          onClick={() => {
            STATE.resetStates();
            router.push("/create-invitation");
          }}
          disabled={loading}
        >
          <ArrowLeft />
          Pilih Template
        </Button>
      </div>
    </div>
  );
}
