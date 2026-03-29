import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, Check, X, ExternalLink, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AffiliateCTA from "@/components/AffiliateCTA";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import { tools, getToolBySlug } from "@/data/tools";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: `${tool.name} Review (2025): ${tool.tagline}`,
    description: `Honest ${tool.name} review — pricing, features, pros & cons. Is it worth it for passive income creators?`,
  };
}

export default async function ToolReviewPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(tool.rating));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${tool.name} Review`,
    reviewBody: tool.description,
    reviewRating: {
      "@type": "Rating",
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Organization", name: "Zero To Passive Income" },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: tool.category,
    },
  };

  const faqs = [
    {
      question: `Is ${tool.name} worth it for passive income?`,
      answer: `${tool.name} is ${tool.rating >= 4.5 ? "highly recommended" : "a solid option"} for passive income creators, particularly for ${tool.bestFor.toLowerCase()}. Our rating: ${tool.rating}/5.`,
    },
    {
      question: `How much does ${tool.name} cost?`,
      answer: tool.price.free
        ? `${tool.name} offers a free tier${tool.price.startingAt ? `, with paid plans starting at $${tool.price.startingAt}/${tool.price.period}` : ""}. ${tool.price.note ?? ""}`
        : `${tool.name} starts at $${tool.price.startingAt}/${tool.price.period}. ${tool.price.note ?? ""}`,
    },
    {
      question: `What is ${tool.name} best for?`,
      answer: `${tool.name} is best for ${tool.bestFor}. It's particularly useful for ${tool.incomeStreams.map((s) => s.replace(/-/g, " ")).join(", ")}.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient py-12 sm:py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Tools", href: "/tools" },
              { name: tool.name },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logoUrl}
                  alt={`${tool.name} logo`}
                  className="h-16 w-16 rounded-2xl border border-gray-100 p-2 bg-white shadow-sm"
                />
                <div>
                  <h1 className="text-3xl font-extrabold text-charcoal">{tool.name}</h1>
                  <p className="text-gray-500">{tool.category}</p>
                </div>
                {tool.badge && (
                  <span className="badge bg-purple-100 text-purple-700">{tool.badge}</span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {stars.map((filled, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${filled ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-charcoal text-lg">{tool.rating}/5</span>
                <span className="text-gray-400 text-sm">({tool.reviewCount.toLocaleString()} reviews)</span>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">{tool.tagline}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn-primary"
                >
                  Try {tool.name} <ExternalLink className="h-4 w-4" />
                </a>
                {tool.price.free && (
                  <span className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                    <Check className="h-4 w-4" /> Free tier available
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                * Affiliate link — we may earn a commission at no extra cost to you
              </p>
            </div>

            {/* Quick verdict */}
            <div className="card p-6">
              <h3 className="font-bold text-charcoal mb-4">Quick Verdict</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{tool.description}</p>

              <div className="grid grid-cols-2 gap-3 text-sm mb-5">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-400">Starting from</p>
                  <p className="font-bold text-charcoal mt-0.5">
                    {tool.price.free && !tool.price.startingAt
                      ? "Free"
                      : tool.price.free
                      ? "Free tier"
                      : `$${tool.price.startingAt}/${tool.price.period}`}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-400">Best for</p>
                  <p className="font-bold text-charcoal mt-0.5 text-xs leading-snug">{tool.bestFor}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">Pros</p>
                  <ul className="space-y-1.5">
                    {tool.pros.slice(0, 4).map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Cons</p>
                  <ul className="space-y-1.5">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-xs text-gray-700">
                        <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full review */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">About {tool.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{tool.description}</p>

            {/* Features */}
            <h2 className="text-2xl font-bold text-charcoal mb-4">Key Features</h2>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {tool.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 text-sm font-medium text-charcoal">
                  <Check className="h-4 w-4 text-purple-600 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Who it's for */}
            <h2 className="text-2xl font-bold text-charcoal mb-4">Who Is {tool.name} Best For?</h2>
            <div className="rounded-2xl bg-purple-50 border border-purple-100 p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                {tool.name} is best for <strong>{tool.bestFor}</strong>. It&apos;s particularly useful for people building passive income through{" "}
                {tool.incomeStreams.map((s) => s.replace(/-/g, " ")).join(", ")}.
              </p>
            </div>

            {/* Affiliate CTA */}
            <div className="rounded-2xl bg-charcoal p-8 text-center mb-10">
              <h3 className="text-xl font-bold text-white mb-2">Ready to try {tool.name}?</h3>
              <p className="text-gray-300 text-sm mb-6">
                {tool.price.free
                  ? `Start for free — no credit card required`
                  : `Starting at $${tool.price.startingAt}/${tool.price.period}`}
              </p>
              <AffiliateCTA
                toolName={tool.name}
                href={tool.affiliateUrl}
                variant="gold"
                subtext={tool.price.free ? "Free to start" : `From $${tool.price.startingAt}/${tool.price.period}`}
              />
            </div>

            {/* FAQ */}
            <FAQ items={faqs} heading={`${tool.name} FAQ`} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="card p-5 sticky top-20">
              <h3 className="font-bold text-charcoal mb-4">{tool.name} at a Glance</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-50 pb-3">
                  <dt className="text-gray-500">Rating</dt>
                  <dd className="font-bold text-charcoal">{tool.rating}/5</dd>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-3">
                  <dt className="text-gray-500">Category</dt>
                  <dd className="font-semibold text-charcoal">{tool.category}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-3">
                  <dt className="text-gray-500">Free Plan</dt>
                  <dd>{tool.price.free ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-400" />}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-3">
                  <dt className="text-gray-500">Starting Price</dt>
                  <dd className="font-semibold text-charcoal">
                    {tool.price.free && !tool.price.startingAt ? "Free" : `$${tool.price.startingAt}/${tool.price.period}`}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 mb-2">Best for</dt>
                  <dd className="text-charcoal text-xs leading-relaxed">{tool.bestFor}</dd>
                </div>
              </dl>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-primary w-full justify-center mt-5"
              >
                Try {tool.name} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-charcoal mb-3 text-sm">More Tools</h3>
              <div className="space-y-2">
                {tools
                  .filter((t) => t.slug !== tool.slug && t.category === tool.category)
                  .slice(0, 3)
                  .map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 text-gray-300" />
                      {t.name}
                    </Link>
                  ))}
                <Link href="/tools" className="block text-sm text-purple-600 font-semibold hover:underline mt-2">
                  See all tools →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Newsletter variant="inline" />
        </div>
      </section>
    </>
  );
}
