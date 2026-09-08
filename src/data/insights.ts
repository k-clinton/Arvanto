export interface Insight {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export const INSIGHTS: Insight[] = [
  {
    id: "blog_1",
    slug: "ai-agents-in-enterprise-strategy",
    title: "Deploying Autonomous AI Agents in Enterprise Strategy",
    category: "AI & Technology",
    date: "Sep 02, 2026",
    readTime: "6 min read",
    excerpt: "Moving beyond passive chatbots to deploy decision-making AI agents that execute complex workflow tasks and model strategic outcomes.",
    content: "Enterprise leadership is shifting from manual decision analytics to autonomous intelligence systems. Discover how leading organizations are integrating AI agents directly into supply chains, financial risk models, and customer operations...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    author: "Arvanto Intelligence Practice"
  },
  {
    id: "blog_2",
    slug: "quantifying-value-in-operating-model-shifts",
    title: "Quantifying Value & Financial ROI in Operating Model Shifts",
    category: "Transformation",
    date: "Aug 28, 2026",
    readTime: "8 min read",
    excerpt: "Why 70% of digital transformations fail to realize expected margins—and how mathematical scenario modelling bridges the execution gap.",
    content: "Transformation initiatives often falter due to qualitative goals without quantitative feedback loops. In this briefing, we break down our 5-Stage Methodology for tracking financial metrics at every milestone...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    author: "Arvanto Advisory Team"
  },
  {
    id: "blog_3",
    slug: "scenario-modelling-in-volatile-markets",
    title: "Macroeconomic Scenario Stress-Testing for East African Leaders",
    category: "Risk & Performance",
    date: "Aug 15, 2026",
    readTime: "5 min read",
    excerpt: "How regional enterprises in Kenya and across Africa are leveraging quantitative risk models to protect balance sheets against FX volatility.",
    content: "Market volatility across developing economies requires real-time stress testing rather than annual budget reviews. We explore balance sheet resilience strategies tailored for East African enterprise contexts...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    author: "Arvanto Risk Practice"
  }
];
