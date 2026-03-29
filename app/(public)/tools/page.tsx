import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import Newsletter from "@/components/Newsletter";
import { tools, toolsByCategory } from "@/data/tools";
import type { ToolCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "Best Tools for Passive Income (2025) — Our Top Picks",
  description:
    "Honest reviews of the best tools for building passive income: hosting, email marketing, SEO, design, AI writing, and investing platforms. Tools we actually use.",
  keywords: [
    "best tools for passive income",
    "affiliate marketing tools",
    "blogging tools 2025",
    "dividend investing platforms",
    "passive income software",
  ],
};

const categoryOrder: ToolCategory[] = [
  "Hosting",
  "Email Marketing",
  "SEO",
  "Design",
  "AI Writing",
  "Investing",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Best Passive Income Tools",
  description: "Honest reviews of the best tools for building passive income streams",
  url: "https://zerotopassiveincome.com/tools",
};

export default function ToolsPage() {
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
              { name: "Tools" },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-4">
              Tools We Actually Use
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Honest, tested reviews of every tool in our passive income stack. We only recommend tools we&apos;d use with our own money.
            </p>
          </div>

          {/* Category nav */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categoryOrder.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-all"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tools by category */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {categoryOrder.map((category) => {
            const catTools = toolsByCategory[category];
            if (!catTools?.length) return null;

            return (
              <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-charcoal">{category}</h2>
                  <span className="badge bg-purple-100 text-purple-700">{catTools.length} tools</span>
                </div>
                <p className="text-gray-500 mb-8">
                  {category === "Hosting" && "The foundation of any online passive income business. Get this right from day one."}
                  {category === "Email Marketing" && "Your email list is your most valuable passive income asset. These tools build and monetize it."}
                  {category === "SEO" && "Organic search traffic is the engine of passive income content. These tools are essential."}
                  {category === "Design" && "Create digital products, thumbnails, and branded content — even without design skills."}
                  {category === "AI Writing" && "Accelerate content creation. Use AI to outline, draft, and refine — then add your expertise."}
                  {category === "Investing" && "The best platforms for building a passive dividend income portfolio."}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} showFeatures />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-amber-50 border-y border-amber-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links, meaning we may earn a commission if you purchase through them at no extra cost to you. We only recommend tools we genuinely believe in and would use ourselves. Our reviews are independent and not influenced by affiliate relationships.
          </p>
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
