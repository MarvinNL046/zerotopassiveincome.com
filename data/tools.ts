export type ToolCategory =
  | "Hosting"
  | "Email Marketing"
  | "Design"
  | "SEO"
  | "AI Writing"
  | "Investing"
  | "E-commerce"
  | "Analytics";

export interface Tool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  rating: number; // 1-5
  reviewCount: number;
  price: {
    free: boolean;
    startingAt?: number;
    period?: "month" | "year";
    note?: string;
  };
  affiliateUrl: string;
  logoUrl: string;
  badge?: "Best Value" | "Editor's Pick" | "Most Popular" | "Free Option";
  pros: string[];
  cons: string[];
  features: string[];
  incomeStreams: string[];
  bestFor: string;
}

export const tools: Tool[] = [
  {
    id: "hostinger",
    slug: "hostinger",
    name: "Hostinger",
    tagline: "Best affordable hosting for passive income sites",
    description:
      "Hostinger offers the best price-to-performance ratio for beginner bloggers and niche site builders. With LiteSpeed servers, free SSL, and WordPress one-click install, it's the #1 pick for getting online fast on a budget.",
    category: "Hosting",
    rating: 4.7,
    reviewCount: 1284,
    price: {
      free: false,
      startingAt: 2.99,
      period: "month",
      note: "with annual plan",
    },
    affiliateUrl: "https://zerotohosting.com/hostinger",
    logoUrl: "https://logo.clearbit.com/hostinger.com",
    badge: "Best Value",
    pros: [
      "Extremely affordable (from $2.99/mo)",
      "Fast LiteSpeed servers",
      "Free SSL and domain included",
      "99.9% uptime guarantee",
      "Beginner-friendly hPanel",
    ],
    cons: [
      "No phone support",
      "Renewal prices higher than intro",
    ],
    features: [
      "LiteSpeed + NVMe SSD servers",
      "Free domain for 1 year",
      "WordPress auto-installer",
      "Weekly backups",
      "Free CDN",
    ],
    incomeStreams: ["affiliate-marketing", "content-creation", "digital-products"],
    bestFor: "Beginner bloggers and niche site builders",
  },
  {
    id: "siteground",
    slug: "siteground",
    name: "SiteGround",
    tagline: "Premium managed WordPress hosting with top-tier support",
    description:
      "SiteGround is the go-to choice for bloggers who want managed WordPress hosting with excellent support. Their SuperCacher technology speeds up WordPress sites significantly, and their security features are best-in-class.",
    category: "Hosting",
    rating: 4.5,
    reviewCount: 892,
    price: {
      free: false,
      startingAt: 3.99,
      period: "month",
      note: "with annual plan",
    },
    affiliateUrl: "https://zerotohosting.com/siteground",
    logoUrl: "https://logo.clearbit.com/siteground.com",
    badge: "Editor's Pick",
    pros: [
      "Excellent 24/7 support",
      "Managed WordPress features",
      "Free SSL + daily backups",
      "Advanced caching technology",
    ],
    cons: [
      "More expensive than Hostinger",
      "Storage limits on starter plans",
    ],
    features: [
      "WordPress SuperCacher",
      "Free daily backups",
      "24/7 expert support",
      "Staging environment",
      "Free CDN via Cloudflare",
    ],
    incomeStreams: ["affiliate-marketing", "content-creation"],
    bestFor: "Serious bloggers wanting managed WordPress",
  },
  {
    id: "convertkit",
    slug: "convertkit",
    name: "ConvertKit",
    tagline: "Email marketing built for creators and solopreneurs",
    description:
      "ConvertKit is the email platform designed specifically for creators. With powerful automation, landing pages, and a free plan up to 1,000 subscribers, it's the #1 choice for passive income bloggers building an audience.",
    category: "Email Marketing",
    rating: 4.8,
    reviewCount: 2156,
    price: {
      free: true,
      startingAt: 29,
      period: "month",
      note: "Free up to 1,000 subscribers",
    },
    affiliateUrl: "https://convertkit.com?ref=zerotopassiveincome",
    logoUrl: "https://logo.clearbit.com/convertkit.com",
    badge: "Most Popular",
    pros: [
      "Free plan up to 1,000 subscribers",
      "Powerful visual automations",
      "Creator-focused features",
      "High deliverability rates",
      "Free landing pages included",
    ],
    cons: [
      "More expensive at scale vs competitors",
      "Limited template options",
    ],
    features: [
      "Visual automation builder",
      "Free landing pages",
      "Commerce (sell products)",
      "Subscriber tagging and segmentation",
      "Creator Network",
    ],
    incomeStreams: ["affiliate-marketing", "digital-products", "content-creation"],
    bestFor: "Bloggers and content creators building an email list",
  },
  {
    id: "mailchimp",
    slug: "mailchimp",
    name: "Mailchimp",
    tagline: "The most recognizable email platform for beginners",
    description:
      "Mailchimp is the most well-known email marketing tool with a generous free plan. Best for beginners who want simple campaigns without complex automations.",
    category: "Email Marketing",
    rating: 4.2,
    reviewCount: 3421,
    price: {
      free: true,
      startingAt: 13,
      period: "month",
      note: "Free up to 500 contacts",
    },
    affiliateUrl: "https://mailchimp.com",
    logoUrl: "https://logo.clearbit.com/mailchimp.com",
    badge: "Free Option",
    pros: [
      "Very beginner friendly",
      "Free plan available",
      "Good template library",
      "E-commerce integrations",
    ],
    cons: [
      "Automations limited on free plan",
      "Less powerful than ConvertKit for creators",
      "Removed subscribers still count toward limit",
    ],
    features: [
      "Drag-and-drop email builder",
      "Basic automation",
      "A/B testing",
      "Landing pages",
      "Analytics dashboard",
    ],
    incomeStreams: ["affiliate-marketing", "digital-products"],
    bestFor: "Absolute beginners testing email marketing",
  },
  {
    id: "canva",
    slug: "canva",
    name: "Canva Pro",
    tagline: "Design everything — thumbnails, ebooks, templates, and more",
    description:
      "Canva Pro is the essential design tool for passive income creators. Use it to create digital products, Pinterest graphics, YouTube thumbnails, ebook covers, course materials, and print-on-demand designs — even with zero design experience.",
    category: "Design",
    rating: 4.9,
    reviewCount: 5672,
    price: {
      free: true,
      startingAt: 15,
      period: "month",
      note: "Free tier available",
    },
    affiliateUrl: "https://canva.com",
    logoUrl: "https://logo.clearbit.com/canva.com",
    badge: "Editor's Pick",
    pros: [
      "Incredibly easy to use",
      "Massive template library",
      "Great for digital product creation",
      "Brand Kit for consistent branding",
      "Background remover on Pro",
    ],
    cons: [
      "Not for print production-quality design",
      "Assets not usable outside Canva",
    ],
    features: [
      "1M+ premium templates",
      "Background remover",
      "Brand Kit",
      "Magic AI tools",
      "Team collaboration",
    ],
    incomeStreams: ["digital-products", "print-on-demand", "content-creation"],
    bestFor: "Creating digital products and visual content",
  },
  {
    id: "ahrefs",
    slug: "ahrefs",
    name: "Ahrefs",
    tagline: "The #1 SEO tool for finding profitable keywords",
    description:
      "Ahrefs is the industry-standard SEO tool for niche site builders and bloggers. Use it to find low-competition keywords, analyze competitors, and track your rankings. Essential for any content-based passive income site.",
    category: "SEO",
    rating: 4.8,
    reviewCount: 1893,
    price: {
      free: false,
      startingAt: 99,
      period: "month",
    },
    affiliateUrl: "https://ahrefs.com",
    logoUrl: "https://logo.clearbit.com/ahrefs.com",
    badge: "Editor's Pick",
    pros: [
      "Best keyword research in the industry",
      "Massive backlink database",
      "Accurate traffic estimations",
      "Content gap analysis",
      "Rank tracker",
    ],
    cons: [
      "Expensive for beginners",
      "No free trial (only $7 trial)",
    ],
    features: [
      "Keywords Explorer",
      "Site Explorer",
      "Content Explorer",
      "Rank Tracker",
      "Site Audit",
    ],
    incomeStreams: ["affiliate-marketing", "content-creation"],
    bestFor: "Serious bloggers and niche site builders",
  },
  {
    id: "surfer-seo",
    slug: "surfer-seo",
    name: "Surfer SEO",
    tagline: "Write content that ranks with AI-powered optimization",
    description:
      "Surfer SEO analyzes top-ranking pages and tells you exactly how to optimize your content to rank. It integrates directly with Google Docs and WordPress, making on-page SEO effortless.",
    category: "SEO",
    rating: 4.6,
    reviewCount: 987,
    price: {
      free: false,
      startingAt: 89,
      period: "month",
    },
    affiliateUrl: "https://surferseo.com",
    logoUrl: "https://logo.clearbit.com/surferseo.com",
    pros: [
      "Real-time content optimization",
      "Integrates with Google Docs",
      "Content Score for optimization guide",
      "SERP analyzer",
    ],
    cons: [
      "Expensive",
      "Can over-optimize content",
    ],
    features: [
      "Content Editor",
      "SERP Analyzer",
      "Keyword Research",
      "Audit tool",
      "Grow Flow AI",
    ],
    incomeStreams: ["affiliate-marketing", "content-creation"],
    bestFor: "Content creators wanting data-driven SEO",
  },
  {
    id: "chatgpt",
    slug: "chatgpt",
    name: "ChatGPT Plus",
    tagline: "AI writing assistant for faster content creation",
    description:
      "ChatGPT Plus with GPT-4 is the must-have AI tool for passive income creators. Use it to outline articles, generate product ideas, write email sequences, create course content, and brainstorm digital product concepts.",
    category: "AI Writing",
    rating: 4.7,
    reviewCount: 8934,
    price: {
      free: true,
      startingAt: 20,
      period: "month",
      note: "Free tier available",
    },
    affiliateUrl: "https://chat.openai.com",
    logoUrl: "https://logo.clearbit.com/openai.com",
    badge: "Most Popular",
    pros: [
      "Versatile — works for any content type",
      "Fast content outlining and drafting",
      "Free tier available",
      "GPT-4o reasoning capabilities",
    ],
    cons: [
      "Can produce generic content",
      "Requires human editing",
      "Knowledge cutoff",
    ],
    features: [
      "GPT-4o model access",
      "Image generation (DALL-E)",
      "Code interpreter",
      "Custom GPTs",
      "File uploads",
    ],
    incomeStreams: ["digital-products", "content-creation", "affiliate-marketing", "print-on-demand"],
    bestFor: "All passive income creators for content production",
  },
  {
    id: "jasper",
    slug: "jasper",
    name: "Jasper AI",
    tagline: "AI writing platform built specifically for marketing content",
    description:
      "Jasper is the AI writing tool built specifically for marketers and content creators. With pre-built templates for blog posts, email sequences, ad copy, and more, it's optimized for marketing content that converts.",
    category: "AI Writing",
    rating: 4.4,
    reviewCount: 1245,
    price: {
      free: false,
      startingAt: 49,
      period: "month",
    },
    affiliateUrl: "https://jasper.ai",
    logoUrl: "https://logo.clearbit.com/jasper.ai",
    pros: [
      "Marketing-focused templates",
      "Brand voice training",
      "Team collaboration features",
      "Integrates with Surfer SEO",
    ],
    cons: [
      "Expensive",
      "ChatGPT often delivers comparable results",
    ],
    features: [
      "50+ marketing templates",
      "Brand voice",
      "SEO mode (with Surfer)",
      "Campaign creation",
      "Team workspace",
    ],
    incomeStreams: ["affiliate-marketing", "content-creation"],
    bestFor: "Marketing teams scaling content production",
  },
  {
    id: "interactive-brokers",
    slug: "interactive-brokers",
    name: "Interactive Brokers",
    tagline: "Professional-grade investing platform for dividend portfolios",
    description:
      "Interactive Brokers is the preferred platform for serious dividend investors. With access to global markets, fractional shares, and some of the lowest fees in the industry, it's the top choice for building a passive income portfolio.",
    category: "Investing",
    rating: 4.6,
    reviewCount: 2341,
    price: {
      free: true,
      note: "No account minimum, low trading fees",
    },
    affiliateUrl: "https://ibkr.com",
    logoUrl: "https://logo.clearbit.com/interactivebrokers.com",
    badge: "Editor's Pick",
    pros: [
      "Access to 135+ markets globally",
      "Extremely low trading fees",
      "Fractional shares available",
      "Advanced order types",
      "IBKR Lite (commission-free US stocks)",
    ],
    cons: [
      "Complex interface for beginners",
      "Overwhelming number of features",
    ],
    features: [
      "Global market access",
      "Fractional shares",
      "IBKR Lite (free)",
      "Dividend reinvestment (DRIP)",
      "Paper trading practice account",
    ],
    incomeStreams: ["dividend-investing", "real-estate-reits"],
    bestFor: "Serious investors building dividend portfolios",
  },
  {
    id: "degiro",
    slug: "degiro",
    name: "Degiro",
    tagline: "Low-cost European broker for dividend and REIT investing",
    description:
      "Degiro is Europe's leading low-cost broker, with access to ETFs, dividend stocks, and REITs. Particularly popular with European passive income investors thanks to competitive fees and a clean, easy-to-use interface.",
    category: "Investing",
    rating: 4.4,
    reviewCount: 1876,
    price: {
      free: true,
      note: "Free to open, low trading fees from €1",
    },
    affiliateUrl: "https://degiro.eu",
    logoUrl: "https://logo.clearbit.com/degiro.eu",
    badge: "Best Value",
    pros: [
      "Very low trading fees",
      "Easy-to-use interface",
      "Great for ETF investing",
      "Free ETF selection available",
      "European regulatory protection",
    ],
    cons: [
      "Limited to European markets primarily",
      "No ISA in UK (use alternatives)",
      "Basic charting tools",
    ],
    features: [
      "50+ exchanges globally",
      "Free ETF core selection",
      "Dividend tracking",
      "Mobile app",
      "Portfolio analytics",
    ],
    incomeStreams: ["dividend-investing", "real-estate-reits"],
    bestFor: "European investors starting dividend portfolios",
  },
];

export const toolsByCategory = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = [];
  acc[tool.category].push(tool);
  return acc;
}, {} as Record<ToolCategory, Tool[]>);

export const getToolBySlug = (slug: string): Tool | undefined =>
  tools.find((t) => t.slug === slug);

export const getToolsByIncomeStream = (streamId: string): Tool[] =>
  tools.filter((t) => t.incomeStreams.includes(streamId));
