"use client";

import { useState, useMemo } from "react";
import { DollarSign, Clock, TrendingUp } from "lucide-react";

type Method = "affiliate" | "dividends" | "digital-products" | "content" | "pod";

const methods: { id: Method; label: string; emoji: string }[] = [
  { id: "affiliate", label: "Affiliate Marketing", emoji: "🔗" },
  { id: "dividends", label: "Dividend Investing", emoji: "📈" },
  { id: "digital-products", label: "Digital Products", emoji: "📦" },
  { id: "content", label: "Blogging / YouTube", emoji: "✍️" },
  { id: "pod", label: "Print-on-Demand", emoji: "🖨️" },
];

function calculateIncome(
  method: Method,
  investment: number,
  hoursPerWeek: number,
  months: number
): { monthly: number; annual: number; yearThree: number } {
  let monthly = 0;

  if (method === "dividends") {
    // ~4% annual yield on investment amount
    monthly = (investment * 0.04) / 12;
  } else if (method === "affiliate") {
    // Scales with time invested, investment goes to tools/hosting
    const weeklyHourScore = hoursPerWeek * months * 0.8;
    monthly = Math.min(weeklyHourScore * 12, 15000);
  } else if (method === "digital-products") {
    const productValue = hoursPerWeek * 40 + investment * 0.2;
    monthly = Math.min(productValue * (months / 3), 20000);
  } else if (method === "content") {
    const contentScore = hoursPerWeek * months * 0.5;
    monthly = Math.min(contentScore * 8, 10000);
  } else if (method === "pod") {
    const designScore = hoursPerWeek * months * 0.3;
    monthly = Math.min(designScore * 5 + investment * 0.05, 5000);
  }

  const ramp = Math.min(months / 6, 1);
  monthly = monthly * ramp;

  return {
    monthly: Math.round(monthly),
    annual: Math.round(monthly * 12),
    yearThree: Math.round(monthly * 12 * 3 * 1.5),
  };
}

export default function IncomeCalculator() {
  const [method, setMethod] = useState<Method>("affiliate");
  const [investment, setInvestment] = useState(500);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [months, setMonths] = useState(12);

  const result = useMemo(
    () => calculateIncome(method, investment, hoursPerWeek, months),
    [method, investment, hoursPerWeek, months]
  );

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden income-glow">
      {/* Header */}
      <div className="bg-purple-gradient p-6 text-white">
        <h3 className="text-xl font-bold">Passive Income Calculator</h3>
        <p className="text-purple-200 text-sm mt-1">
          Estimate your monthly income based on your method and effort
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Method selector */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-3">
            Income Method
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all border ${
                  method === m.id
                    ? "border-purple-600 bg-purple-50 text-purple-700"
                    : "border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50/50"
                }`}
              >
                <span>{m.emoji}</span>
                <span className="text-xs leading-tight">{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Investment slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-charcoal flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-purple-600" />
              Initial Investment
            </label>
            <span className="text-sm font-bold text-purple-600">
              {formatCurrency(investment)}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="50000"
            step="100"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-purple-100 accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>$0</span>
            <span>$50k</span>
          </div>
        </div>

        {/* Hours per week */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-charcoal flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-purple-600" />
              Hours Per Week
            </label>
            <span className="text-sm font-bold text-purple-600">
              {hoursPerWeek} hrs/week
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            step="1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-purple-100 accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1 hr</span>
            <span>40 hrs</span>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-charcoal flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-purple-600" />
              Timeline
            </label>
            <span className="text-sm font-bold text-purple-600">{months} months</span>
          </div>
          <input
            type="range"
            min="1"
            max="36"
            step="1"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-purple-100 accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1 month</span>
            <span>3 years</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="rounded-xl bg-purple-50 p-4 text-center">
            <p className="text-xs text-purple-600 font-medium">Monthly</p>
            <p className="text-xl font-bold text-purple-700 mt-1">
              {formatCurrency(result.monthly)}
            </p>
          </div>
          <div className="rounded-xl bg-gold-100 p-4 text-center">
            <p className="text-xs text-amber-600 font-medium">Year 1</p>
            <p className="text-xl font-bold text-amber-700 mt-1">
              {formatCurrency(result.annual)}
            </p>
          </div>
          <div className="rounded-xl bg-green-50 p-4 text-center">
            <p className="text-xs text-green-600 font-medium">Year 3</p>
            <p className="text-xl font-bold text-green-700 mt-1">
              {formatCurrency(result.yearThree)}
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center">
          Estimates based on industry averages. Individual results vary significantly.
        </p>
      </div>
    </div>
  );
}
