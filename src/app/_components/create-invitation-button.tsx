"use client";

import React from "react";
import Link from "next/link";
import { Check, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";
import { toast } from "sonner";

export default function CreateInvitationButton() {
  const STATE = useCreateInvitationStore((state) => state);

  React.useEffect(() => {
    if (STATE.msg_success) {
      toast(STATE.msg_success, {
        icon: <Check />,
        position: "top-center",
      });
    }
  }, []);

  function handleOnclick() {
    STATE.resetStates();
  }

  return (
    <Button asChild onClick={handleOnclick}>
      <Link href="create-invitation">
        <Plus /> Buat Undangan
      </Link>
    </Button>
  );
}
