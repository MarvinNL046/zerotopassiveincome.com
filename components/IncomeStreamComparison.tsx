"use client";

import { motion } from "framer-motion";
import { incomeStreams } from "@/data/income-streams";

const attributes = [
  { key: "difficulty", label: "Difficulty" },
  { key: "timeToFirstIncome", label: "Time to Income" },
  { key: "startupCost", label: "Startup Cost" },
  { key: "passivityScore", label: "Passivity" },
  { key: "potential", label: "Max Potential" },
];

function renderCell(stream: (typeof incomeStreams)[0], attrKey: string) {
  const fmt = (n: number) => (n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`);

  switch (attrKey) {
    case "difficulty":
      return (
        <span
          className={`badge ${
            stream.difficulty === "Easy"
              ? "badge-easy"
              : stream.difficulty === "Medium"
              ? "badge-medium"
              : "badge-hard"
          }`}
        >
          {stream.difficulty}
        </span>
      );
    case "timeToFirstIncome":
      return <span className="text-sm text-gray-700">{stream.timeToFirstIncome}</span>;
    case "startupCost":
      return (
        <span className="text-sm text-gray-700">
          {fmt(stream.startupCost.min)}–{fmt(stream.startupCost.max)}
        </span>
      );
    case "passivityScore":
      return (
        <div className="flex items-center gap-2">
          <div className="h-2 w-16 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-purple-600"
              style={{ width: `${stream.passivityScore * 10}%` }}
            />
          </div>
          <span className="text-sm text-gray-700">{stream.passivityScore}/10</span>
        </div>
      );
    case "potential":
      return (
        <span className="text-sm font-semibold text-green-600">
          {fmt(stream.potentialMonthly.min)}–{fmt(stream.potentialMonthly.max)}/mo
        </span>
      );
    default:
      return null;
  }
}

export default function IncomeStreamComparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className="w-full min-w-[700px] text-sm border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-semibold text-charcoal w-40">Method</th>
            {attributes.map((attr) => (
              <th key={attr.key} className="text-left py-3 px-4 font-semibold text-charcoal">
                {attr.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {incomeStreams.map((stream, i) => (
            <tr
              key={stream.id}
              className={`border-b border-gray-100 hover:bg-purple-50/50 transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <td className="py-3.5 px-4">
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full shrink-0"
                    style={{ backgroundColor: stream.color }}
                  />
                  <span className="font-medium text-charcoal">{stream.title}</span>
                </div>
              </td>
              {attributes.map((attr) => (
                <td key={attr.key} className="py-3.5 px-4">
                  {renderCell(stream, attr.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
