import Link from "next/link";
import { TrendingUp } from "lucide-react";

const footerLinks = {
  "Income Streams": [
    { name: "Affiliate Marketing", href: "/affiliate-marketing" },
    { name: "Dividend Investing", href: "/dividend-investing" },
    { name: "Digital Products", href: "/digital-products" },
    { name: "Print-on-Demand", href: "/guides/passive-income-with-print-on-demand" },
    { name: "Content Creation", href: "/guides/how-to-start-a-blog-and-make-money" },
    { name: "Real Estate (REITs)", href: "/guides/what-are-reits-and-how-to-invest" },
  ],
  "Resources": [
    { name: "Start Here", href: "/start-here" },
    { name: "All Guides", href: "/guides" },
    { name: "Blog", href: "/blog" },
    { name: "Tools We Recommend", href: "/tools" },
    { name: "Income Calculator", href: "/calculator" },
    { name: "About", href: "/about" },
  ],
  "Top Tools": [
    { name: "Hostinger (Hosting)", href: "/tools/hostinger" },
    { name: "ConvertKit (Email)", href: "/tools/convertkit" },
    { name: "Canva Pro (Design)", href: "/tools/canva" },
    { name: "Ahrefs (SEO)", href: "/tools/ahrefs" },
    { name: "ChatGPT Plus (AI)", href: "/tools/chatgpt" },
    { name: "Interactive Brokers", href: "/tools/interactive-brokers" },
  ],
};

const networkSites = [
  { name: "ZeroToVPN.com", href: "https://zerotovpn.com" },
  { name: "ZeroToWP.com", href: "https://zerotowp.com" },
  { name: "ZeroToWordPress.com", href: "https://zerotowordpress.com" },
  { name: "ZeroToAIAgents.com", href: "https://zerotoaiagents.com" },
  { name: "ZeroToHosting.com", href: "https://zerotohosting.com" },
  { name: "ZeroToWander.com", href: "https://zerotowander.com" },
  { name: "Go2Thailand.com", href: "https://go2thailand.com" },
  { name: "Go2-Bali.com", href: "https://go2-bali.com" },
  { name: "Go2-Japan.com", href: "https://go2-japan.com" },
  { name: "Go2-Vietnam.com", href: "https://go2-vietnam.com" },
  { name: "Go2-Spain.com", href: "https://go2-spain.com" },
  { name: "Go2-France.com", href: "https://go2-france.com" },
  { name: "Go2-India.com", href: "https://go2-india.com" },
  { name: "Go2-China.com", href: "https://go2-china.com" },
  { name: "Go2-Morocco.com", href: "https://go2-morocco.com" },
  { name: "Go2-Mexico.com", href: "https://go2-mexico.com" },
  { name: "Go2-USA.com", href: "https://go2-usa.com" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-sm leading-tight block">Zero To</span>
                <span className="font-bold text-purple-400 text-sm leading-tight block">Passive Income</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Build income that works while you sleep. Real strategies, honest reviews, no get-rich-quick BS.
            </p>
            <p className="text-xs text-gray-500">
              <strong className="text-gray-400">Affiliate Disclosure:</strong> We earn commissions from some links on this site. This doesn&apos;t affect our reviews — we only recommend tools we&apos;d use ourselves.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Zero To Network */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Zero To Network — Our Other Sites
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {networkSites.map((site) => (
              <a
                key={site.name}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-purple-400 transition-colors"
              >
                {site.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Zero To Passive Income. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
