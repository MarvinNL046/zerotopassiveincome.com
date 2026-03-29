"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, TrendingUp } from "lucide-react";

const navigation = [
  { name: "Start Here", href: "/start-here" },
  {
    name: "Income Streams",
    children: [
      { name: "Affiliate Marketing", href: "/affiliate-marketing" },
      { name: "Dividend Investing", href: "/dividend-investing" },
      { name: "Digital Products", href: "/digital-products" },
      { name: "All Guides", href: "/guides" },
    ],
  },
  { name: "Tools", href: "/tools" },
  { name: "Calculator", href: "/calculator" },
  { name: "Blog", href: "/blog" },
];

const networkSites = [
  { name: "ZeroToVPN.com", href: "https://zerotovpn.com", category: "Tech" },
  { name: "ZeroToWP.com", href: "https://zerotowp.com", category: "Tech" },
  { name: "ZeroToWordPress.com", href: "https://zerotowordpress.com", category: "Tech" },
  { name: "ZeroToAIAgents.com", href: "https://zerotoaiagents.com", category: "AI" },
  { name: "ZeroToHosting.com", href: "https://zerotohosting.com", category: "Tech" },
  { name: "ZeroToWander.com", href: "https://zerotowander.com", category: "Travel" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 shadow-sm group-hover:bg-purple-700 transition-colors">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-charcoal text-sm leading-tight block">Zero To</span>
              <span className="font-bold text-purple-600 text-sm leading-tight block">Passive Income</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setIncomeOpen(!incomeOpen)}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${incomeOpen ? "rotate-180" : ""}`} />
                  </button>
                  {incomeOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-white border border-gray-100 shadow-lg py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                          onClick={() => setIncomeOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Zero To Network dropdown */}
            <div className="relative ml-2">
              <button
                onClick={() => setNetworkOpen(!networkOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-all"
              >
                Network
                <ChevronDown className={`h-4 w-4 transition-transform ${networkOpen ? "rotate-180" : ""}`} />
              </button>
              {networkOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 rounded-xl bg-white border border-gray-100 shadow-lg py-2">
                  <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Zero To Network
                  </p>
                  {networkSites.map((site) => (
                    <a
                      key={site.name}
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                      onClick={() => setNetworkOpen(false)}
                    >
                      <span>{site.name}</span>
                      <span className="text-xs text-gray-400">{site.category}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/start-here" className="btn-primary text-sm px-4 py-2">
              Start Here →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {item.name}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:text-purple-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="mt-3 px-3">
                <Link
                  href="/start-here"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Start Here →
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
