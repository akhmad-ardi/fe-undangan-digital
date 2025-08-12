"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Home } from "lucide-react";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { GenerateLink } from "@/services/api";

type Props = {
  id_invitation: string;
};

export default function GenerateLinkComponent({ id_invitation }: Props) {
  const router = useRouter();

  const token = Cookies.get("token") || "";

  const [loading, set_loading] = React.useState<boolean>(false);

  async function handleSubmitGenerateLink(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set_loading(true);

    const data = await GenerateLink({ id_invitation }, token);

    if (data.message) {
      console.log(data);
      toast(data.message, {
        icon: <AlertCircle />,
        position: "top-center",
        action: (
          <Button type="button" onClick={() => router.push("/")}>
            <Home />
          </Button>
        ),
      });
    }

    if (data.message_error) {
      toast(data.message_error, {
        icon: <AlertCircle />,
        position: "top-center",
      });
    }

    set_loading(false);
  }

  return (
    <form onSubmit={handleSubmitGenerateLink} className="">
      <Button type="submit" disabled={loading}>
        Generate Link
      </Button>
    </form>
  );
}
