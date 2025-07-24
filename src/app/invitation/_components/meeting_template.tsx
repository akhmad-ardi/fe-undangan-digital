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

export default function MeetingInvitation({
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
      className="relative flex min-h-screen items-center justify-center bg-gray-100 bg-cover bg-center p-6"
      style={{ backgroundImage: `url('${background_image}')` }}
    >
      <div className="absolute inset-0 z-0 bg-black/30" />

      <motion.div
        className="absolute top-10 left-1/2 z-10 -translate-x-1/2 text-xl font-semibold text-white"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        📣 Jangan Lewatkan!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xl"
      >
        <Card
          className="rounded-2xl bg-white/80 shadow-lg backdrop-blur"
          style={{ borderColor: primary_color }}
        >
          <CardContent className="p-8 text-center">
            <motion.h1
              className="mb-4 text-3xl font-bold"
              style={{ color: primary_color }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mb-6 text-base"
              style={{ color: secondary_color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mb-6"
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
