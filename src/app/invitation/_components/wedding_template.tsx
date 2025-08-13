"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { Great_Vibes, Poppins } from "next/font/google";

import { BACKEND_URL } from "@/lib/utils";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["cyrillic"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

type Props = {
  background_image: string;
  data_invitation: any;
};

export default function WeddingInvitation({
  background_image,
  data_invitation,
}: Props) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{
        backgroundImage: `url('${BACKEND_URL}/public/${background_image}')`,
        fontFamily: greatVibes.style.fontFamily,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/20" />

      <motion.div
        initial={{ x: "-20%", y: 0, opacity: 0 }}
        animate={{ x: "120%", y: -50, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="pointer-events-none fixed top-20 left-0 z-20"
      >
        <Image
          src="/bird.png"
          alt="Burung Terbang"
          width={200}
          height={200}
          className="opacity-80"
        />
      </motion.div>

      <motion.div
        initial={{ x: "20%", y: 0, opacity: 0 }}
        animate={{ x: "-120%", y: -50, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="pointer-events-none fixed top-20 right-0 z-20"
      >
        <Image
          src="/bird.png"
          alt="Burung Terbang"
          width={200}
          height={200}
          className="-scale-x-100 opacity-80"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-xl"
      >
        <h1
          className="mb-4 text-center text-5xl font-bold"
          style={{ color: data_invitation?.theme?.primary_color }}
        >
          {data_invitation?.event?.title}
        </h1>

        <p
          className="mb-5 text-center text-lg"
          style={{
            color: data_invitation?.theme?.secondary_color,
            fontFamily: poppins.style.fontFamily,
          }}
        >
          {data_invitation?.message}
        </p>

        <section>
          <div
            className="flex justify-center gap-5 text-2xl"
            style={{ color: data_invitation?.theme?.primary_color }}
          >
            <div className="text-center">
              <h2 className="mb-1 text-2xl font-semibold">
                {data_invitation?.event?.groom.full_name}
              </h2>
              <p>{data_invitation?.event?.groom.nickname}</p>
            </div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={50} color={data_invitation?.theme?.primary_color} />
            </motion.div>

            <div className="text-center">
              <h2 className="mb-1 text-2xl font-semibold">
                {data_invitation?.event?.bride.full_name}
              </h2>
              <p>{data_invitation?.event?.bride.nickname}</p>
            </div>
          </div>
        </section>

        <section className="text-2xl">
          <div className="my-3 text-center">
            <p
              className="font-bold"
              style={{ color: data_invitation?.theme?.primary_color }}
            >
              Hari / Tanggal:
            </p>
            <p
              className="text-lg"
              style={{
                color: data_invitation?.theme?.secondary_color,
                fontFamily: poppins.style.fontFamily,
              }}
            >
              {data_invitation?.event?.date}
            </p>
          </div>

          <div className="mb-3 text-center">
            <p
              className="font-bold"
              style={{ color: data_invitation?.theme?.primary_color }}
            >
              Waktu:
            </p>
            <p
              className="text-lg"
              style={{
                color: data_invitation?.theme?.secondary_color,
                fontFamily: poppins.style.fontFamily,
              }}
            >
              Pukul {data_invitation?.event?.time}
            </p>
          </div>

          <div className="mb-3 text-center">
            <p
              className="font-bold"
              style={{ color: data_invitation?.theme?.primary_color }}
            >
              Lokasi:
            </p>
            <p
              className="text-lg"
              style={{
                color: data_invitation?.theme?.secondary_color,
                fontFamily: poppins.style.fontFamily,
              }}
            >
              {data_invitation?.event?.venue.name} |{" "}
              {data_invitation?.event?.venue.address}
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
