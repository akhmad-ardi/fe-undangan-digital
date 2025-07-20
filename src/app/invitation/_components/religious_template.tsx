"use client";

import React from "react";
import { motion } from "motion/react";

// components
import { Card, CardContent } from "@/components/ui/card";

export default function ReligiousInvitation() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{ backgroundImage: "url('/religious_bg/religious_1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-xl"
      >
        <Card className="rounded-2xl border-green-200 bg-white/80 shadow-xl backdrop-blur">
          <CardContent className="p-8 text-center">
            <motion.h1
              className="mb-4 text-3xl font-bold text-green-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Undangan Pengajian
            </motion.h1>

            <motion.p
              className="mb-6 text-base text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir
              dalam acara pengajian yang akan diselenggarakan pada:
            </motion.p>

            <motion.div
              className="mb-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-semibold text-green-600">Hari / Tanggal:</p>
              <p>Jumat, 30 Agustus 2025</p>
              <p className="mt-2 font-semibold text-green-600">Waktu:</p>
              <p>19.00 WITA - Selesai</p>
              <p className="mt-2 font-semibold text-green-600">Tempat:</p>
              <p>Masjid Al-Ikhlas, Jl. Sejahtera No. 10, Makassar</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
