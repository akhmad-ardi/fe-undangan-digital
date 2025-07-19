"use client";

import React from "react";
import { motion } from "motion/react";

// components
import { Card, CardContent } from "@/components/ui/card";

export default function BirthdayInvitation() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center p-6"
      style={{ backgroundImage: "url('/birthday_bg/birthday_2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-blue-800/40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="rounded-2xl border-blue-200 bg-white/80 shadow-lg backdrop-blur">
          <CardContent className="p-8 text-center">
            <motion.h1
              className="mb-4 text-4xl font-bold text-blue-600"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Undangan Ulang Tahun
            </motion.h1>

            <motion.p
              className="mb-6 text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Hai teman! Yuk datang dan rayakan ulang tahunku bersama!
            </motion.p>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-2xl font-semibold text-blue-500">
                Raihan Alfarizi
              </h2>
              <p className="mt-2 text-gray-600">Minggu, 1 September 2025</p>
              <p className="text-gray-600">Pukul 15.00 WITA</p>
              <p className="text-gray-600">Funland Kids Cafe, Makassar</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
