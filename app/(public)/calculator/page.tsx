import type { Metadata } from "next";
import IncomeCalculator from "@/components/IncomeCalculator";
import IncomeStreamComparison from "@/components/IncomeStreamComparison";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";
import { incomeStreams } from "@/data/income-streams";

export const metadata: Metadata = {
  title: "Passive Income Calculator — How Much Can You Earn?",
  description:
    "Use our free passive income calculator to estimate your monthly earnings from affiliate marketing, dividend investing, digital products, and more.",
  keywords: [
    "passive income calculator",
    "how much passive income",
    "passive income calculator by investment",
    "dividend income calculator",
  ],
};

export default function CalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Passive Income Calculator",
    description: "Calculate how much passive income you can earn based on your method, investment, and time",
    url: "https://zerotopassiveincome.com/calculator",
    applicationCategory: "FinanceApplication",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Calculator" },
            ]}
          />
          <div className="mt-6 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-4">
              Passive Income Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Estimate how much passive income you can build — based on your chosen method, investment, and hours per week.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <IncomeCalculator />

          <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-100 p-5 text-sm text-amber-800">
            <strong>Disclaimer:</strong> These estimates are based on industry averages and real-world examples from our community. Individual results vary significantly based on niche selection, consistency, market conditions, and quality of execution. Passive income is real but takes time and effort to build.
          </div>
        </div>
      </section>

      {/* Income method breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-3">Income by Investment Amount</h2>
            <p className="text-gray-500">What you can realistically earn at different capital levels</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { capital: "$0", label: "Zero budget", best: "Print-on-Demand, Digital Products", note: "Start with free tools, scale with earnings" },
              { capital: "$500", label: "Getting started", best: "Affiliate Blog, Digital Products", note: "Covers hosting + basic tools for 1 year" },
              { capital: "$5,000", label: "Accelerated start", best: "Affiliate + Dividends", note: "Cover tools + invest $2–3k in dividend stocks" },
              { capital: "$25,000", label: "Serious investor", best: "Dividend Investing, REITs", note: "~$85/month in dividends at 4% yield" },
              { capital: "$100,000", label: "Income machine", best: "Dividend Portfolio", note: "~$333/month at 4% yield + reinvestment" },
              { capital: "$500,000+", label: "Financial freedom", best: "Full dividend portfolio", note: "~$1,667/month — the crossover point" },
            ].map((row) => (
              <div key={row.capital} className="card p-5">
                <div className="text-2xl font-extrabold text-purple-600 mb-1">{row.capital}</div>
                <div className="text-sm font-semibold text-charcoal mb-3">{row.label}</div>
                <div className="text-xs text-gray-500 mb-3">{row.note}</div>
                <div className="rounded-lg bg-purple-50 px-3 py-2">
                  <span className="text-xs text-purple-600 font-semibold">Best method: </span>
                  <span className="text-xs text-gray-700">{row.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-charcoal mb-3">All Income Methods Compared</h2>
            <p className="text-gray-500">Side-by-side comparison to help you choose your path</p>
          </div>
          <IncomeStreamComparison />
        </div>
      </section>

      {/* Detailed breakdowns */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">
            Deep Dive: Income by Method
          </h2>
          <div className="space-y-8">
            {incomeStreams.map((stream) => (
              <div key={stream.id} className="card p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">{stream.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{stream.description}</p>
                  </div>
                  <span
                    className={`badge shrink-0 ${
                      stream.difficulty === "Easy"
                        ? "badge-easy"
                        : stream.difficulty === "Medium"
                        ? "badge-medium"
                        : "badge-hard"
                    }`}
                  >
                    {stream.difficulty}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="text-xs text-gray-400">Min/month</p>
                    <p className="font-bold text-charcoal">${stream.potentialMonthly.min.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <p className="text-xs text-gray-400">Max/month</p>
                    <p className="font-bold text-green-700">${stream.potentialMonthly.max.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-3">
                    <p className="text-xs text-gray-400">First income</p>
                    <p className="font-bold text-purple-700">{stream.timeToFirstIncome}</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3">
                    <p className="text-xs text-gray-400">Startup cost</p>
                    <p className="font-bold text-amber-700">
                      ${stream.startupCost.min}–${stream.startupCost.max.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
