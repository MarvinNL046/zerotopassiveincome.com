import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Shield, Users, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "About Zero To Passive Income — Our Mission & Story",
  description:
    "Zero To Passive Income was built to cut through the noise and give real, actionable passive income strategies. No get-rich-quick BS — just honest guides.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Zero To Passive Income",
    description: metadata.description,
    url: "https://zerotopassiveincome.com/about",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-hero-gradient py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal mb-5">
              We Built This Site Because We Were Tired of the BS
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Too many &quot;passive income&quot; sites sell dreams instead of strategies. We built Zero To Passive Income to be the honest, data-driven resource we wish existed when we started.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-charcoal mb-5">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Passive income is real. People genuinely build affiliate sites that earn $10,000/month on autopilot. Dividend portfolios that pay thousands quarterly. Digital products that sell while the creator sleeps.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                But it&apos;s not magic. It takes real work upfront, realistic expectations, and the right strategy for your skills and capital. That&apos;s what we cover.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment: Every guide is based on real data. Every tool review reflects actual testing. Every income figure is sourced and realistic.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "No BS Policy", description: "We reject get-rich-quick claims. Every income claim is sourced.", color: "bg-purple-50", iconColor: "text-purple-600" },
                { icon: BookOpen, title: "Research-First", description: "Guides backed by data, industry research, and real creator reports.", color: "bg-amber-50", iconColor: "text-amber-600" },
                { icon: TrendingUp, title: "Results-Focused", description: "We track what's actually working in 2025, not what worked in 2015.", color: "bg-green-50", iconColor: "text-green-600" },
                { icon: Users, title: "Community-Driven", description: "12,000+ newsletter readers share income reports and strategies.", color: "bg-blue-50", iconColor: "text-blue-600" },
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

      {/* What we cover */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-5">What We Cover</h2>
          <p className="section-subheading mx-auto mb-10">
            Six proven passive income methods — each with comprehensive guides, tool reviews, and realistic income expectations.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Affiliate Marketing", href: "/affiliate-marketing" },
              { name: "Dividend Investing", href: "/dividend-investing" },
              { name: "Digital Products", href: "/digital-products" },
              { name: "Print-on-Demand", href: "/guides/passive-income-with-print-on-demand" },
              { name: "Content Creation", href: "/guides/how-to-start-a-blog-and-make-money" },
              { name: "Real Estate (REITs)", href: "/guides/what-are-reits-and-how-to-invest" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="card p-5 text-center font-semibold text-charcoal hover:text-purple-600 hover:border-purple-200 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">Affiliate Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Zero To Passive Income earns money through affiliate commissions on some of the tools and products we recommend. When you click a link and make a purchase, we may receive a commission at no additional cost to you.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>This does not affect our recommendations.</strong> We only recommend tools we&apos;ve tested or would genuinely use ourselves. Our editorial independence is non-negotiable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe passive income through affiliate marketing is one of the best business models available — and we practice what we preach.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Meet the Founder</h2>
            <div className="flex flex-col md:flex-row gap-6 items-start not-prose">
              <img
                src="/images/team/marvin.webp"
                alt="Marvin — Founder & Developer"
                width={160}
                height={160}
                className="rounded-2xl object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-1">Marvin</h3>
                <p className="text-sm text-purple-600 font-medium mb-3">Founder &amp; Developer</p>
                <p className="text-gray-600 mb-3">
                  Marvin is a Dutch web developer and digital entrepreneur who builds tools and resources to help
                  people get started online. From travel guides to hosting reviews, VPN comparisons to WordPress
                  tutorials — he creates practical, honest content based on hands-on testing and real experience.
                </p>
                <p className="text-gray-600">
                  When he&apos;s not coding, you&apos;ll find him exploring Southeast Asia or testing the latest
                  web technologies for his growing network of niche websites.
                </p>
              </div>
            </div>
          </div>
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
