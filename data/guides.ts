export type GuideCategory =
  | "Affiliate Marketing"
  | "Dividend Investing"
  | "Digital Products"
  | "Print-on-Demand"
  | "Content Creation"
  | "Real Estate"
  | "Getting Started"
  | "Tools & Resources";

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: GuideCategory;
  readTime: number; // minutes
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  keywords: string[];
  tableOfContents: { id: string; title: string }[];
}

export const guides: Guide[] = [
  {
    slug: "how-to-start-affiliate-marketing-for-beginners",
    title: "How to Start Affiliate Marketing in 2025 (Complete Beginner Guide)",
    excerpt:
      "A step-by-step guide to launching your first affiliate marketing site — from niche selection to your first $1,000 in commissions. No prior experience needed.",
    category: "Affiliate Marketing",
    readTime: 18,
    publishedAt: "2025-01-15",
    updatedAt: "2025-03-01",
    featured: true,
    difficulty: "Beginner",
    keywords: ["affiliate marketing for beginners", "how to start affiliate marketing", "affiliate marketing 2025"],
    tableOfContents: [
      { id: "what-is-affiliate-marketing", title: "What is Affiliate Marketing?" },
      { id: "how-much-can-you-earn", title: "How Much Can You Earn?" },
      { id: "step-1-choose-niche", title: "Step 1: Choose Your Niche" },
      { id: "step-2-build-website", title: "Step 2: Build Your Website" },
      { id: "step-3-join-programs", title: "Step 3: Join Affiliate Programs" },
      { id: "step-4-create-content", title: "Step 4: Create Content That Converts" },
      { id: "step-5-drive-traffic", title: "Step 5: Drive Organic Traffic" },
      { id: "best-affiliate-programs", title: "Best Affiliate Programs in 2025" },
      { id: "common-mistakes", title: "Common Mistakes to Avoid" },
    ],
  },
  {
    slug: "best-dividend-stocks-for-passive-income",
    title: "Best Dividend Stocks for Passive Income in 2025",
    excerpt:
      "The 10 best dividend stocks paying reliable, growing dividends — with analysis of yield, payout ratio, and 10-year growth history.",
    category: "Dividend Investing",
    readTime: 15,
    publishedAt: "2025-02-01",
    updatedAt: "2025-03-10",
    featured: true,
    difficulty: "Beginner",
    keywords: ["best dividend stocks 2025", "dividend investing passive income", "high yield dividend stocks"],
    tableOfContents: [
      { id: "what-are-dividend-stocks", title: "What Are Dividend Stocks?" },
      { id: "what-to-look-for", title: "What to Look for in a Dividend Stock" },
      { id: "top-10-dividend-stocks", title: "Top 10 Dividend Stocks for 2025" },
      { id: "dividend-etfs", title: "Dividend ETFs: The Easier Option" },
      { id: "how-to-build-portfolio", title: "How to Build a Dividend Portfolio" },
      { id: "how-much-to-invest", title: "How Much Do You Need to Invest?" },
    ],
  },
  {
    slug: "how-to-create-and-sell-digital-products",
    title: "How to Create & Sell Digital Products: The Complete Guide",
    excerpt:
      "From idea to first sale: how to create digital products that sell on autopilot. Ebooks, templates, courses, presets — everything covered.",
    category: "Digital Products",
    readTime: 20,
    publishedAt: "2025-01-28",
    updatedAt: "2025-02-20",
    featured: true,
    difficulty: "Beginner",
    keywords: ["how to sell digital products", "create digital products", "digital products passive income"],
    tableOfContents: [
      { id: "types-of-digital-products", title: "Types of Digital Products That Sell" },
      { id: "how-to-validate-your-idea", title: "How to Validate Your Idea" },
      { id: "creating-your-product", title: "Creating Your Product" },
      { id: "platforms-to-sell-on", title: "Best Platforms to Sell On" },
      { id: "pricing-your-product", title: "Pricing Your Digital Product" },
      { id: "marketing-and-launch", title: "Marketing and Launch Strategy" },
    ],
  },
  {
    slug: "passive-income-with-print-on-demand",
    title: "Print-on-Demand Passive Income: How to Make $1,000/Month",
    excerpt:
      "The complete guide to building a profitable print-on-demand business on Merch by Amazon, Redbubble, and Printify — with real income reports.",
    category: "Print-on-Demand",
    readTime: 14,
    publishedAt: "2025-02-10",
    updatedAt: "2025-03-05",
    featured: false,
    difficulty: "Beginner",
    keywords: ["print on demand passive income", "merch by amazon guide", "printify vs printful"],
    tableOfContents: [
      { id: "how-pod-works", title: "How Print-on-Demand Works" },
      { id: "best-platforms", title: "Best POD Platforms Compared" },
      { id: "niche-research", title: "Niche Research for POD" },
      { id: "design-tips", title: "Design Tips That Sell" },
      { id: "scaling", title: "How to Scale to $1K/Month" },
    ],
  },
  {
    slug: "how-to-start-a-blog-and-make-money",
    title: "How to Start a Blog and Make Money in 2025 (Step-by-Step)",
    excerpt:
      "Everything you need to launch a profitable blog from scratch: hosting, WordPress setup, content strategy, SEO, and monetization.",
    category: "Content Creation",
    readTime: 22,
    publishedAt: "2025-01-10",
    updatedAt: "2025-03-12",
    featured: true,
    difficulty: "Beginner",
    keywords: ["how to start a blog", "blogging for money 2025", "start a profitable blog"],
    tableOfContents: [
      { id: "why-blogging", title: "Why Blogging Still Works in 2025" },
      { id: "choose-niche", title: "Choosing Your Blog Niche" },
      { id: "setup-wordpress", title: "Setting Up WordPress" },
      { id: "content-strategy", title: "Content Strategy That Drives Traffic" },
      { id: "monetization", title: "Monetization Methods" },
      { id: "realistic-timeline", title: "Realistic Income Timeline" },
    ],
  },
  {
    slug: "what-are-reits-and-how-to-invest",
    title: "What Are REITs? How to Invest in Real Estate Without Buying Property",
    excerpt:
      "REITs let you earn real estate income without being a landlord. Learn how they work, the best REITs to buy, and how to build a REIT portfolio for passive income.",
    category: "Real Estate",
    readTime: 12,
    publishedAt: "2025-02-20",
    updatedAt: "2025-03-08",
    featured: false,
    difficulty: "Beginner",
    keywords: ["what are REITs", "how to invest in REITs", "REIT passive income"],
    tableOfContents: [
      { id: "what-are-reits", title: "What Are REITs?" },
      { id: "types-of-reits", title: "Types of REITs" },
      { id: "best-reits-2025", title: "Best REITs to Buy in 2025" },
      { id: "how-to-buy-reits", title: "How to Buy REITs" },
      { id: "reit-etfs", title: "REIT ETFs for Diversification" },
    ],
  },
  {
    slug: "passive-income-ideas-for-beginners",
    title: "17 Realistic Passive Income Ideas for Beginners (2025)",
    excerpt:
      "A no-BS list of passive income ideas that actually work — with startup costs, time requirements, and realistic earnings for each.",
    category: "Getting Started",
    readTime: 16,
    publishedAt: "2025-01-05",
    updatedAt: "2025-03-15",
    featured: true,
    difficulty: "Beginner",
    keywords: ["passive income ideas 2025", "passive income for beginners", "how to make passive income"],
    tableOfContents: [
      { id: "what-is-passive-income", title: "What is Passive Income Really?" },
      { id: "online-passive-income", title: "Online Passive Income Ideas" },
      { id: "investing-passive-income", title: "Investing for Passive Income" },
      { id: "which-to-start-with", title: "Which Should You Start With?" },
    ],
  },
  {
    slug: "passive-income-calculator-how-much-to-invest",
    title: "Passive Income Calculator: How Much Do You Need to Invest?",
    excerpt:
      "Use our interactive calculator to find out exactly how much passive income you can generate based on your investment, method, and timeline.",
    category: "Getting Started",
    readTime: 8,
    publishedAt: "2025-02-15",
    updatedAt: "2025-03-10",
    featured: false,
    difficulty: "Beginner",
    keywords: ["passive income calculator", "how much passive income", "passive income from investments"],
    tableOfContents: [
      { id: "how-to-use-calculator", title: "How to Use the Calculator" },
      { id: "by-investment-amount", title: "Passive Income by Investment Amount" },
      { id: "by-method", title: "Passive Income by Method" },
    ],
  },
];

export const getFeaturedGuides = (): Guide[] => guides.filter((g) => g.featured);

export const getGuidesByCategory = (category: GuideCategory): Guide[] =>
  guides.filter((g) => g.category === category);

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);
