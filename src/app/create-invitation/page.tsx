import React from "react";

// components
import { Slider } from "@/components/ui/slider";

export default function page() {
  return (
    <>
      <h1 className="my-5 text-center text-3xl">Buat Undangan</h1>

      <div className="relative mx-auto mt-10 w-[50%] lg:w-[25%]">
        <Slider defaultValue={[0]} disabled />

        <div className="border-primary bg-background ring-ring/50 absolute -top-1 right-0 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4"></div>
      </div>
    </>
  );
}
