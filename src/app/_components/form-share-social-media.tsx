"use client";

import React from "react";
import Cookies from "js-cookie";
import { Check } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { ShareSocialMedia } from "@/services/api";

type Props = {
  id_invitation: string;
};

export default function FormShareSocialMedia({ id_invitation }: Props) {
  const [loading, set_loading] = React.useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set_loading(true);

    const TOKEN = Cookies.get("token") || "";

    const data = await ShareSocialMedia(
      {
        id_invitation,
        name_platform: "whatsapp",
      },
      TOKEN,
    );

    console.log(data);
    if (data.link) {
      toast("Berhasil dibagikan", {
        icon: <Check />,
        position: "top-center",
      });

      const encodedText = encodeURIComponent(
        `Hai! Saya ingin mengundangmu ke acara ini: ${data.link}`,
      );

      window.open(`https://wa.me/?text=${encodedText}`, "_blank");
    }

    set_loading(false);
  }

  return (
    <div className="my-5 flex justify-center gap-3">
      <form className="w-1/3" onSubmit={handleSubmit}>
        <Button
          type="submit"
          className="flex h-fit w-full cursor-pointer flex-col bg-green-600 hover:bg-green-500"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          Bagikan ke WhatsApp
        </Button>
      </form>
    </div>
  );
}
