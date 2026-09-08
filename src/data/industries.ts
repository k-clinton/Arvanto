export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  focusAreas: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: "financial-services",
    slug: "financial-services",
    name: "Financial Services",
    tagline: "Banking, Insurance, Capital Markets & Asset Management",
    description: "Navigating regulatory shifts, modernizing core banking platforms, deploying predictive credit risk models, and launching digital finance initiatives.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Credit Risk & Pricing Intelligence",
      "Core Banking & FinTech Transformation",
      "Actuarial & Solvency II Modelling",
      "Fraud Anomaly Detection Engines"
    ]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Hospitals, Health Systems & Life Science Enterprises",
    description: "Optimizing patient flow, operational efficiency, medical supply chain resilience, and clinical data analytics infrastructure.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Clinical Process Redesign",
      "Healthcare Resource Allocation",
      "Supply Chain & Asset Tracking",
      "Patient Outcome Analytics"
    ]
  },
  {
    id: "technology",
    slug: "technology",
    name: "Technology & Telecom",
    tagline: "SaaS Platforms, Telecom Networks & Digital Infrastructure",
    description: "Accelerating ARR expansion, optimizing subscriber retention, modernizing network operations, and structuring strategic technology partnerships.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Churn Prediction & Customer LTV",
      "Enterprise SaaS Pricing Strategy",
      "Network Infrastructure AI",
      "Digital Platform Scale"
    ]
  },
  {
    id: "energy-infrastructure",
    slug: "energy-infrastructure",
    name: "Energy & Infrastructure",
    tagline: "Utilities, Renewable Energy, Logistics & Heavy Industry",
    description: "Balancing capital-intensive assets with grid modernizations, operational efficiency, renewable energy transitions, and ESG risk compliance.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Capital Asset Optimization",
      "Predictive Equipment Maintenance",
      "Renewable Transition Feasibility",
      "Supply Chain & Logistics"
    ]
  },
  {
    id: "consumer-retail",
    slug: "consumer-retail",
    name: "Consumer & Retail",
    tagline: "FMCG, E-Commerce, Multi-unit Retail & Logistics",
    description: "Aligning omni-channel fulfillment, dynamic pricing intelligence, demand forecasting, and inventory optimization across East Africa and beyond.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Demand Forecasting & Replenishment",
      "Dynamic Pricing Intelligence",
      "Customer Cohort Retention",
      "Retail Footprint Optimization"
    ]
  },
  {
    id: "public-sector",
    slug: "public-sector",
    name: "Public Sector & Development",
    tagline: "Government Agencies, Development Financial Institutions & NGOs",
    description: "Enabling public policy execution, revenue collection optimization, infrastructure project evaluation, and national digital infrastructure transformation.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Economic Impact Quantification",
      "Revenue Digitization & Integrity",
      "Infrastructure Project Appraisal",
      "Public Service Optimization"
    ]
  }
];
