import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Zap, Infinity, DollarSign } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import RoadmapStep from "@/components/RoadmapStep";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "How to Sell Digital Products for Passive Income (2025 Guide)",
  description:
    "Create once, sell forever. Complete guide to building and selling digital products — ebooks, templates, courses, presets — with 80-95% profit margins.",
  keywords: [
    "sell digital products passive income",
    "create digital products",
    "digital products to sell online",
    "ebooks templates courses passive income",
  ],
};

const digitalProductTools = tools.filter((t) =>
  t.incomeStreams.includes("digital-products")
);

const faqs = [
  {
    question: "What are the best digital products to sell for passive income?",
    answer: "Notion templates and Canva templates sell extremely well for beginners (no technical skill needed). Ebooks and PDF guides work for any niche. Online courses have the highest revenue potential but require more effort to create.",
  },
  {
    question: "Where should I sell digital products?",
    answer: "Gumroad is the easiest to start — zero monthly fees. Etsy is great for templates and printables. Teachable and Kajabi work best for courses. Starting on Gumroad lets you validate your product before investing in a custom store.",
  },
  {
    question: "How much can you make selling digital products?",
    answer: "Realistic ranges: Notion templates ($500–$5k/month), ebooks ($200–$3k/month), online courses ($1k–$30k/month+). The key is having an audience or traffic source. Without either, sales will be slow regardless of product quality.",
  },
  {
    question: "Do I need an audience to sell digital products?",
    answer: "Not necessarily, but it helps enormously. Options without an audience: Etsy SEO, Pinterest traffic, or TikTok. Building an email list is the most reliable approach for long-term passive sales.",
  },
  {
    question: "How do I price a digital product?",
    answer: "Don't undercharge. A $7 ebook and a $47 ebook require the same marketing effort. Price based on the value you deliver, not your effort. Templates: $15–$97. Ebooks: $17–$67. Mini-courses: $97–$497. Full courses: $497–$2,000.",
  },
];

const productTypes = [
  {
    type: "Notion Templates",
    difficulty: "Easy",
    potential: "$500–$5,000/mo",
    timeToCreate: "2–5 days",
    platforms: "Gumroad, Etsy",
    description: "Pre-built Notion workspaces for productivity, finance, content planning, and more.",
  },
  {
    type: "Canva Templates",
    difficulty: "Easy",
    potential: "$300–$3,000/mo",
    timeToCreate: "3–7 days",
    platforms: "Creative Market, Etsy",
    description: "Social media templates, pitch decks, business kits — designers earn $1k–$5k/month.",
  },
  {
    type: "Ebooks & PDF Guides",
    difficulty: "Easy",
    potential: "$200–$5,000/mo",
    timeToCreate: "1–3 weeks",
    platforms: "Gumroad, Amazon KDP",
    description: "Deep-dive written guides on any topic your audience wants to learn.",
  },
  {
    type: "Online Courses",
    difficulty: "Medium",
    potential: "$1,000–$30,000/mo",
    timeToCreate: "1–3 months",
    platforms: "Teachable, Kajabi, Gumroad",
    description: "Video or text courses. Highest revenue potential but most work to create.",
  },
  {
    type: "Spreadsheet Templates",
    difficulty: "Easy",
    potential: "$200–$2,000/mo",
    timeToCreate: "1–5 days",
    platforms: "Gumroad, Etsy",
    description: "Budget trackers, content calendars, business dashboards in Excel/Google Sheets.",
  },
  {
    type: "Lightroom Presets",
    difficulty: "Medium",
    potential: "$500–$8,000/mo",
    timeToCreate: "1–2 weeks",
    platforms: "Creative Market, Etsy, own website",
    description: "Photo editing presets for photographers and content creators.",
  },
];

const steps = [
  {
    title: "Identify a Problem Your Audience Has",
    description: "Research what your audience struggles with. Check subreddits, Facebook groups, and AnswerThePublic for frequently asked questions.",
    timeframe: "Day 1–3",
  },
  {
    title: "Validate Your Idea",
    description: "Before creating, pre-sell or test demand. Post a landing page and see if people join a waitlist. $0 cost validation.",
    timeframe: "Week 1",
  },
  {
    title: "Create Your Product",
    description: "Use Canva for visual products, Notion for templates, Google Docs for ebooks. Focus on quality over quantity for your first product.",
    timeframe: "Week 1–4",
  },
  {
    title: "Set Up Your Store",
    description: "List on Gumroad (easiest) or Etsy (built-in traffic). Set a price that reflects value, not your effort.",
    timeframe: "Day 1",
  },
  {
    title: "Market and Launch",
    description: "Email your list. Post on Pinterest, Instagram, or TikTok. Write SEO content about your product's topic.",
    timeframe: "Ongoing",
  },
];

export default function DigitalProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Digital Products" },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 mb-5">
                <Package className="h-4 w-4" /> Create once, sell forever
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-5 leading-tight">
                Digital Products: The Holy Grail of Passive Income
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Zero marginal cost. 80–95% profit margins. Unlimited scale. Create an ebook, template, or course once and sell it thousands of times — automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/guides/how-to-create-and-sell-digital-products" className="btn-primary">
                  Complete Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/calculator" className="btn-secondary">
                  Calculate Earnings
                </Link>
              </div>
            </div>

            {/* Why digital products */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Infinity, title: "Unlimited Copies", description: "Sell the same product 1 or 100,000 times with zero extra cost", color: "bg-amber-50", iconColor: "text-amber-600" },
                { icon: DollarSign, title: "80–95% Margins", description: "No printing, shipping, or inventory. Pure digital profit.", color: "bg-green-50", iconColor: "text-green-600" },
                { icon: Zap, title: "Instant Delivery", description: "Automatic delivery means you earn while you sleep. Literally.", color: "bg-purple-50", iconColor: "text-purple-600" },
                { icon: Package, title: "No Expertise Required", description: "Document what you know. Everyone has knowledge worth selling.", color: "bg-blue-50", iconColor: "text-blue-600" },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl ${item.color} p-5`}>
                  <item.icon className={`h-6 w-6 ${item.iconColor} mb-2`} />
                  <h3 className="font-bold text-charcoal text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product types */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">6 Digital Products That Sell</h2>
            <p className="section-subheading mx-auto">
              Ranked by ease of creation and income potential.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productTypes.map((product) => (
              <div key={product.type} className="card p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-charcoal">{product.type}</h3>
                  <span className={`badge ${product.difficulty === "Easy" ? "badge-easy" : "badge-medium"}`}>
                    {product.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-green-50 p-2.5">
                    <span className="text-gray-500">Potential</span>
                    <div className="font-bold text-green-700 mt-0.5">{product.potential}</div>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-2.5">
                    <span className="text-gray-500">Time to create</span>
                    <div className="font-bold text-purple-700 mt-0.5">{product.timeToCreate}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Platforms: </span>{product.platforms}
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
            <h2 className="section-heading">From Idea to First Sale</h2>
          </div>
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
      </section>

      {/* Tools */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Tools for Digital Product Creators</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {digitalProductTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQ items={faqs} heading="Digital Products FAQ" />
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
