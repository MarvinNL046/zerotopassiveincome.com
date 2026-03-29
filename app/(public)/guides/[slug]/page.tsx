import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import { guides, getGuideBySlug } from "@/data/guides";
import { getToolsByIncomeStream } from "@/data/tools";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.excerpt,
    keywords: guide.keywords,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
  };
}

const faqsBySlug: Record<string, { question: string; answer: string }[]> = {
  "how-to-start-affiliate-marketing-for-beginners": [
    {
      question: "How much money do you need to start affiliate marketing?",
      answer: "You can start affiliate marketing with as little as $50–$100 for hosting and a domain. The main investment is time, not money. Platforms like Amazon Associates are completely free to join.",
    },
    {
      question: "How long does it take to make money with affiliate marketing?",
      answer: "Most beginner affiliate marketers see their first commission within 3–6 months if they publish consistently. Reaching $1,000/month typically takes 12–18 months of consistent effort.",
    },
    {
      question: "Do you need a website to do affiliate marketing?",
      answer: "While a website is the most sustainable approach, you can also do affiliate marketing via YouTube, email lists, or social media. However, a blog gives you the best long-term passive income potential.",
    },
    {
      question: "What are the best affiliate programs for beginners?",
      answer: "Amazon Associates is the best starting point due to its breadth. For higher commissions, look at SaaS affiliate programs (Hostinger, ConvertKit) that pay 30–50% recurring commissions.",
    },
  ],
  "best-dividend-stocks-for-passive-income": [
    {
      question: "How much do I need to invest to live off dividends?",
      answer: "At a 4% average yield, you need $300,000 invested to generate $12,000/year ($1,000/month). To live fully off dividends ($3,000/month) requires roughly $900,000 at 4% yield.",
    },
    {
      question: "Are dividend stocks safe?",
      answer: "Blue-chip dividend stocks from established companies are generally considered lower-risk investments. However, dividends can be cut, and stock values fluctuate. Diversification is key.",
    },
    {
      question: "How often are dividends paid?",
      answer: "Most US dividend stocks pay quarterly. Some pay monthly (useful for income planning), and some pay annually. REITs often pay monthly dividends.",
    },
  ],
};

const defaultFaqs = [
  {
    question: "How accurate is the income potential data?",
    answer: "Our data is based on aggregated reports from creators and investors in each category, plus industry studies. Actual results vary significantly based on effort, niche selection, and market conditions.",
  },
  {
    question: "How long does passive income take to build?",
    answer: "True passive income requires upfront work. Content-based methods (blogging, YouTube) typically take 6–18 months. Investing methods can generate income immediately but require capital.",
  },
  {
    question: "Is passive income really passive?",
    answer: "Not entirely at first. Most passive income methods require 3–12 months of active work to set up. After that, income becomes largely passive with periodic maintenance.",
  },
];

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const streamId = guide.category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "");
  const relatedTools = getToolsByIncomeStream(streamId).slice(0, 3);
  const faqs = faqsBySlug[slug] ?? defaultFaqs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Organization",
      name: "Zero To Passive Income",
    },
    publisher: {
      "@type": "Organization",
      name: "Zero To Passive Income",
      url: "https://zerotopassiveincome.com",
    },
    keywords: guide.keywords.join(", "),
    articleSection: guide.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient py-12 sm:py-16 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: guide.category, href: `/guides#${guide.category.toLowerCase().replace(/\s+/g, "-")}` },
              { name: guide.title },
            ]}
          />

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="badge bg-purple-100 text-purple-700">{guide.category}</span>
              <span
                className={`badge ${
                  guide.difficulty === "Beginner"
                    ? "badge-easy"
                    : guide.difficulty === "Intermediate"
                    ? "badge-medium"
                    : "badge-hard"
                }`}
              >
                {guide.difficulty}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {guide.readTime} min read
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                Updated {new Date(guide.updatedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">{guide.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Article content */}
          <article>
            {/* Table of Contents */}
            {guide.tableOfContents.length > 0 && (
              <div className="rounded-2xl bg-purple-50 border border-purple-100 p-6 mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  <h2 className="font-bold text-charcoal">Table of Contents</h2>
                </div>
                <ol className="space-y-2">
                  {guide.tableOfContents.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-purple-700 hover:text-purple-900 transition-colors"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-200 text-xs font-bold text-purple-700">
                          {i + 1}
                        </span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Article placeholder (would be MDX/CMS content in production) */}
            <div className="prose prose-lg max-w-none prose-headings:text-charcoal prose-headings:font-bold prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
              <p>
                This is a comprehensive guide template. In production, each guide would contain 2,000+ words of original, expert-written content covering all sections from the table of contents above.
              </p>

              {guide.tableOfContents.map((item) => (
                <section key={item.id} id={item.id}>
                  <h2>{item.title}</h2>
                  <p>
                    Detailed, actionable content for &quot;{item.title}&quot; would appear here — including data, examples, step-by-step instructions, screenshots, and expert insights. Content would be 300–500 words per section, totaling 2,000–3,000+ words per guide.
                  </p>
                </section>
              ))}
            </div>

            {/* Newsletter inline */}
            <div className="mt-12">
              <Newsletter variant="inline" />
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <FAQ items={faqs} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick stats */}
            <div className="card p-5">
              <h3 className="font-bold text-charcoal mb-4">Guide Overview</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Category</dt>
                  <dd className="font-semibold text-charcoal">{guide.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Difficulty</dt>
                  <dd>
                    <span className={`badge ${guide.difficulty === "Beginner" ? "badge-easy" : guide.difficulty === "Intermediate" ? "badge-medium" : "badge-hard"}`}>
                      {guide.difficulty}
                    </span>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Read time</dt>
                  <dd className="font-semibold text-charcoal">{guide.readTime} minutes</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Last updated</dt>
                  <dd className="font-semibold text-charcoal">
                    {new Date(guide.updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Related tools */}
            {relatedTools.length > 0 && (
              <div className="card p-5">
                <h3 className="font-bold text-charcoal mb-4">Recommended Tools</h3>
                <div className="space-y-3">
                  {relatedTools.map((tool) => (
                    <a
                      key={tool.id}
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex items-center gap-3 group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.logoUrl}
                        alt={tool.name}
                        className="h-8 w-8 rounded-lg border border-gray-100 p-0.5 object-contain"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-charcoal group-hover:text-purple-600 transition-colors">
                          {tool.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">{tool.tagline}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-purple-600 transition-colors" />
                    </a>
                  ))}
                </div>
                <Link href="/tools" className="block text-center mt-4 text-sm text-purple-600 font-semibold hover:underline">
                  View all tools →
                </Link>
              </div>
            )}

            {/* Related guides */}
            <div className="card p-5">
              <h3 className="font-bold text-charcoal mb-4">More Guides</h3>
              <div className="space-y-2">
                {guides
                  .filter((g) => g.slug !== guide.slug)
                  .slice(0, 4)
                  .map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="block text-sm text-gray-700 hover:text-purple-600 transition-colors py-1 border-b border-gray-50 last:border-0"
                    >
                      {g.title}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
