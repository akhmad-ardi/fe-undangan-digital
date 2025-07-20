"use client";

import React from "react";
import { motion } from "motion/react";

// components
import { Card, CardContent } from "@/components/ui/card";

export default function MeetingInvitation() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gray-100 bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/meeting_bg/meeting_1.jpg')" }}
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
        <Card className="rounded-2xl border-blue-200 bg-white/80 shadow-lg backdrop-blur">
          <CardContent className="p-8 text-center">
            <motion.h1
              className="mb-4 text-3xl font-bold text-blue-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Undangan Rapat
            </motion.h1>

            <motion.p
              className="mb-6 text-base text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Dengan hormat, kami mengundang Anda untuk menghadiri rapat
              koordinasi internal yang akan diselenggarakan pada:
            </motion.p>

            <motion.div
              className="mb-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-semibold text-blue-600">Hari / Tanggal:</p>
              <p>Senin, 26 Agustus 2025</p>
              <p className="mt-2 font-semibold text-blue-600">Waktu:</p>
              <p>10.00 – 12.00 WITA</p>
              <p className="mt-2 font-semibold text-blue-600">Tempat:</p>
              <p>Ruang Rapat Lantai 2, Gedung Kantor Pusat</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
