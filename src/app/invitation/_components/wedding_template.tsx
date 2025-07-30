"use client";

import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

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

export default function WeddingInvitation({
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
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-xl"
      >
        <Card
          className="w-full max-w-xl rounded-2xl shadow-2xl"
          style={{ borderColor: primary_color }}
        >
          <CardContent className="p-8 text-center">
            <h1
              className="mb-4 text-4xl font-bold"
              style={{ color: primary_color }}
            >
              Undangan Pernikahan
            </h1>
            <p className="mb-5 text-lg" style={{ color: secondary_color }}>
              {description}
            </p>

            <div>
              <div
                className="flex justify-center gap-3"
                style={{ color: primary_color }}
              >
                <Heart />
                <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
                <Heart />
              </div>

              <p className="mt-3 font-bold" style={{ color: primary_color }}>
                Hari / Tanggal:
              </p>
              <p style={{ color: secondary_color }}>{date}</p>

              <p className="mt-3 font-bold" style={{ color: primary_color }}>
                Waktu:
              </p>
              <p style={{ color: secondary_color }}>Pukul {time}</p>

              <p className="mt-3 font-bold" style={{ color: primary_color }}>
                Lokasi:
              </p>
              <p style={{ color: secondary_color }}>{location}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
