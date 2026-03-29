"use client";

import { motion } from "framer-motion";

interface EarningsBarProps {
  label: string;
  min: number;
  max: number;
  color: string;
  bgColor: string;
  maxScale?: number;
}

export default function EarningsBar({
  label,
  min,
  max,
  color,
  bgColor,
  maxScale = 50000,
}: EarningsBarProps) {
  const barWidth = (max / maxScale) * 100;
  const minWidth = (min / maxScale) * 100;

  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;

  return (
    <div className="flex items-center gap-4">
      <div className="w-36 shrink-0 text-sm font-medium text-charcoal">{label}</div>
      <div className="flex-1 relative h-7 rounded-full overflow-hidden" style={{ backgroundColor: bgColor }}>
        {/* Max bar */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full opacity-30"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${barWidth}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Min bar */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${minWidth}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold" style={{ color }}>
          {fmt(min)}–{fmt(max)}
        </span>
      </div>
    </div>
  );
}
