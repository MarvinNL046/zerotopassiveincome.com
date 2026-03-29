"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

interface NewsletterProps {
  heading?: string;
  subheading?: string;
  variant?: "default" | "dark" | "inline";
}

export default function Newsletter({
  heading = "Get the Weekly Passive Income Playbook",
  subheading = "Real strategies, income reports, and tool reviews — every Sunday. 12,000+ subscribers.",
  variant = "default",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to ConvertKit API
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  const isDark = variant === "dark";

  if (variant === "inline") {
    return (
      <div className="rounded-2xl bg-purple-50 border border-purple-100 p-6">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-purple-600" />
          <h3 className="font-bold text-charcoal">Weekly Passive Income Playbook</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">{subheading}</p>
        {submitted ? (
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <Check className="h-5 w-5" /> You&apos;re in! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button type="submit" disabled={loading} className="btn-primary py-2.5 shrink-0">
              {loading ? "..." : <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section
      className={`rounded-3xl p-8 sm:p-12 text-center ${
        isDark ? "bg-charcoal text-white" : "bg-purple-gradient text-white"
      }`}
    >
      <div className="mx-auto max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
          <Mail className="h-4 w-4" />
          Free weekly newsletter
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-purple-100 text-lg mb-8">{subheading}</p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-xl font-semibold text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Check className="h-5 w-5" />
            </div>
            You&apos;re in! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl bg-white px-5 py-3.5 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 placeholder:text-gray-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-gold py-3.5 shrink-0"
            >
              {loading ? "Subscribing..." : "Subscribe Free →"}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-purple-200">
          No spam, ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
