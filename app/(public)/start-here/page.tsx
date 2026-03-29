import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import RoadmapStep from "@/components/RoadmapStep";
import IncomeStreamComparison from "@/components/IncomeStreamComparison";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import { incomeStreams } from "@/data/income-streams";

export const metadata: Metadata = {
  title: "Start Here: How to Build Passive Income From Zero (Beginner Roadmap)",
  description:
    "The complete beginner's roadmap to building passive income. Find your best income method, build your foundation, and reach your first $1,000/month.",
  keywords: [
    "how to start passive income",
    "passive income for beginners",
    "passive income roadmap",
    "beginner passive income guide",
  ],
};

const roadmap = [
  {
    title: "Understand What Passive Income Actually Is",
    description: "Passive income isn't magic — it's income that requires active setup upfront but generates revenue with minimal ongoing effort. Realistic timelines: 3–18 months depending on the method.",
    timeframe: "Day 1",
  },
  {
    title: "Assess Your Starting Position",
    description: "Three variables determine your best income method: available capital (money to invest), available time (hours/week), and existing skills (writing, design, analysis). Be honest about all three.",
    timeframe: "Day 1–2",
  },
  {
    title: "Choose ONE Income Method",
    description: "The biggest beginner mistake is trying 5 things at once. Pick ONE method and go deep. Spread thin = zero results. Focused = faster progress. Use our comparison table below.",
    timeframe: "Week 1",
  },
  {
    title: "Set Up Your Foundation",
    description: "For content/affiliate: domain + hosting + WordPress. For investing: open a brokerage account. For digital products: choose a platform (Gumroad). Your foundation enables everything else.",
    timeframe: "Week 1–2",
  },
  {
    title: "Execute for 90 Days",
    description: "Commit to 90 days of consistent effort before judging results. Most people quit too early. Week 12 results look completely different from Week 2 results. Track your metrics weekly.",
    timeframe: "Month 1–3",
  },
  {
    title: "Review, Optimize, Scale",
    description: "After 90 days, review your data. What's working? Double down. What isn't? Adjust or pivot. Then scale: more content, more capital, more products. Diversify only after hitting $500/month.",
    timeframe: "Month 3+",
  },
];

const faqs = [
  {
    question: "What's the best passive income method for beginners?",
    answer: "Affiliate marketing (blogging) is the best starting point for most beginners — low cost, scalable, and builds long-term SEO assets. If you have capital ($10k+), dividend investing is the most truly passive. If you have a specific skill, digital products can monetize fastest.",
  },
  {
    question: "How long does it take to earn $1,000/month passively?",
    answer: "Realistic timeline: affiliate blogging (12–24 months), digital products (6–12 months), dividends (depends on capital — need ~$300k at 4% yield). Content creation and POD: 6–18 months. Most people see first dollars within 3–6 months.",
  },
  {
    question: "How much money do I need to start?",
    answer: "You can start with $0 (print-on-demand or free digital product platforms). Blogging costs $50–$100/year for hosting. Investing requires at least $1,000 to see meaningful returns. The less money you have, the more time you need to invest.",
  },
  {
    question: "Can I do passive income while working full-time?",
    answer: "Absolutely — and most successful passive income builders started this way. 10 hours/week is enough to build a meaningful side income over 12–18 months. The key is consistency over intensity.",
  },
  {
    question: "Is passive income taxable?",
    answer: "Yes — passive income is taxable in virtually all jurisdictions. Dividends, affiliate commissions, digital product sales, and rental income are all taxable. Consult a local tax professional, especially once you're earning meaningfully.",
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Start Here" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-5">
              Begin here — the complete roadmap
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-5 leading-tight">
              How to Build Passive Income From Zero
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              The honest beginner&apos;s roadmap. Understand your options, choose the right method for you, and build your first $1,000/month in passive income.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              {["No prior experience needed", "Works with any budget", "6 proven methods", "Real timelines, no BS"].map((point) => (
                <div key={point} className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 border border-gray-200">
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Choose your method */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Which Method Is Right for You?</h2>
            <p className="section-subheading mx-auto">
              Your starting point depends on your time, capital, and skills.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "You have time, little money",
                recommendation: "Affiliate Marketing or Blogging",
                description: "10+ hrs/week + $100 startup cost. SEO compounds over time.",
                bestFor: ["/affiliate-marketing", "/guides/how-to-start-a-blog-and-make-money"],
                links: ["Affiliate Marketing Guide", "Blogging Guide"],
                color: "bg-purple-50 border-purple-100",
              },
              {
                title: "You have money, little time",
                recommendation: "Dividend Investing or REITs",
                description: "$10k+ capital + 1–2 hrs/week. Truly passive after setup.",
                bestFor: ["/dividend-investing", "/guides/what-are-reits-and-how-to-invest"],
                links: ["Dividend Investing Guide", "REIT Guide"],
                color: "bg-green-50 border-green-100",
              },
              {
                title: "You have a skill or knowledge",
                recommendation: "Digital Products or Consulting",
                description: "Package your knowledge into ebooks, templates, or courses.",
                bestFor: ["/digital-products"],
                links: ["Digital Products Guide"],
                color: "bg-amber-50 border-amber-100",
              },
            ].map((path) => (
              <div key={path.title} className={`rounded-2xl border p-6 ${path.color}`}>
                <h3 className="font-bold text-charcoal mb-2">{path.title}</h3>
                <p className="text-lg font-semibold text-purple-600 mb-2">{path.recommendation}</p>
                <p className="text-sm text-gray-600 mb-4">{path.description}</p>
                <div className="space-y-2">
                  {path.bestFor.map((href, i) => (
                    <Link key={href} href={href} className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:underline">
                      <ArrowRight className="h-3.5 w-3.5" />
                      {path.links[i]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">The 6-Step Passive Income Roadmap</h2>
            <p className="section-subheading mx-auto">
              Follow these steps in order. Don&apos;t skip ahead.
            </p>
          </div>
          {roadmap.map((step, i) => (
            <RoadmapStep
              key={i}
              step={i + 1}
              title={step.title}
              description={step.description}
              timeframe={step.timeframe}
              isLast={i === roadmap.length - 1}
            />
          ))}
        </div>
      </section>

      {/* All income streams */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">All 6 Passive Income Methods</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {incomeStreams.map((stream) => (
              <Link
                key={stream.id}
                href={`/${stream.slug}`}
                className="card p-5 group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: stream.bgColor }}>
                  <div className="h-5 w-5 rounded" style={{ backgroundColor: stream.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-charcoal text-sm group-hover:text-purple-600 transition-colors">
                    {stream.title}
                  </h3>
                  <p className="text-xs text-gray-400">{stream.timeToFirstIncome} · {stream.difficulty}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-purple-600 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Side-by-Side Comparison</h2>
          </div>
          <IncomeStreamComparison />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQ items={faqs} heading="Beginner Questions Answered" />
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
