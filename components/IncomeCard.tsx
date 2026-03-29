"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Link as LinkIcon,
  TrendingUp,
  Package,
  Printer,
  FileText,
  Building2,
  ArrowRight,
} from "lucide-react";
import type { IncomeStream } from "@/data/income-streams";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Link: LinkIcon,
  TrendingUp,
  Package,
  Printer,
  FileText,
  Building2,
};

interface IncomeCardProps {
  stream: IncomeStream;
  index?: number;
}

export default function IncomeCard({ stream, index = 0 }: IncomeCardProps) {
  const Icon = iconMap[stream.icon] ?? TrendingUp;

  const difficultyClass =
    stream.difficulty === "Easy"
      ? "badge-easy"
      : stream.difficulty === "Medium"
      ? "badge-medium"
      : "badge-hard";

  const formatCurrency = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/${stream.slug}`}
        className="card p-6 flex flex-col gap-4 group block h-full hover:border-purple-200"
      >
        {/* Icon */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
          style={{ backgroundColor: stream.bgColor }}
        >
          <Icon className="h-6 w-6" style={{ color: stream.color }} />
        </div>

        {/* Title & description */}
        <div>
          <h3 className="font-bold text-charcoal text-lg group-hover:text-purple-600 transition-colors">
            {stream.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">
            {stream.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-xs text-gray-400 font-medium">Potential/month</p>
            <p className="font-bold text-charcoal mt-0.5">
              {formatCurrency(stream.potentialMonthly.min)}–{formatCurrency(stream.potentialMonthly.max)}
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-xs text-gray-400 font-medium">First income</p>
            <p className="font-bold text-charcoal mt-0.5 text-xs leading-snug">
              {stream.timeToFirstIncome}
            </p>
          </div>
        </div>

        {/* Passivity bar */}
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span>Passivity score</span>
            <span className="font-semibold text-charcoal">{stream.passivityScore}/10</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${stream.passivityScore * 10}%`,
                backgroundColor: stream.color,
              }}
            />
          </div>
        </div>

        {/* Badges + CTA */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className={difficultyClass}>{stream.difficulty}</span>
          <span className="text-sm font-semibold text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
