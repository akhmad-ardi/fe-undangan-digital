// app/(main)/loading.tsx
"use client";

import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <Loader2 className="text-primary h-10 w-10" />
      </motion.div>
    </div>
  );
}
