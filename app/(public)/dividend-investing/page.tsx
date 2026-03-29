import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, DollarSign, Shield, BarChart3 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Dividend Investing for Passive Income: The Complete Guide (2025)",
  description:
    "Learn how to build a dividend portfolio that pays you every quarter. Best dividend stocks, ETFs, and how much you need to invest to replace your income.",
  keywords: [
    "dividend investing passive income",
    "best dividend stocks 2025",
    "dividend portfolio",
    "how to live off dividends",
    "dividend investing beginners",
  ],
};

const dividendTools = tools.filter((t) =>
  t.incomeStreams.includes("dividend-investing")
);

const faqs = [
  {
    question: "How much do I need to invest to get $1,000/month from dividends?",
    answer: "At a 4% average dividend yield, you need $300,000 invested. At a higher 6% yield (from REITs or high-yield stocks), you need $200,000. The key is consistent reinvestment — starting with $10,000 and adding $500/month compounds dramatically over 10–15 years.",
  },
  {
    question: "Are dividends truly passive income?",
    answer: "Yes — dividend investing is the most genuinely passive income method. Once you've built your portfolio, dividends are deposited automatically. No work required beyond occasional portfolio rebalancing.",
  },
  {
    question: "What's the difference between dividend stocks and dividend ETFs?",
    answer: "Individual stocks offer higher potential yields but concentration risk. ETFs like SCHD or VYM give instant diversification across 50–100+ dividend payers for low fees. Beginners should start with ETFs.",
  },
  {
    question: "What is DRIP investing?",
    answer: "DRIP (Dividend Reinvestment Plan) automatically reinvests your dividends to buy more shares. This compound growth is powerful — $10,000 reinvested at 4% yield for 20 years becomes $21,911 without adding a single dollar.",
  },
  {
    question: "Is it better to invest in dividend stocks or growth stocks?",
    answer: "For passive income, dividend stocks are superior. For maximum long-term wealth, growth stocks may outperform. A balanced approach — dividend ETFs + growth ETFs — works well for most investors.",
  },
];

const topDividendStocks = [
  { name: "Johnson & Johnson (JNJ)", yield: "3.1%", years: "62 years", sector: "Healthcare" },
  { name: "Procter & Gamble (PG)", yield: "2.4%", years: "68 years", sector: "Consumer" },
  { name: "Realty Income (O)", yield: "5.8%", years: "Monthly payer", sector: "REIT" },
  { name: "Coca-Cola (KO)", yield: "3.2%", years: "62 years", sector: "Consumer" },
  { name: "SCHD ETF", yield: "3.5%", years: "ETF, 150+ stocks", sector: "Diversified" },
  { name: "VYM ETF", yield: "2.9%", years: "ETF, 400+ stocks", sector: "Diversified" },
];

export default function DividendInvestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dividend Investing for Passive Income: The Complete Guide",
    description: metadata.description,
    author: { "@type": "Organization", name: "Zero To Passive Income" },
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
              { name: "Dividend Investing" },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 mb-5">
                <span className="badge-easy">Easy</span>&nbsp;·&nbsp; Truly passive — 10/10 passivity
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-5 leading-tight">
                Dividend Investing: The Most Passive Way to Earn Income
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Buy stocks that pay you quarterly cash. Reinvest, compound, repeat. No content creation, no customers, no work — just your money working 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/guides/best-dividend-stocks-for-passive-income" className="btn-primary">
                  Best Dividend Stocks 2025 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/calculator" className="btn-secondary">
                  Calculate Your Dividends
                </Link>
              </div>
            </div>

            {/* Income projection */}
            <div className="rounded-2xl bg-green-50 border border-green-100 p-8">
              <h3 className="font-bold text-charcoal mb-5">Monthly Dividend Income Projection</h3>
              <p className="text-xs text-gray-500 mb-4">Assuming 4% average yield + 5% annual contributions</p>
              <div className="space-y-3">
                {[
                  { capital: "$10,000", monthly: "$33", years: "Year 1" },
                  { capital: "$50,000", monthly: "$167", years: "Year 3" },
                  { capital: "$150,000", monthly: "$500", years: "Year 7" },
                  { capital: "$300,000", monthly: "$1,000", years: "Year 12" },
                  { capital: "$600,000", monthly: "$2,000", years: "Year 18" },
                ].map((row) => (
                  <div key={row.capital} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 w-24">{row.years}</span>
                    <div className="flex-1 mx-4 h-2 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${(parseInt(row.monthly.replace(/[$,]/g, "")) / 2000) * 100}%` }}
                      />
                    </div>
                    <span className="font-bold text-green-700 w-20 text-right">{row.monthly}/mo</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why dividends */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Dividend Investing Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Cash in Your Account",
                description: "Dividends are deposited as real cash — quarterly or monthly. Use it or reinvest it.",
                color: "bg-green-50",
                iconColor: "text-green-600",
              },
              {
                icon: TrendingUp,
                title: "Compounding Growth",
                description: "Reinvest dividends to buy more shares. More shares = more dividends. Exponential growth.",
                color: "bg-purple-50",
                iconColor: "text-purple-600",
              },
              {
                icon: Shield,
                title: "Built for Stability",
                description: "Dividend Aristocrats have raised payouts for 25+ consecutive years — including recessions.",
                color: "bg-amber-50",
                iconColor: "text-amber-600",
              },
              {
                icon: BarChart3,
                title: "True Passivity",
                description: "Once invested, no work required. Dividends arrive automatically. 10/10 passivity score.",
                color: "bg-blue-50",
                iconColor: "text-blue-600",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl ${item.color} p-6`}>
                <item.icon className={`h-8 w-8 ${item.iconColor} mb-3`} />
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top dividend stocks */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Top Dividend Stocks & ETFs for 2025</h2>
            <p className="section-subheading mx-auto">
              Reliable dividend payers with long track records.
            </p>
          </div>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left p-4 font-semibold text-charcoal">Stock/ETF</th>
                  <th className="text-left p-4 font-semibold text-charcoal">Yield</th>
                  <th className="text-left p-4 font-semibold text-charcoal">Track Record</th>
                  <th className="text-left p-4 font-semibold text-charcoal">Sector</th>
                </tr>
              </thead>
              <tbody>
                {topDividendStocks.map((stock, i) => (
                  <tr key={stock.name} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                    <td className="p-4 font-semibold text-charcoal">{stock.name}</td>
                    <td className="p-4 text-green-600 font-semibold">{stock.yield}</td>
                    <td className="p-4 text-gray-600">{stock.years}</td>
                    <td className="p-4">
                      <span className="badge bg-purple-100 text-purple-700">{stock.sector}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <Link href="/guides/best-dividend-stocks-for-passive-income" className="btn-primary">
              See Full Analysis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brokers */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Best Brokers for Dividend Investing</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {dividendTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showFeatures />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQ items={faqs} heading="Dividend Investing FAQ" />
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
