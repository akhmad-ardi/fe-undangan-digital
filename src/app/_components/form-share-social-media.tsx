"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";

export default function FormShareSocialMedia() {
  return (
    <div className="my-5 flex justify-center gap-3">
      <form className="w-1/3">
        <input type="hidden" value="na" />
        <Button
          type="submit"
          className="flex h-fit w-full cursor-pointer flex-col bg-green-600 hover:bg-green-500"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          Bagikan ke WhatsApp
        </Button>
      </form>

      <form className="w-1/3">
        <input type="hidden" value="na" />
        <Button
          type="submit"
          className="flex h-fit w-full cursor-pointer flex-col bg-orange-600 hover:bg-orange-500"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          Bagikan ke Instagram
        </Button>
      </form>
    </div>
  );
}
