import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { guides } from "@/data/guides";
import type { GuideCategory } from "@/data/guides";

export const metadata: Metadata = {
  title: "Passive Income Guides — Step-by-Step Tutorials",
  description:
    "Comprehensive step-by-step guides on every passive income method: affiliate marketing, dividend investing, digital products, blogging, and more.",
};

const categories: GuideCategory[] = [
  "Getting Started",
  "Affiliate Marketing",
  "Dividend Investing",
  "Digital Products",
  "Print-on-Demand",
  "Content Creation",
  "Real Estate",
  "Tools & Resources",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Passive Income Guides",
  description: "Comprehensive guides on building passive income streams",
  url: "https://zerotopassiveincome.com/guides",
};

export default function GuidesPage() {
  const guidesByCategory = categories.reduce((acc, cat) => {
    const catGuides = guides.filter((g) => g.category === cat);
    if (catGuides.length > 0) acc[cat] = catGuides;
    return acc;
  }, {} as Record<GuideCategory, typeof guides>);

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
              { name: "Guides" },
            ]}
          />
          <div className="mt-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-4">
              Passive Income Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Step-by-step tutorials on every proven method — from your first $100 to full financial freedom.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-all"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Guides by category */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {Object.entries(guidesByCategory).map(([category, catGuides]) => (
            <div
              key={category}
              id={category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-charcoal">{category}</h2>
                <span className="badge bg-purple-100 text-purple-700">{catGuides.length} guides</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="card p-6 group flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-2">
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
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        {guide.readTime} min
                      </span>
                    </div>
                    <h3 className="font-bold text-charcoal leading-snug group-hover:text-purple-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">
                      {guide.excerpt}
                    </p>
                    <span className="text-sm font-semibold text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
