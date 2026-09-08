export interface Division {
  name: string;
  tagline: string;
  focus: string;
  description: string;
  services: string[];
}

export const DIVISIONS: Division[] = [
  {
    name: "Arvanto Advisory",
    tagline: "Strategy & Growth Leadership",
    focus: "Corporate Strategy, Growth & Market Dominance",
    description: "High-impact strategic advisory for C-suite leaders and boards navigating market disruption, capital allocation, and expansion decisions.",
    services: [
      "Corporate Strategy",
      "Growth Strategy",
      "Market Entry Strategy",
      "Competitive Intelligence",
      "Business Model Design",
      "Feasibility Studies",
      "Investment Strategy",
      "M&A Advisory"
    ]
  },
  {
    name: "Arvanto Intelligence",
    tagline: "Data, AI & Quantitative Intelligence",
    focus: "Decision Systems, Predictive Modeling & AI Infrastructure",
    description: "Embedding mathematical rigour and machine intelligence into daily workflows for actionable clarity and automated execution.",
    services: [
      "Predictive Analytics & Forecasting",
      "Business Intelligence Dashboards",
      "AI Implementation & Infrastructure",
      "Autonomous AI Agents",
      "Workflow & Process Automation",
      "Decision Support Systems",
      "Data Strategy & Governance",
      "Scenario & Capital Modelling",
      "Customer & Pricing Analytics",
      "Fraud & Anomaly Analytics"
    ]
  },
  {
    name: "Arvanto Transformation",
    tagline: "Operational Execution & Realization",
    focus: "Operating Model Shift, Digital PMO & Change Management",
    description: "Do not simply tell organizations what to do. Help them execute it. We embed alongside client teams to deliver rapid, sustainable business change.",
    services: [
      "Operating Model Transformation",
      "Digital Transformation",
      "AI Implementation Office",
      "Process Redesign & Lean Engineering",
      "Organizational Design & Structure",
      "Change Management & Culture",
      "Performance Management Systems",
      "Transformation Management Office (TMO)"
    ]
  },
  {
    name: "Arvanto Risk & Performance",
    tagline: "Resilience, Finance & Quantitative Modeling",
    focus: "Enterprise Risk, Financial Modeling & Actuarial Rigour",
    description: "Quantitative and actuarial modeling as an underlying competitive advantage to safeguard balance sheets and optimize capital efficiency.",
    services: [
      "Enterprise & Operational Risk",
      "Financial Risk Management",
      "Scenario Analysis & Stress Testing",
      "Balance Sheet Resilience",
      "Financial Modelling & Valuation",
      "Capital Planning & Allocation",
      "Actuarial & Statistical Modelling",
      "Pricing & Insurance Analytics"
    ]
  },
  {
    name: "Arvanto Ventures",
    tagline: "Venture Building & Strategic Investments",
    focus: "Proprietary Technology & Long-term Equity Creation",
    description: "Building next-generation high-growth business units and partnering through strategic technology investments.",
    services: [
      "Proprietary Technology Incubation",
      "Strategic Startup Investments",
      "Joint Venture Structuring",
      "New Business Unit Creation",
      "Enterprise Product Commercialization"
    ]
  }
];
