"use client";

import React from "react";
import { motion } from "motion/react";
import { Pacifico, Open_Sans } from "next/font/google";

import RainingConfetti from "@/components/raining-confetti";
import { BACKEND_URL } from "@/lib/utils";

const pacifico = Pacifico({ weight: "400", subsets: ["cyrillic"] });
const openSans = Open_Sans({ weight: "400", subsets: ["cyrillic"] });

type Props = {
  background_image: string;
  data_invitation: any;
};

export default function BirthdayInvitation({
  background_image,
  data_invitation,
}: Props) {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{
        backgroundImage: `url('${BACKEND_URL}/public/${background_image}')`,
        fontFamily: pacifico.style.fontFamily,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-pink-400/40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg text-center"
      >
        {/* Balon dan confetti */}
        <motion.div
          className="mb-4 text-4xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🎈🎉🎂
        </motion.div>

        {/* Judul */}
        <motion.h1
          className="mb-2 text-5xl font-bold"
          style={{
            background: `linear-gradient(90deg, ${data_invitation?.theme?.primary_color}, ${data_invitation?.theme?.secondary_color})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {data_invitation?.event?.title}
        </motion.h1>

        <RainingConfetti />

        {/* Host name */}
        <motion.h2
          className="mb-4 text-3xl"
          style={{ color: data_invitation?.theme?.primary_color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Mengundangmu ke pesta {data_invitation?.event?.host_name} 🎁
        </motion.h2>

        {/* Pesan */}
        <motion.p
          className="mb-6 text-lg"
          style={{
            color: data_invitation?.theme?.secondary_color,
            fontFamily: openSans.style.fontFamily,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {data_invitation?.message}
        </motion.p>

        {/* Info Acara */}
        <motion.div
          className="grid gap-4 rounded-xl bg-white/70 p-5 shadow-lg backdrop-blur-sm"
          style={{ fontFamily: openSans.style.fontFamily }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div>
            <p
              className="font-bold"
              style={{ color: data_invitation?.theme?.primary_color }}
            >
              Acara
            </p>
            <p>{data_invitation?.event?.occasion}</p>
          </div>
          <div>
            <p
              className="font-bold"
              style={{ color: data_invitation?.theme?.primary_color }}
            >
              Hari / Tanggal
            </p>
            <p>{data_invitation?.event?.date}</p>
          </div>
          <div>
            <p
              className="font-bold"
              style={{ color: data_invitation?.theme?.primary_color }}
            >
              Waktu
            </p>
            <p>Pukul {data_invitation?.event?.time}</p>
          </div>
          <div>
            <p
              className="font-bold"
              style={{ color: data_invitation?.theme?.primary_color }}
            >
              Lokasi
            </p>
            <p>
              {data_invitation?.event?.location.venue} |{" "}
              {data_invitation?.event?.location.address}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
