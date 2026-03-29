import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, TrendingUp, DollarSign, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import RoadmapStep from "@/components/RoadmapStep";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Affiliate Marketing for Beginners: The Complete Guide (2025)",
  description:
    "Learn how to start affiliate marketing from scratch. Step-by-step guide covering niche selection, website setup, top affiliate programs, and how to earn your first $1,000.",
  keywords: [
    "affiliate marketing for beginners",
    "how to start affiliate marketing",
    "affiliate marketing guide 2025",
    "affiliate marketing passive income",
  ],
};

const affiliateTools = tools.filter((t) =>
  t.incomeStreams.includes("affiliate-marketing")
);

const faqs = [
  {
    question: "How much can you realistically earn from affiliate marketing?",
    answer: "Realistic earnings depend on your niche and effort. Beginners typically earn $0–$500/month in their first year. Established affiliate sites earn $2,000–$20,000+/month. Top earners make $100k+/month, but they're the exception, not the rule.",
  },
  {
    question: "Do you need a website for affiliate marketing?",
    answer: "A website is the most sustainable and scalable approach. You can also earn via YouTube, email lists, or social media, but a blog gives you long-term SEO traffic that's truly passive.",
  },
  {
    question: "What's the best affiliate program for beginners?",
    answer: "Amazon Associates is the easiest to start with due to its breadth. However, SaaS products (software) offer higher commissions (30–50% recurring) once you have an audience. Hostinger's affiliate program pays up to 60% per sale.",
  },
  {
    question: "How long does affiliate marketing take to make money?",
    answer: "With consistent effort (5–10 hours/week), most people see their first affiliate commission within 3–6 months. Reaching $1,000/month typically takes 12–18 months. SEO compounds over time.",
  },
  {
    question: "Is affiliate marketing still profitable in 2025?",
    answer: "Yes — global affiliate marketing spending exceeds $17 billion annually and grows ~10% per year. While competition has increased, high-quality, helpful content still dominates search results and earns commissions.",
  },
];

const steps = [
  {
    title: "Choose a Profitable Niche",
    description: "Pick a niche where people spend money online and you have genuine interest/knowledge. Best beginner niches: personal finance, tech reviews, fitness, travel, home improvement.",
    timeframe: "Week 1",
  },
  {
    title: "Build Your Website",
    description: "Set up WordPress on Hostinger or SiteGround. Install a fast theme. This is your digital real estate — the foundation of passive income.",
    timeframe: "Week 1–2",
  },
  {
    title: "Join Affiliate Programs",
    description: "Start with Amazon Associates (easy approval). Then apply to niche-specific programs via ShareASale, Impact, or direct partnerships.",
    timeframe: "Week 2",
  },
  {
    title: "Create Helpful Content",
    description: "Write buyer-intent content: 'best X for Y', 'X vs Y comparison', 'how to choose X'. These convert traffic to commissions.",
    timeframe: "Month 1–6",
  },
  {
    title: "Drive Organic Traffic",
    description: "Target low-competition, high-intent keywords. Use Ahrefs or Surfer SEO to find gaps. Build topical authority by publishing consistently.",
    timeframe: "Month 3–12",
  },
  {
    title: "Scale and Diversify",
    description: "Reinvest earnings into more content or a writer. Add email marketing. Join higher-paying affiliate programs as your traffic grows.",
    timeframe: "Month 12+",
  },
];

export default function AffiliateMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Affiliate Marketing for Beginners: The Complete Guide",
    description: metadata.description,
    author: { "@type": "Organization", name: "Zero To Passive Income" },
    publisher: { "@type": "Organization", name: "Zero To Passive Income" },
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
              { name: "Affiliate Marketing" },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-5">
                <span className="badge-medium">Medium Difficulty</span>
                &nbsp;·&nbsp; $500–$50k/month potential
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-5 leading-tight">
                Affiliate Marketing: The Best Passive Income for Beginners
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Earn commissions by recommending products you already use. Create content once, earn on autopilot — no product creation, no customer support, no inventory.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/guides/how-to-start-affiliate-marketing-for-beginners" className="btn-primary">
                  Read the Full Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/tools" className="btn-secondary">
                  Top Tools for Affiliates
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: DollarSign, label: "Startup Cost", value: "$50–$500", color: "bg-purple-50 text-purple-600" },
                { icon: Clock, label: "Time to Income", value: "3–6 months", color: "bg-amber-50 text-amber-600" },
                { icon: TrendingUp, label: "Max Monthly", value: "$50,000+", color: "bg-green-50 text-green-600" },
                { icon: Check, label: "Passivity", value: "8/10", color: "bg-blue-50 text-blue-600" },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-2xl p-5 ${stat.color.split(" ")[0]}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color.split(" ")[1]} mb-2`} />
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                  <p className="text-2xl font-extrabold text-charcoal mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is affiliate marketing */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-charcoal mb-5">
                How Affiliate Marketing Works
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Affiliate marketing is simple: you recommend a product or service using a unique tracking link. When someone clicks your link and buys, you earn a commission — typically 3–50% of the sale price.
              </p>
              <ul className="space-y-3">
                {[
                  "No product creation or inventory needed",
                  "Work once, earn repeatedly from old content",
                  "Join programs for free — zero upfront cost",
                  "Commissions range from 3% to 75%",
                  "Best passive income for writers and creators",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-purple-50 border border-purple-100 p-8">
              <h3 className="font-bold text-charcoal mb-4">Realistic Income Timeline</h3>
              <div className="space-y-4">
                {[
                  { period: "Month 1–3", income: "$0–$50", label: "Learning & setup phase" },
                  { period: "Month 3–6", income: "$50–$300", label: "First commissions trickling in" },
                  { period: "Month 6–12", income: "$300–$1,500", label: "SEO traffic compounding" },
                  { period: "Year 2+", income: "$1,500–$10,000+", label: "Scaling and diversifying" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-20 shrink-0">
                      <span className="text-xs font-semibold text-purple-600">{item.period}</span>
                    </div>
                    <div className="flex-1 h-2 bg-purple-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: `${(i + 1) * 22}%` }}
                      />
                    </div>
                    <div className="w-24 shrink-0 text-right">
                      <span className="text-sm font-bold text-charcoal">{item.income}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Your Affiliate Marketing Roadmap</h2>
            <p className="section-subheading mx-auto">
              The exact steps to go from zero to your first affiliate commission.
            </p>
          </div>
          <div>
            {steps.map((step, i) => (
              <RoadmapStep
                key={i}
                step={i + 1}
                title={step.title}
                description={step.description}
                timeframe={step.timeframe}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Best Tools for Affiliate Marketing</h2>
            <p className="section-subheading mx-auto">
              The exact tools we use to build and grow affiliate sites.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {affiliateTools.slice(0, 4).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQ items={faqs} heading="Affiliate Marketing FAQ" />
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
