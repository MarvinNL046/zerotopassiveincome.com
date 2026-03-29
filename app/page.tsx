import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Users, Star } from "lucide-react";
import IncomeCard from "@/components/IncomeCard";
import IncomeCalculator from "@/components/IncomeCalculator";
import ToolCard from "@/components/ToolCard";
import Newsletter from "@/components/Newsletter";
import EarningsBar from "@/components/EarningsBar";
import { incomeStreams } from "@/data/income-streams";
import { tools } from "@/data/tools";
import { getFeaturedGuides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Zero To Passive Income — Build Income That Works While You Sleep",
  description:
    "Learn how to build passive income from zero. Step-by-step guides on affiliate marketing, dividend investing, digital products, and more. Join 12,000+ subscribers.",
};

const stats = [
  { value: "$2.4M+", label: "Passive income built by our readers", icon: TrendingUp },
  { value: "12,000+", label: "Newsletter subscribers", icon: Users },
  { value: "6", label: "Proven income methods covered", icon: Shield },
  { value: "4.9/5", label: "Average guide rating", icon: Star },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zero To Passive Income",
  url: "https://zerotopassiveincome.com",
  description: "Build passive income from zero with step-by-step guides on affiliate marketing, dividend investing, and digital products.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://zerotopassiveincome.com/guides?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const featuredTools = tools.filter((t) =>
  ["hostinger", "convertkit", "canva", "ahrefs"].includes(t.id)
);
const featuredGuides = getFeaturedGuides().slice(0, 6);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative bg-hero-gradient overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-6">
                <span className="h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
                12,000+ readers building passive income
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold text-charcoal leading-tight tracking-tight mb-6">
                Build Passive Income{" "}
                <span className="gradient-text">From Zero</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Real strategies, honest guides, and recommended tools to build income streams that work while you sleep. No get-rich-quick BS — just proven methods.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/start-here" className="btn-primary text-base px-8 py-4">
                  Start Your Journey →
                </Link>
                <Link href="/calculator" className="btn-secondary text-base px-8 py-4">
                  Calculate Your Income
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-green-500" />
                  No BS strategies
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  Data-backed guides
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-amber-500" />
                  12k+ community
                </div>
              </div>
            </div>

            {/* Right: Calculator */}
            <div className="lg:ml-8">
              <IncomeCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-charcoal py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCOME STREAMS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
              Choose your path
            </p>
            <h2 className="section-heading">6 Proven Passive Income Methods</h2>
            <p className="section-subheading mx-auto">
              From investing to content creation — find the method that fits your skills, time, and capital.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {incomeStreams.map((stream, i) => (
              <IncomeCard key={stream.id} stream={stream} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/start-here" className="btn-secondary">
              Not sure where to start? Take the quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* EARNINGS COMPARISON */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Monthly Earning Potential</h2>
            <p className="section-subheading mx-auto">
              Realistic income ranges based on data from thousands of creators and investors.
            </p>
          </div>

          <div className="space-y-4">
            {incomeStreams.map((stream) => (
              <EarningsBar
                key={stream.id}
                label={stream.title}
                min={stream.potentialMonthly.min}
                max={stream.potentialMonthly.max}
                color={stream.color}
                bgColor={stream.bgColor}
                maxScale={100000}
              />
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            Based on industry averages. Results vary by effort, niche, and starting capital.
          </p>
        </div>
      </section>

      {/* FEATURED GUIDES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
                Start learning
              </p>
              <h2 className="section-heading">Essential Guides</h2>
            </div>
            <Link href="/guides" className="btn-secondary hidden sm:inline-flex">
              All guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card p-6 group flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span className="badge bg-purple-100 text-purple-700">{guide.category}</span>
                  <span className="text-xs text-gray-400">{guide.readTime} min read</span>
                </div>
                <h3 className="font-bold text-charcoal text-lg leading-snug group-hover:text-purple-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {guide.excerpt}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-purple-600 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/guides" className="btn-secondary">
              View all guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
                Our recommendations
              </p>
              <h2 className="section-heading">Tools We Actually Use</h2>
              <p className="section-subheading mt-2">
                Honest reviews of the tools that move the needle.
              </p>
            </div>
            <Link href="/tools" className="btn-secondary hidden sm:inline-flex">
              All tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/tools" className="btn-secondary">
              All tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">From Zero to Your First $1,000/Month</h2>
            <p className="section-subheading mx-auto">
              The honest timeline — it takes real work upfront, then it compounds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Pick Your Method",
                description: "Choose an income stream that fits your skills, time, and capital. Use our quiz or guides to decide.",
                timeframe: "Day 1",
                color: "bg-purple-50",
                accent: "text-purple-600",
              },
              {
                step: "02",
                title: "Set Up Your Foundation",
                description: "Build the infrastructure: website, accounts, tools. Takes 1–2 weeks with our guides.",
                timeframe: "Week 1–2",
                color: "bg-amber-50",
                accent: "text-amber-600",
              },
              {
                step: "03",
                title: "Create & Execute",
                description: "Publish content, invest capital, or list products. Consistency compounds exponentially.",
                timeframe: "Month 1–6",
                color: "bg-blue-50",
                accent: "text-blue-600",
              },
              {
                step: "04",
                title: "Scale & Diversify",
                description: "Once earning, reinvest profits and add a second income stream. Diversify for stability.",
                timeframe: "Month 6+",
                color: "bg-green-50",
                accent: "text-green-600",
              },
            ].map((item) => (
              <div key={item.step} className={`rounded-2xl ${item.color} p-6`}>
                <div className={`text-3xl font-extrabold ${item.accent} mb-3`}>{item.step}</div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                <span className={`badge bg-white ${item.accent}`}>{item.timeframe}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
