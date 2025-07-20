"use client";

import React from "react";
import { motion } from "motion/react";

// components
import { Card, CardContent } from "@/components/ui/card";

export default function WeddingInvitation() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{ backgroundImage: "url('/wedding_bg/wedding_1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-xl"
      >
        <Card className="w-full max-w-xl rounded-2xl border-pink-200 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-pink-600">
              Undangan Pernikahan
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              Dengan penuh cinta dan sukacita, kami mengundang Anda untuk hadir
              dalam acara pernikahan kami
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-pink-500">
                Naruto & Hinata
              </h2>
              <p className="mt-2 text-gray-600">Sabtu, 10 Agustus 2025</p>
              <p className="text-gray-600">Pukul 10.00 WITA</p>
              <p className="text-gray-600">
                Gedung Balai Prajurit Jend. M. Yusuf, Makassar
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
