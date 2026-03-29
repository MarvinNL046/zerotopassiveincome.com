import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Passive Income Blog — Latest Guides & Income Reports",
  description:
    "The latest passive income guides, income reports, tool reviews, and strategies. Updated weekly.",
};

export default function BlogPage() {
  const allGuides = [...guides].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  const featured = allGuides[0];
  const rest = allGuides.slice(1);

  return (
    <>
      <section className="bg-hero-gradient py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog" },
            ]}
          />
          <div className="mt-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-4">
              Passive Income Blog
            </h1>
            <p className="text-xl text-gray-600">
              Latest guides, income breakdowns, and strategies — updated every week.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-14">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
              Featured Guide
            </p>
            <Link href={`/blog/${featured.slug}`} className="card p-8 group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge bg-purple-100 text-purple-700">{featured.category}</span>
                    <span className={`badge ${featured.difficulty === "Beginner" ? "badge-easy" : featured.difficulty === "Intermediate" ? "badge-medium" : "badge-hard"}`}>
                      {featured.difficulty}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-charcoal mb-4 group-hover:text-purple-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.readTime} min read</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(featured.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <span className="text-purple-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read guide <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="rounded-2xl bg-purple-gradient aspect-video flex items-center justify-center">
                  <p className="text-white text-2xl font-bold px-8 text-center opacity-90">{featured.title}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* All posts grid */}
          <h2 className="text-2xl font-bold text-charcoal mb-8">All Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="card p-6 group flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span className="badge bg-purple-100 text-purple-700 text-xs">{guide.category}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />{guide.readTime} min
                  </span>
                </div>
                <h3 className="font-bold text-charcoal leading-snug group-hover:text-purple-600 transition-colors flex-1">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{guide.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(guide.updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                  <span className="text-sm font-semibold text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
