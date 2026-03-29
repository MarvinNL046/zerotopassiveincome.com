import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";
import { guides, getGuideBySlug } from "@/data/guides";

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Organization",
      name: "Zero To Passive Income",
      url: "https://zerotopassiveincome.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zero To Passive Income",
    },
    keywords: guide.keywords.join(", "),
  };

  const related = guides
    .filter((g) => g.slug !== slug && g.category === guide.category)
    .slice(0, 3);

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
              { name: "Blog", href: "/blog" },
              { name: guide.title },
            ]}
          />
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="badge bg-purple-100 text-purple-700">{guide.category}</span>
              <span className={`badge ${guide.difficulty === "Beginner" ? "badge-easy" : guide.difficulty === "Intermediate" ? "badge-medium" : "badge-hard"}`}>
                {guide.difficulty}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" /> {guide.readTime} min read
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                Updated {new Date(guide.updatedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-gray-600">{guide.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Article body */}
        <article className="prose prose-lg max-w-none prose-headings:text-charcoal prose-headings:font-bold prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
          <p>
            This blog post template covers the topic in full depth. In production, content is written to 2,000+ words covering all aspects of the topic with original research, data, and expert insights.
          </p>

          {guide.tableOfContents.map((item) => (
            <section key={item.id} id={item.id}>
              <h2>{item.title}</h2>
              <p>
                Comprehensive, original content for this section covering practical advice, real examples, and actionable steps. Each section would contain 300–500 words minimum.
              </p>
            </section>
          ))}
        </article>

        {/* Newsletter */}
        <div className="mt-12">
          <Newsletter variant="inline" />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
          <Link href="/blog" className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <Link href="/guides" className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:underline">
            All Guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-charcoal mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/blog/${g.slug}`}
                  className="card p-5 group"
                >
                  <span className="badge bg-purple-100 text-purple-700 text-xs mb-3 inline-block">
                    {g.category}
                  </span>
                  <h3 className="font-bold text-charcoal text-sm leading-snug group-hover:text-purple-600 transition-colors">
                    {g.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
