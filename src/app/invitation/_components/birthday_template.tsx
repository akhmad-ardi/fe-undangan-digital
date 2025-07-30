"use client";

import React from "react";
import { motion } from "motion/react";

// components
import { Card, CardContent } from "@/components/ui/card";

import { BACKEND_URL } from "@/lib/utils";

type Props = {
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
  background_image: string;
  primary_color: string;
  secondary_color: string;
};

export default function BirthdayInvitation({
  title,
  location,
  date,
  time,
  description,
  background_image,
  primary_color,
  secondary_color,
}: Props) {
  const BackgroundImage = background_image.includes("base64")
    ? background_image
    : `${BACKEND_URL}/public/${background_image}`;

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-blue-800/40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg"
      >
        <Card
          className="rounded-2xl bg-white/80 shadow-lg backdrop-blur"
          style={{ borderColor: primary_color }}
        >
          <CardContent className="p-8 text-center">
            <motion.h1
              className="mb-4 text-4xl font-bold"
              style={{ color: primary_color }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Undangan Ulang Tahun
            </motion.h1>

            <motion.p
              className="mb-6 text-lg"
              style={{ color: secondary_color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2
                className="mb-3 text-2xl font-semibold"
                style={{ color: primary_color }}
              >
                {title}
              </h2>

              <p className="font-semibold" style={{ color: primary_color }}>
                Hari / Tanggal:
              </p>
              <p className="mb-2" style={{ color: secondary_color }}>
                {date}
              </p>

              <p className="font-semibold" style={{ color: primary_color }}>
                Waktu
              </p>
              <p className="mb-2" style={{ color: secondary_color }}>
                Pukul {time}
              </p>

              <p className="font-semibold" style={{ color: primary_color }}>
                Lokasi
              </p>
              <p className="mb-2" style={{ color: secondary_color }}>
                {location}
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
