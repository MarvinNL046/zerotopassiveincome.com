"use client";

import Link from "next/link";
import { Star, ExternalLink, Check } from "lucide-react";
import type { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  showFeatures?: boolean;
}

export default function ToolCard({ tool, showFeatures = false }: ToolCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(tool.rating));

  return (
    <div className="card p-6 flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tool.logoUrl}
            alt={`${tool.name} logo`}
            className="h-10 w-10 rounded-lg object-contain border border-gray-100 p-1"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <h3 className="font-bold text-charcoal">{tool.name}</h3>
            <p className="text-xs text-gray-500">{tool.category}</p>
          </div>
        </div>
        {tool.badge && (
          <span className="badge bg-purple-100 text-purple-700 shrink-0">
            {tool.badge}
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {stars.map((filled, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${filled ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-charcoal">{tool.rating}</span>
        <span className="text-xs text-gray-400">({tool.reviewCount.toLocaleString()} reviews)</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{tool.description}</p>

      {/* Features */}
      {showFeatures && (
        <ul className="space-y-1.5">
          {tool.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Price */}
      <div className="rounded-lg bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Starting from</span>
          <div className="text-right">
            {tool.price.free && !tool.price.startingAt ? (
              <span className="text-sm font-bold text-green-600">Free</span>
            ) : tool.price.free ? (
              <span className="text-sm font-bold text-green-600">Free tier available</span>
            ) : (
              <span className="text-sm font-bold text-charcoal">
                ${tool.price.startingAt}/{tool.price.period}
              </span>
            )}
          </div>
        </div>
        {tool.price.note && (
          <p className="text-xs text-gray-400 mt-0.5 text-right">{tool.price.note}</p>
        )}
      </div>

      {/* CTAs */}
      <div className="flex gap-2">
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-primary flex-1 text-sm py-2.5 justify-center"
        >
          Try {tool.name} <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link
          href={`/tools/${tool.slug}`}
          className="btn-secondary px-4 py-2.5 text-sm"
        >
          Review
        </Link>
      </div>

      <p className="text-xs text-gray-400 text-center -mt-1">
        * Affiliate link — we may earn a commission
      </p>
    </div>
  );
}
