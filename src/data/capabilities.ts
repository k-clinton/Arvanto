export interface Capability {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  icon: string;
  image: string;
  colSpan: string;
  keyServices: string[];
  metrics: { label: string; value: string }[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "strategy-growth",
    slug: "strategy-growth",
    category: "Arvanto Advisory",
    title: "Strategy & Growth",
    description: "Formulate resilient corporate strategies, identify high-yield growth opportunities, and redesign market positioning.",
    detailedDescription: "Arvanto Advisory works alongside C-suite leaders and boards to solve systemic corporate challenges. We engineer market expansion strategies, lead comprehensive M&A feasibility assessments, and structure sustainable growth engines.",
    icon: "ph:chart-line-up-bold",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-6 col-span-12",
    keyServices: [
      "Corporate Strategy",
      "Growth Strategy & Expansion",
      "Market Entry & Feasibility",
      "Competitive Intelligence",
      "Business Model Redesign",
      "M&A & Investment Advisory"
    ],
    metrics: [
      { label: "Revenue Opportunity Identified", value: "3.4x" },
      { label: "Market Entry Acceleration", value: "40%" }
    ]
  },
  {
    id: "ai-technology",
    slug: "ai-technology",
    category: "Arvanto Intelligence",
    title: "AI & Technology",
    description: "Deploy autonomous AI agents, intelligent workflow engines, and enterprise decision support infrastructure.",
    detailedDescription: "Transform operating units with cutting-edge artificial intelligence. Arvanto Intelligence bridges complex machine learning models with day-to-day enterprise execution to multiply productivity and decision accuracy.",
    icon: "ph:cpu-bold",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-6 col-span-12",
    keyServices: [
      "Autonomous AI Agents",
      "Enterprise AI Implementation",
      "Intelligent Process Automation",
      "Decision Support Systems",
      "Predictive AI Architecture",
      "Technology Modernization"
    ],
    metrics: [
      { label: "Process Velocity Gain", value: "65%" },
      { label: "Operational Error Reduction", value: "82%" }
    ]
  },
  {
    id: "data-decision-intelligence",
    slug: "data-decision-intelligence",
    category: "Arvanto Intelligence",
    title: "Data & Decision Intelligence",
    description: "Unlock actionable clarity with advanced business intelligence, customer analytics, and real-time scenario modelling.",
    detailedDescription: "Data without strategic clarity is overhead. We turn fragmented enterprise data into unified decision intelligence through high-frequency scenario modeling, pricing engines, and executive command centers.",
    icon: "ph:squares-four-bold",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-3 col-span-6",
    keyServices: [
      "Data Strategy & Governance",
      "Predictive Analytics & Forecasting",
      "Scenario & Capital Modelling",
      "Customer & Pricing Analytics",
      "Fraud & Anomaly Analytics",
      "Executive Command Dashboards"
    ],
    metrics: [
      { label: "Forecast Precision", value: "94%" },
      { label: "Data Latency Cut", value: "75%" }
    ]
  },
  {
    id: "risk-performance",
    slug: "risk-performance",
    category: "Arvanto Risk & Performance",
    title: "Risk & Performance",
    description: "Mitigate systemic financial and operational exposure with rigorous stress testing, capital planning, and actuarial models.",
    detailedDescription: "Uncertainty demands mathematical rigour. Arvanto Risk & Performance provides enterprise stress testing, financial modeling, valuation, and quantitative risk management to ensure balance-sheet resilience.",
    icon: "ph:shield-check-bold",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-3 col-span-6",
    keyServices: [
      "Enterprise & Operational Risk",
      "Financial Risk & Capital Planning",
      "Macroeconomic Scenario Testing",
      "Financial & Valuation Modelling",
      "Actuarial & Quantitative Risk",
      "Performance Optimization"
    ],
    metrics: [
      { label: "Capital Efficiency Boost", value: "28%" },
      { label: "Risk Exposure Coverage", value: "100%" }
    ]
  },
  {
    id: "transformation-operations",
    slug: "transformation-operations",
    category: "Arvanto Transformation",
    title: "Transformation & Operations",
    description: "Execute complex organizational redesigns, digital transformations, and change management with disciplined PMOs.",
    detailedDescription: "Strategy without execution is hallucination. Arvanto Transformation sets up dedicated Transformation Management Offices (TMO) to execute operating model shifts, cost restructuring, and sustainable change.",
    icon: "ph:gear-six-bold",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-12 col-span-12",
    keyServices: [
      "Operating Model Transformation",
      "Digital & IT Transformation",
      "Process Engineering & Optimization",
      "Organizational Design & Culture",
      "Change Management Execution",
      "Transformation Office (TMO)"
    ],
    metrics: [
      { label: "On-Time Initiative Delivery", value: "98%" },
      { label: "ROI Realization", value: "3.2x" }
    ]
  }
];
