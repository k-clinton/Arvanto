export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  heroImages: string[];
  industryPerspective: string[];
  focusAreas: { title: string; description: string }[];
  listingContent?: {
    subheading: string;
    paragraphs: string[];
    expertise: string[];
    closingParagraph: string;
  };
}

export const INDUSTRIES: Industry[] = [
  {
    id: "financial-services",
    slug: "financial-services",
    name: "Financial Services",
    tagline: "Banking, Insurance, Capital Markets & Asset Management",
    description: "Navigating regulatory shifts, modernizing core banking platforms, deploying predictive credit risk models, and launching digital finance initiatives.",
    listingContent: {
      subheading: "Financial Services Consulting & Digital Transformation",
      paragraphs: [
        "Financial institutions face unprecedented pressure to modernize core systems, strengthen risk management frameworks, improve capital efficiency, combat financial crime, and deliver seamless digital customer experiences—all while operating under intensifying regulatory scrutiny. Arvanto supports banks, insurers, capital markets firms, and asset managers with end-to-end advisory and transformation services that address these challenges at both strategic and operational levels.",
        "We help clients navigate regulatory change, redesign operating models, deploy advanced analytics and artificial intelligence, and accelerate digital and embedded finance initiatives across Africa, the Middle East, and international markets.",
      ],
      expertise: [
        "Credit Risk Modelling, Pricing Intelligence & Portfolio Optimization",
        "Core Banking Platform Modernization & FinTech Transformation",
        "Actuarial Modelling, Solvency II / Risk-Based Capital & Capital Optimization",
        "Real-Time Fraud Detection, Anomaly Detection Engines & Financial Crime Prevention",
      ],
      closingParagraph:
        "Our work in Financial Services integrates quantitative risk analytics, technology strategy, regulatory compliance advisory, and large-scale change management to deliver measurable improvements in profitability, resilience, and customer outcomes.",
    },
    image: "/images/page-hero-finance.jpg",
    heroImages: [
      "/images/page-hero-finance.jpg",
      "/images/page-hero-city.jpg",
      "/images/page-hero-team.jpg",
      "/images/page-hero-strategy.jpg",
    ],
    industryPerspective: [
      "Financial institutions are balancing growth and customer expectations with tighter oversight, changing risk conditions, and pressure to modernize legacy systems. These priorities are connected: a new digital product, for example, affects the operating model, data controls, and risk exposure as well as revenue.",
      "Arvanto helps leadership teams bring those considerations together. We use strategy, quantitative analysis, and transformation planning to clarify where to invest, how to manage exposure, and how to turn priorities into an executable roadmap."
    ],
    focusAreas: [
      {
        title: "Credit Risk & Pricing Intelligence",
        description: "Use portfolio, customer, and market data to understand risk-adjusted returns, refine pricing decisions, and identify changes in credit quality earlier."
      },
      {
        title: "Core Banking & FinTech Transformation",
        description: "Assess modernization options, sequence platform and process changes, and develop a practical transition plan that accounts for customers, controls, and operational continuity."
      },
      {
        title: "Actuarial & Solvency II Modelling",
        description: "Strengthen forecasting and capital planning with scenario analysis, actuarial models, and a clearer view of how assumptions affect resilience and strategic choices."
      },
      {
        title: "Fraud Anomaly Detection Engines",
        description: "Improve how teams identify unusual activity by shaping data-led detection approaches, prioritizing investigation signals, and embedding insights into day-to-day operations."
      }
    ]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Hospitals, Health Systems & Life Science Enterprises",
    description: "Optimizing patient flow, operational efficiency, medical supply chain resilience, and clinical data analytics infrastructure.",
    listingContent: {
      subheading: "Healthcare Strategy, Operations & Analytics Advisory",
      paragraphs: [
        "Healthcare providers and life sciences organizations operate in one of the most complex and tightly regulated environments in the economy. Rising demand, constrained resources, fragmented data systems, and the need for better clinical and operational outcomes require a sophisticated combination of strategy, process redesign, and advanced analytics.",
        "Arvanto partners with hospitals, health systems, pharmaceutical and medical device companies, and healthcare payers to improve patient flow, optimize resource allocation, strengthen supply chain resilience, and build the clinical and operational data infrastructure required for evidence-based decision-making.",
      ],
      expertise: [
        "Clinical Process Redesign & Care Pathway Optimization",
        "Healthcare Resource Allocation, Capacity Planning & Workforce Optimization",
        "Medical Supply Chain Resilience, Inventory Intelligence & Asset Tracking",
        "Patient Outcome Analytics, Population Health Insights & Performance Measurement",
      ],
      closingParagraph:
        "We combine operational excellence methodologies with data science and AI-enabled tools to help healthcare organizations deliver higher quality care more efficiently and sustainably.",
    },
    image: "/images/page-hero-healthcare.jpg",
    heroImages: [
      "/images/page-hero-healthcare.jpg",
      "/images/page-hero-team.jpg",
      "/images/page-hero-technology.jpg",
      "/images/page-hero-strategy.jpg",
    ],
    industryPerspective: [
      "Healthcare providers and life sciences organizations must improve access, quality, and affordability while working within complex operating and regulatory environments. Demand patterns, workforce capacity, supply availability, and information systems all influence the ability to deliver reliable services.",
      "We help teams understand where performance is constrained and identify changes that can be delivered responsibly. Our work connects operational analysis and data strategy with practical implementation, keeping patient outcomes, staff needs, and governance in view."
    ],
    focusAreas: [
      {
        title: "Clinical Process Redesign",
        description: "Map patient and staff workflows to identify delays, unnecessary handoffs, and opportunities to improve consistency without losing sight of clinical requirements."
      },
      {
        title: "Healthcare Resource Allocation",
        description: "Use demand and capacity analysis to support decisions about staffing, facilities, and equipment, helping leaders direct limited resources toward priority needs."
      },
      {
        title: "Supply Chain & Asset Tracking",
        description: "Review procurement, inventory, and distribution processes to improve visibility, anticipate supply constraints, and support more resilient operations."
      },
      {
        title: "Patient Outcome Analytics",
        description: "Develop measurement approaches that help teams connect service activity with patient outcomes, identify meaningful patterns, and make evidence-informed improvements."
      }
    ]
  },
  {
    id: "technology",
    slug: "technology",
    name: "Technology & Telecom",
    tagline: "SaaS Platforms, Telecom Networks & Digital Infrastructure",
    description: "Accelerating ARR expansion, optimizing subscriber retention, modernizing network operations, and structuring strategic technology partnerships.",
    listingContent: {
      subheading: "Technology Strategy, Growth & Platform Transformation",
      paragraphs: [
        "Technology companies and telecommunications operators must continuously balance rapid growth ambitions with the need for operational efficiency, customer retention, network reliability, and intelligent monetization. In highly competitive digital markets, the ability to predict customer behaviour, optimize pricing, scale platforms effectively, and modernize infrastructure has become a critical source of competitive advantage.",
        "Arvanto works with SaaS businesses, telecom operators, and digital infrastructure providers to accelerate ARR growth, reduce churn, strengthen unit economics, and design the technology and commercial models required for sustainable scale.",
      ],
      expertise: [
        "Customer Churn Prediction, Lifetime Value Modelling & Retention Strategy",
        "Enterprise SaaS Pricing Architecture & Monetization Strategy",
        "Network Operations Optimization & Infrastructure AI Applications",
        "Digital Platform Scaling, Ecosystem Design & Partnership Strategy",
      ],
      closingParagraph:
        "Our technology and telecom practice blends growth strategy, product and pricing expertise, advanced analytics, and large-scale transformation capabilities to help clients build more resilient and profitable digital businesses.",
    },
    image: "/images/page-hero-technology.jpg",
    heroImages: [
      "/images/page-hero-technology.jpg",
      "/images/page-hero-city.jpg",
      "/images/page-hero-team.jpg",
      "/images/page-hero-finance.jpg",
    ],
    industryPerspective: [
      "Technology and telecom businesses operate in fast-moving markets where product economics, customer expectations, infrastructure investment, and competitive positioning shift quickly. Sustainable growth depends on making connected choices about where to compete, what to build, and how to scale delivery.",
      "Arvanto supports those choices with market and performance analysis, operating model design, and technology transformation planning. We help teams turn customer and operational data into clearer priorities while keeping execution grounded in commercial objectives."
    ],
    focusAreas: [
      {
        title: "Churn Prediction & Customer LTV",
        description: "Analyze customer behavior and service patterns to understand retention drivers, segment opportunities, and focus engagement on sustainable customer value."
      },
      {
        title: "Enterprise SaaS Pricing Strategy",
        description: "Evaluate packaging, willingness-to-pay signals, and unit economics to shape pricing choices that support adoption, retention, and profitable growth."
      },
      {
        title: "Network Infrastructure AI",
        description: "Identify appropriate opportunities for analytics and AI across network planning and operations, with attention to data readiness, governance, and adoption."
      },
      {
        title: "Digital Platform Scale",
        description: "Plan the capabilities, operating processes, and investment priorities needed to grow digital platforms while maintaining a consistent customer experience."
      }
    ]
  },
  {
    id: "energy-infrastructure",
    slug: "energy-infrastructure",
    name: "Energy & Infrastructure",
    tagline: "Utilities, Renewable Energy, Logistics & Heavy Industry",
    description: "Balancing capital intensive assets with grid modernizations, operational efficiency, renewable energy transitions, and ESG risk compliance.",
    listingContent: {
      subheading: "Energy Transition, Asset Optimization & Infrastructure Advisory",
      paragraphs: [
        "Energy and infrastructure organizations manage highly capital-intensive asset bases while simultaneously navigating the energy transition, regulatory evolution, climate risk, and the need for greater operational reliability. Success requires sophisticated approaches to capital allocation, predictive maintenance, supply chain resilience, and the integration of renewable and conventional energy systems.",
        "Arvanto supports utilities, independent power producers, renewable energy developers, logistics operators, and heavy industrial companies with strategic and operational advisory that improves asset performance, de-risks major investments, and accelerates the shift toward more sustainable operating models.",
      ],
      expertise: [
        "Capital Asset Performance Optimization & Portfolio Strategy",
        "Predictive Maintenance, Reliability Engineering & Operational Excellence",
        "Renewable Energy Transition Strategy, Feasibility Analysis & Investment Structuring",
        "Supply Chain, Logistics Optimization & Critical Infrastructure Resilience",
      ],
      closingParagraph:
        "We combine deep technical and commercial understanding of energy systems with advanced analytics and transformation expertise to help clients make better capital and operational decisions in a rapidly changing sector.",
    },
    image: "/images/page-hero-energy.jpg",
    heroImages: [
      "/images/page-hero-energy.jpg",
      "/images/page-hero-city.jpg",
      "/images/page-hero-technology.jpg",
      "/images/page-hero-finance.jpg",
    ],
    industryPerspective: [
      "Energy and infrastructure organizations make long-horizon decisions in capital-intensive environments. Asset reliability, policy and market changes, financing constraints, and the transition to lower-carbon systems can all affect project viability and long-term performance.",
      "We help leaders compare options, assess uncertainty, and prioritize investment and operational improvements. Our approach brings financial and scenario analysis together with execution planning, so strategic ambitions can be translated into measurable initiatives."
    ],
    focusAreas: [
      {
        title: "Capital Asset Optimization",
        description: "Assess asset performance and investment choices to support decisions on maintenance, utilization, replacement, and capital allocation across portfolios."
      },
      {
        title: "Predictive Equipment Maintenance",
        description: "Explore how condition and operational data can inform maintenance planning, reduce avoidable disruption, and improve the basis for asset lifecycle decisions."
      },
      {
        title: "Renewable Transition Feasibility",
        description: "Evaluate transition pathways using commercial, operational, and scenario considerations to understand feasibility, dependencies, and implementation priorities."
      },
      {
        title: "Supply Chain & Logistics",
        description: "Identify bottlenecks and resilience gaps across sourcing, transport, and distribution, then prioritize improvements to cost, visibility, and continuity."
      }
    ]
  },
  {
    id: "consumer-retail",
    slug: "consumer-retail",
    name: "Consumer & Retail",
    tagline: "FMCG, E-Commerce, Multi-unit Retail & Logistics",
    description: "Aligning omni-channel fulfillment, dynamic pricing intelligence, demand forecasting, and inventory optimization across East Africa and beyond.",
    listingContent: {
      subheading: "Consumer, Retail & Omnichannel Strategy Consulting",
      paragraphs: [
        "Consumer goods companies and retailers face intense pressure to respond faster to shifting demand patterns, optimize inventory and pricing in real time, deliver seamless omnichannel experiences, and improve profitability in an environment of rising costs and heightened competition. Success increasingly depends on the intelligent use of data across demand sensing, pricing, assortment, and fulfillment.",
        "Arvanto partners with FMCG manufacturers, e-commerce platforms, multi-unit retail groups, and distribution businesses to build more responsive, data-driven, and profitable commercial and operating models—particularly across East African and other high-growth markets.",
      ],
      expertise: [
        "Demand Forecasting, Intelligent Replenishment & Inventory Optimization",
        "Dynamic Pricing Strategy, Promotion Effectiveness & Margin Management",
        "Customer Cohort Analysis, Loyalty Programmes & Retention Intelligence",
        "Retail Network Design, Store Footprint Optimization & Omnichannel Fulfillment",
      ],
      closingParagraph:
        "Our consumer and retail practice integrates commercial strategy, advanced analytics, supply chain expertise, and transformation capabilities to help clients grow revenue while improving operational efficiency and customer experience.",
    },
    image: "/images/page-hero-retail.jpg",
    heroImages: [
      "/images/page-hero-retail.jpg",
      "/images/page-hero-finance.jpg",
      "/images/page-hero-team.jpg",
      "/images/page-hero-city.jpg",
    ],
    industryPerspective: [
      "Consumer and retail businesses respond to changing preferences, price sensitivity, channel shifts, and uneven demand. These pressures make it difficult to balance availability and customer experience against inventory costs, margin targets, and complex fulfillment operations.",
      "We help organizations use market and operational evidence to make more coordinated commercial decisions. From demand planning to channel strategy, we focus on practical changes that improve visibility and connect customer priorities to how the business operates."
    ],
    focusAreas: [
      {
        title: "Demand Forecasting & Replenishment",
        description: "Improve the planning process by bringing sales patterns, seasonality, and supply constraints into clearer forecasts and replenishment decisions."
      },
      {
        title: "Dynamic Pricing Intelligence",
        description: "Combine market, product, and customer signals to assess pricing opportunities and understand the potential trade-offs between volume, margin, and loyalty."
      },
      {
        title: "Customer Cohort Retention",
        description: "Explore how customer groups behave over time to identify retention patterns, evaluate engagement opportunities, and guide more relevant customer strategies."
      },
      {
        title: "Retail Footprint Optimization",
        description: "Assess store and channel performance alongside location and operating costs to inform decisions on expansion, format, and network productivity."
      }
    ]
  },
  {
    id: "public-sector",
    slug: "public-sector",
    name: "Public Sector & Development",
    tagline: "Government Agencies, Development Financial Institutions & NGOs",
    description: "Enabling public policy execution, revenue collection optimization, infrastructure project evaluation, and national digital infrastructure transformation.",
    listingContent: {
      subheading: "Public Sector Transformation & Development Advisory",
      paragraphs: [
        "Public sector institutions and development organizations are under increasing pressure to deliver better services, strengthen revenue collection, evaluate and structure major infrastructure investments, and modernize national digital infrastructure—often under tight fiscal constraints and high public scrutiny. Effective solutions require rigorous economic analysis, practical implementation experience, and a deep understanding of institutional and political realities.",
        "Arvanto supports government agencies, development finance institutions, and international organizations with advisory services focused on policy execution, revenue integrity, infrastructure appraisal, and large-scale public service transformation.",
      ],
      expertise: [
        "Economic Impact Quantification, Policy Appraisal & Investment Analysis",
        "Revenue Digitization, Tax Administration Strengthening & Integrity Systems",
        "Infrastructure Project Appraisal, Structuring & Public-Private Partnership Advisory",
        "Public Service Design, Operational Excellence & Digital Government Transformation",
      ],
      closingParagraph:
        "We bring private-sector discipline, quantitative rigour, and implementation focus to complex public sector challenges, helping institutions deliver measurable improvements in service delivery, fiscal performance, and institutional capability.",
    },
    image: "/images/page-hero-city.jpg",
    heroImages: [
      "/images/page-hero-city.jpg",
      "/images/page-hero-strategy.jpg",
      "/images/page-hero-team.jpg",
      "/images/page-hero-finance.jpg",
    ],
    industryPerspective: [
      "Public institutions and development organizations work to deliver lasting outcomes amid competing needs, limited resources, and complex stakeholder environments. Strong policy intent must be matched by sound delivery models, reliable evidence, and transparent use of funds.",
      "Arvanto helps teams strengthen the link between strategy, investment, and implementation. We bring analytical and operational perspectives to program design, project evaluation, and institutional transformation, with an emphasis on clear priorities and measurable progress."
    ],
    focusAreas: [
      {
        title: "Economic Impact Quantification",
        description: "Define outcome measures and analytical approaches that help decision-makers understand the expected economic and social effects of policies and programs."
      },
      {
        title: "Revenue Digitization & Integrity",
        description: "Review revenue processes and digital opportunities to improve traceability, service accessibility, and the quality of information used for oversight."
      },
      {
        title: "Infrastructure Project Appraisal",
        description: "Compare project options, assumptions, risks, and delivery requirements to support more robust investment decisions and implementation planning."
      },
      {
        title: "Public Service Optimization",
        description: "Map service journeys and operating constraints to identify ways to improve responsiveness, reduce friction, and make better use of public resources."
      }
    ]
  },
  {
    id: "legal-professional-services",
    slug: "legal-professional-services",
    name: "Legal & Professional Services",
    tagline: "Law Firms, Legal Departments & Advisory Practices",
    description: "Modernizing legal operations, knowledge management, client experience, and data-led service delivery for law firms and in-house teams.",
    listingContent: {
      subheading: "Legal Operations, Knowledge Management & Professional Services Transformation",
      paragraphs: [
        "Law firms and in-house legal departments are under growing pressure to improve efficiency, enhance client experience, leverage knowledge more effectively, and responsibly adopt artificial intelligence and automation—while maintaining the highest standards of quality, confidentiality, and professional ethics. Competitive advantage increasingly depends on operational excellence and intelligent use of data and technology rather than pure technical legal expertise alone.",
        "Arvanto works with leading law firms, corporate legal departments, and professional service organizations to modernize legal operations, strengthen knowledge and matter management systems, improve client experience and business development, and design responsible AI and technology adoption strategies.",
      ],
      expertise: [
        "Legal Process Transformation & Legal Operations Optimization",
        "Knowledge Management, Matter Intelligence & Precedent Systems",
        "Client Experience Design, Pricing Strategy & Growth Initiatives",
        "Artificial Intelligence Adoption, Governance Frameworks & Technology Strategy for Legal Teams",
      ],
      closingParagraph:
        "Our professional services practice helps legal and advisory organizations build more efficient, client-centric, and future-ready operating models without compromising the quality and integrity of their work.",
    },
    image: "/images/page-hero-strategy.jpg",
    heroImages: [
      "/images/page-hero-strategy.jpg",
      "/images/page-hero-city.jpg",
      "/images/page-hero-team.jpg",
      "/images/page-hero-technology.jpg",
    ],
    industryPerspective: [
      "Legal and professional services organizations are adapting to changing client expectations, new technology, competitive pressure, and rising demands around information governance. Improving delivery is not simply a technology question: it involves how work is scoped, staffed, priced, managed, and reviewed.",
      "We work with firms and in-house teams to identify practical opportunities across operations, growth, and digital enablement. Our focus is on strengthening the foundations for consistent service and responsible innovation, while aligning change with the organization’s strategy and risk appetite."
    ],
    focusAreas: [
      {
        title: "Legal Process Transformation",
        description: "Map matter and support workflows to identify repetitive effort, unclear handoffs, and opportunities to improve consistency, capacity, and service delivery."
      },
      {
        title: "Knowledge & Matter Management",
        description: "Improve how teams organize and access matter, precedent, and operational knowledge, with clear attention to information quality, permissions, and governance."
      },
      {
        title: "Client Experience & Growth",
        description: "Use client feedback, service patterns, and commercial analysis to identify ways to strengthen relationships, clarify value, and support sustainable practice growth."
      },
      {
        title: "AI & Governance for Legal Teams",
        description: "Assess appropriate AI use cases and establish practical guardrails for confidentiality, oversight, quality review, and responsible adoption across legal work."
      }
    ]
  }
];
