"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface RoadmapStepProps {
  step: number;
  title: string;
  description: string;
  timeframe: string;
  isLast?: boolean;
  completed?: boolean;
}

export default function RoadmapStep({
  step,
  title,
  description,
  timeframe,
  isLast = false,
  completed = false,
}: RoadmapStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: step * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Step indicator + line */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-bold text-sm transition-all ${
            completed
              ? "border-green-500 bg-green-500 text-white"
              : "border-purple-600 bg-purple-600 text-white"
          }`}
        >
          {completed ? <Check className="h-5 w-5" /> : step}
        </div>
        {!isLast && (
          <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-purple-200 to-transparent min-h-[2rem]" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? "" : ""}`}>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-charcoal">{title}</h3>
          <span className="badge bg-purple-100 text-purple-600">{timeframe}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
