"use client";

import React from "react";
import { motion } from "motion/react";

// components
import { Card, CardContent } from "@/components/ui/card";

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

export default function ReligiousInvitation({
  title,
  location,
  date,
  time,
  description,
  background_image,
  primary_color,
  secondary_color,
}: Props) {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{ backgroundImage: `url('${background_image}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-xl"
      >
        <Card
          className="rounded-2xl bg-white/80 shadow-xl backdrop-blur"
          style={{ borderColor: primary_color }}
        >
          <CardContent className="p-8 text-center">
            <motion.h1
              className="text-[${primary_color}] mb-4 text-3xl font-bold"
              style={{ color: primary_color }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-[${secondary_color}] mb-6 text-base"
              style={{ color: secondary_color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="text-[${secondary_color}] mb-6"
              style={{ color: secondary_color }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-semibold" style={{ color: primary_color }}>
                Hari / Tanggal:
              </p>
              <p>{date}</p>

              <p
                className="mt-2 font-semibold"
                style={{ color: primary_color }}
              >
                Waktu:
              </p>
              <p>{time}</p>

              <p
                className="mt-2 font-semibold"
                style={{ color: primary_color }}
              >
                Tempat:
              </p>
              <p>{location}</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
