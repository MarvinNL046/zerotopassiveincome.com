export type Difficulty = "Easy" | "Medium" | "Hard";

export interface IncomeStream {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  difficulty: Difficulty;
  timeToFirstIncome: string;
  potentialMonthly: { min: number; max: number };
  startupCost: { min: number; max: number };
  passivityScore: number; // 1-10, 10 = fully passive
  color: string;
  bgColor: string;
  category: string;
  keySteps: string[];
  pros: string[];
  cons: string[];
  topTools: string[];
}

export const incomeStreams: IncomeStream[] = [
  {
    id: "affiliate-marketing",
    slug: "affiliate-marketing",
    title: "Affiliate Marketing",
    description:
      "Earn commissions by recommending products you already use and trust.",
    longDescription:
      "Affiliate marketing is one of the best entry points into passive income. You create content once — a blog post, YouTube video, or email — and earn commissions on autopilot as people click your links and purchase. No product creation, no customer support, no inventory.",
    icon: "Link",
    difficulty: "Medium",
    timeToFirstIncome: "3–6 months",
    potentialMonthly: { min: 500, max: 50000 },
    startupCost: { min: 50, max: 500 },
    passivityScore: 8,
    color: "#7C3AED",
    bgColor: "#EDE9FE",
    category: "Online Business",
    keySteps: [
      "Pick a profitable niche",
      "Build a blog or YouTube channel",
      "Join affiliate programs (Amazon, ShareASale, Impact)",
      "Create helpful content with embedded links",
      "Drive SEO traffic to monetize 24/7",
    ],
    pros: [
      "No product creation needed",
      "Scales without extra work",
      "Low startup costs",
      "Passive after initial effort",
    ],
    cons: [
      "Takes time to build traffic",
      "Commission rates can change",
      "Dependent on third-party programs",
    ],
    topTools: ["ahrefs", "surfer-seo", "hostinger", "convertkit"],
  },
  {
    id: "dividend-investing",
    slug: "dividend-investing",
    title: "Dividend Investing",
    description:
      "Buy stocks that pay you quarterly cash — let your money make money.",
    longDescription:
      "Dividend investing is the most truly passive income method. You invest in dividend-paying stocks or ETFs, and every quarter the company sends you cash. No content, no customers, no work required. The challenge is having enough capital to generate meaningful income.",
    icon: "TrendingUp",
    difficulty: "Easy",
    timeToFirstIncome: "Immediate (first dividend)",
    potentialMonthly: { min: 50, max: 10000 },
    startupCost: { min: 1000, max: 100000 },
    passivityScore: 10,
    color: "#10B981",
    bgColor: "#D1FAE5",
    category: "Investing",
    keySteps: [
      "Open a brokerage account (Interactive Brokers, Degiro)",
      "Research dividend stocks or ETFs",
      "Build a diversified dividend portfolio",
      "Reinvest dividends to compound",
      "Scale contributions over time",
    ],
    pros: [
      "Truly passive — no active work",
      "Predictable income stream",
      "Compound growth potential",
      "Regulated and transparent",
    ],
    cons: [
      "Requires significant capital",
      "Market risk and volatility",
      "Dividends can be cut",
    ],
    topTools: ["interactive-brokers", "degiro"],
  },
  {
    id: "digital-products",
    slug: "digital-products",
    title: "Digital Products",
    description:
      "Create once, sell forever — ebooks, templates, courses, and more.",
    longDescription:
      "Digital products are the holy grail of passive income. You create an ebook, course, Notion template, or Photoshop preset once, and sell it an infinite number of times with zero marginal cost. Platforms like Gumroad and Teachable handle delivery automatically.",
    icon: "Package",
    difficulty: "Medium",
    timeToFirstIncome: "1–3 months",
    potentialMonthly: { min: 200, max: 30000 },
    startupCost: { min: 0, max: 200 },
    passivityScore: 9,
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    category: "Creator Economy",
    keySteps: [
      "Identify a problem your audience has",
      "Create a high-value digital product",
      "Set up a Gumroad or Teachable store",
      "Build an email list for launch",
      "Automate delivery and upsells",
    ],
    pros: [
      "Zero marginal cost per sale",
      "100% digital — no shipping",
      "High profit margins (80–95%)",
      "Scales infinitely",
    ],
    cons: [
      "Requires upfront creation time",
      "Need an audience or traffic",
      "Market saturation in popular niches",
    ],
    topTools: ["canva", "convertkit", "chatgpt"],
  },
  {
    id: "print-on-demand",
    slug: "print-on-demand",
    title: "Print-on-Demand",
    description:
      "Design products once, let a fulfillment partner print and ship everything.",
    longDescription:
      "Print-on-demand lets you sell custom t-shirts, mugs, posters, and more without ever touching inventory. You upload designs to platforms like Printful or Merch by Amazon, and they handle printing, shipping, and customer service. Your job: create good designs.",
    icon: "Printer",
    difficulty: "Easy",
    timeToFirstIncome: "1–4 weeks",
    potentialMonthly: { min: 100, max: 8000 },
    startupCost: { min: 0, max: 100 },
    passivityScore: 7,
    color: "#EC4899",
    bgColor: "#FCE7F3",
    category: "E-commerce",
    keySteps: [
      "Research trending niches on Merch by Amazon",
      "Create designs with Canva or Adobe Illustrator",
      "Upload to Printful, Printify, or Merch by Amazon",
      "Optimize listings for search",
      "Scale winning designs",
    ],
    pros: [
      "Zero inventory risk",
      "No upfront product costs",
      "Easy to start",
      "Multiple platform options",
    ],
    cons: [
      "Low margins per item",
      "High competition",
      "Platform dependency",
    ],
    topTools: ["canva", "chatgpt"],
  },
  {
    id: "content-creation",
    slug: "content-creation",
    title: "Content Creation",
    description:
      "Build a blog or YouTube channel that earns through ads, sponsorships, and affiliates.",
    longDescription:
      "Content creation (blogging and YouTube) earns through multiple streams: display ads via AdSense or Mediavine, affiliate commissions, sponsorships, and digital products. Old content keeps earning — a 3-year-old blog post can still generate $500/month.",
    icon: "FileText",
    difficulty: "Medium",
    timeToFirstIncome: "6–12 months",
    potentialMonthly: { min: 500, max: 100000 },
    startupCost: { min: 100, max: 300 },
    passivityScore: 7,
    color: "#3B82F6",
    bgColor: "#DBEAFE",
    category: "Media",
    keySteps: [
      "Choose a profitable niche with search demand",
      "Set up a WordPress blog or YouTube channel",
      "Publish consistent, high-quality content",
      "Apply for Google AdSense or Mediavine",
      "Add affiliate links and sponsorship spots",
    ],
    pros: [
      "Multiple income streams from one asset",
      "Compounds over time (SEO)",
      "Builds a sellable business asset",
      "Ad income is truly passive",
    ],
    cons: [
      "Slow to monetize initially",
      "Algorithm dependency",
      "Requires consistent effort to grow",
    ],
    topTools: ["hostinger", "ahrefs", "surfer-seo", "convertkit"],
  },
  {
    id: "real-estate-reits",
    slug: "real-estate-reits",
    title: "Real Estate (REITs)",
    description:
      "Invest in real estate without owning property — REITs pay 3–8% dividends.",
    longDescription:
      "Real Estate Investment Trusts (REITs) let you invest in real estate portfolios that are required by law to pay out 90% of taxable income as dividends. You get real estate exposure without landlord headaches. Combine with direct real estate for maximum income.",
    icon: "Building2",
    difficulty: "Easy",
    timeToFirstIncome: "1 quarter",
    potentialMonthly: { min: 50, max: 5000 },
    startupCost: { min: 500, max: 50000 },
    passivityScore: 10,
    color: "#0EA5E9",
    bgColor: "#E0F2FE",
    category: "Investing",
    keySteps: [
      "Research REIT sectors (residential, commercial, healthcare)",
      "Open a brokerage account",
      "Build a diversified REIT portfolio",
      "Reinvest dividends for compounding",
      "Monitor distributions quarterly",
    ],
    pros: [
      "Legal requirement to distribute 90% of income",
      "No landlord responsibilities",
      "High dividend yields (3–8%)",
      "Liquid — unlike physical real estate",
    ],
    cons: [
      "Requires capital",
      "Sensitive to interest rate changes",
      "Lower capital appreciation than direct property",
    ],
    topTools: ["interactive-brokers", "degiro"],
  },
];

export const getIncomeStreamBySlug = (slug: string): IncomeStream | undefined =>
  incomeStreams.find((s) => s.slug === slug);
