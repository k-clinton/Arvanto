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
  numberedFocusAreas?: boolean;
  closingPerspective?: string[];
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
      "Financial institutions today operate in one of the most demanding environments in the global economy. Rising regulatory expectations, intensifying competition from fintechs and embedded finance players, legacy technology constraints, and the need for sharper risk and capital management have created a new standard of performance. Boards and executive teams can no longer rely on incremental improvements. They require integrated strategy, advanced analytics, artificial intelligence, and disciplined transformation execution.",
      "Arvanto partners with banks, insurance companies, capital markets institutions, and asset managers to address these challenges holistically. We combine deep financial services expertise with quantitative modelling, technology strategy, and large-scale change capabilities. Our work spans credit risk and pricing intelligence, core banking and platform modernization, actuarial and capital optimization, real-time fraud and financial crime detection, and the design of digital and embedded finance propositions that create sustainable competitive advantage.",
      "We understand the unique pressures facing financial institutions across Africa, the Middle East, and international markets — balancing growth ambitions with capital discipline, regulatory compliance, and operational resilience."
    ],
    numberedFocusAreas: true,
    focusAreas: [
      {
        title: "Credit Risk, Pricing & Portfolio Intelligence",
        description: "Use portfolio, customer, and market data to understand risk-adjusted returns, refine pricing decisions, and identify changes in credit quality earlier."
      },
      {
        title: "Core Banking & FinTech Platform Transformation",
        description: "Assess modernization options, sequence platform and process changes, and develop a practical transition plan that accounts for customers, controls, and operational continuity."
      },
      {
        title: "Actuarial Modelling, Solvency & Capital Optimization",
        description: "Strengthen forecasting and capital planning with scenario analysis, actuarial models, and a clearer view of how assumptions affect resilience and strategic choices."
      },
      {
        title: "Fraud Detection, Anomaly Engines & Financial Crime Prevention",
        description: "Improve how teams identify unusual activity by shaping data-led detection approaches, prioritizing investigation signals, and embedding insights into day-to-day operations."
      }
    ],
    closingPerspective: [
      "Whether the priority is strengthening risk frameworks, modernising core systems, improving customer economics, or building AI-enabled decision engines, we deliver practical, board-ready solutions that move from insight to measurable impact."
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
      "Healthcare and life sciences organisations face a unique combination of clinical, operational, regulatory and financial complexity. Rising patient demand, constrained resources, fragmented information systems, supply chain vulnerabilities, and the growing expectation for evidence-based care require leaders to think differently about how care is designed, delivered and measured.",
      "Arvanto works with hospitals, health systems, pharmaceutical and medical technology companies, and healthcare payers to strengthen both clinical and operational performance. We help clients redesign care pathways, optimise resource and capacity allocation, build resilient medical supply chains, and develop the data and analytics infrastructure required for better decision-making at every level of the organisation.",
      "In emerging and high-growth markets, these challenges are often amplified by infrastructure constraints, workforce shortages, and the need to expand access while controlling costs. Arvanto brings experience working in these environments, helping healthcare leaders design solutions that are both ambitious and realistic."
    ],
    numberedFocusAreas: true,
    focusAreas: [
      {
        title: "Clinical Process Redesign & Care Pathway Optimisation",
        description: "Map patient and staff workflows to identify delays, unnecessary handoffs, and opportunities to improve consistency without losing sight of clinical requirements."
      },
      {
        title: "Healthcare Resource Allocation & Capacity Planning",
        description: "Use demand and capacity analysis to support decisions about staffing, facilities, and equipment, helping leaders direct limited resources toward priority needs."
      },
      {
        title: "Medical Supply Chain Resilience & Asset Intelligence",
        description: "Review procurement, inventory, and distribution processes to improve visibility, anticipate supply constraints, and support more resilient operations."
      },
      {
        title: "Patient Outcome Analytics & Population Health Insights",
        description: "Develop measurement approaches that help teams connect service activity with patient outcomes, identify meaningful patterns, and make evidence-informed improvements."
      }
    ],
    closingPerspective: [
      "Whether the priority is operational turnaround, digital health strategy, supply chain resilience, or building analytics capability, we partner with clients to move from diagnosis to sustained execution."
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
      "Technology and telecommunications companies operate in markets defined by rapid innovation, intense competition, and the constant need to balance growth with profitability and operational reliability. Customer acquisition costs are rising, churn remains a persistent challenge, pricing power is under pressure, and the technical and organisational complexity of scaling platforms continues to increase.",
      "Arvanto partners with SaaS businesses, telecom operators, digital platforms, and infrastructure providers to address these challenges with a combination of growth strategy, advanced analytics, product and pricing expertise, and large-scale transformation capability. We help clients improve customer lifetime value, reduce churn through predictive intelligence, design more effective monetisation models, optimise network and platform operations, and build the organisational and technical foundations required for sustainable scale.",
      "In high-growth markets across Africa and the Middle East, technology and telecom companies face additional opportunities and constraints — expanding digital inclusion, managing infrastructure investment, navigating regulatory environments, and competing with both global and local players."
    ],
    numberedFocusAreas: true,
    focusAreas: [
      {
        title: "Churn Prediction, Customer Lifetime Value & Retention",
        description: "Analyze customer behavior and service patterns to understand retention drivers, segment opportunities, and focus engagement on sustainable customer value."
      },
      {
        title: "Enterprise SaaS Pricing & Monetisation Strategy",
        description: "Evaluate packaging, willingness-to-pay signals, and unit economics to shape pricing choices that support adoption, retention, and profitable growth."
      },
      {
        title: "Network Operations Optimisation & Infrastructure AI",
        description: "Identify appropriate opportunities for analytics and AI across network planning and operations, with attention to data readiness, governance, and adoption."
      },
      {
        title: "Digital Platform Scaling & Ecosystem Design",
        description: "Plan the capabilities, operating processes, and investment priorities needed to grow digital platforms while maintaining a consistent customer experience."
      }
    ],
    closingPerspective: [
      "The goal is always the same: clearer growth pathways, stronger unit economics, and more resilient operating models."
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
      "Energy and infrastructure organisations manage some of the most capital-intensive and operationally complex asset bases in the economy. They must simultaneously deliver reliable service, optimise existing assets, invest in new capacity, navigate regulatory and climate-related pressures, and adapt to the structural shift toward lower-carbon energy systems.",
      "Arvanto works with utilities, independent power producers, renewable energy companies, logistics and transport operators, and heavy industrial businesses to strengthen both strategic and operational performance. We help clients improve the productivity of existing assets, design and evaluate renewable and conventional energy investments, build more resilient supply chains, and embed climate and ESG considerations into decision-making processes.",
      "In African and Middle Eastern markets, energy and infrastructure development remains a critical national priority. Arvanto supports both public and private sector clients in these regions with practical advisory that balances ambition with commercial and operational realism."
    ],
    numberedFocusAreas: true,
    focusAreas: [
      {
        title: "Capital Asset Performance Optimisation & Portfolio Strategy",
        description: "Assess asset performance and investment choices to support decisions on maintenance, utilization, replacement, and capital allocation across portfolios."
      },
      {
        title: "Predictive Maintenance, Reliability Engineering & Operational Excellence",
        description: "Explore how condition and operational data can inform maintenance planning, reduce avoidable disruption, and improve the basis for asset lifecycle decisions."
      },
      {
        title: "Renewable Energy Transition Strategy & Investment Structuring",
        description: "Evaluate transition pathways using commercial, operational, and scenario considerations to understand feasibility, dependencies, and implementation priorities."
      },
      {
        title: "Supply Chain, Logistics Optimisation & Infrastructure Resilience",
        description: "Identify bottlenecks and resilience gaps across sourcing, transport, and distribution, then prioritize improvements to cost, visibility, and continuity."
      }
    ],
    closingPerspective: [
      "Whether the focus is improving the performance of existing generation or distribution assets, structuring new renewable projects, or strengthening critical logistics networks, we help leaders make better decisions and execute them more effectively."
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
      "Consumer goods and retail organisations face relentless pressure on both the demand and supply sides of their businesses. Customer expectations continue to rise, competition is intense, input costs are volatile, and the complexity of managing omnichannel operations has increased dramatically. Success increasingly depends on the ability to sense demand accurately, price dynamically, optimise inventory and assortment, and deliver seamless experiences across physical and digital channels.",
      "Arvanto partners with FMCG manufacturers, multi-unit retailers, e-commerce platforms, and distribution businesses to build more intelligent, responsive and profitable commercial and operating models. We help clients strengthen demand forecasting and replenishment processes, design more effective pricing and promotion strategies, improve customer cohort and loyalty performance, and optimise retail networks and fulfilment systems.",
      "Particular attention is given to the realities of operating in high-growth African and Middle Eastern markets, where infrastructure constraints, informal retail channels, and rapid digital adoption create both challenges and distinctive opportunities."
    ],
    numberedFocusAreas: true,
    focusAreas: [
      {
        title: "Demand Forecasting, Intelligent Replenishment & Inventory Optimisation",
        description: "Improve the planning process by bringing sales patterns, seasonality, and supply constraints into clearer forecasts and replenishment decisions."
      },
      {
        title: "Dynamic Pricing Strategy, Promotion Effectiveness & Margin Management",
        description: "Combine market, product, and customer signals to assess pricing opportunities and understand the potential trade-offs between volume, margin, and loyalty."
      },
      {
        title: "Customer Cohort Analysis, Loyalty Programmes & Retention Intelligence",
        description: "Explore how customer groups behave over time to identify retention patterns, evaluate engagement opportunities, and guide more relevant customer strategies."
      },
      {
        title: "Retail Network Design, Store Footprint Optimisation & Omnichannel Fulfilment",
        description: "Assess store and channel performance alongside location and operating costs to inform decisions on expansion, format, and network productivity."
      }
    ],
    closingPerspective: [
      "The result is a more coherent commercial and operational system — one that responds faster to market signals, wastes less, serves customers better, and protects margins in an increasingly competitive environment."
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
      "Public sector institutions and development organisations operate under intense scrutiny and significant constraint. They are expected to deliver better services, strengthen domestic revenue mobilisation, evaluate and structure major infrastructure investments, and modernise digital and institutional capabilities — often with limited resources and complex political and institutional realities.",
      "Arvanto works with government ministries and agencies, development finance institutions, and international organisations on initiatives that improve policy execution, revenue integrity, infrastructure appraisal, and public service performance. We bring private-sector analytical discipline and transformation experience into public sector contexts, helping clients design solutions that are both technically sound and institutionally feasible.",
      "In African and other emerging markets, the quality of public institutions and infrastructure remains a critical determinant of economic and social progress. Arvanto supports clients in these environments with advisory that combines international good practice with deep contextual understanding."
    ],
    numberedFocusAreas: true,
    focusAreas: [
      {
        title: "Economic Impact Quantification, Policy Appraisal & Investment Analysis",
        description: "Define outcome measures and analytical approaches that help decision-makers understand the expected economic and social effects of policies and programs."
      },
      {
        title: "Revenue Digitization, Tax Administration Strengthening & Integrity Systems",
        description: "Review revenue processes and digital opportunities to improve traceability, service accessibility, and the quality of information used for oversight."
      },
      {
        title: "Infrastructure Project Appraisal, Structuring & Public-Private Partnership Advisory",
        description: "Compare project options, assumptions, risks, and delivery requirements to support more robust investment decisions and implementation planning."
      },
      {
        title: "Public Service Design, Operational Excellence & Digital Government Transformation",
        description: "Map service journeys and operating constraints to identify ways to improve responsiveness, reduce friction, and make better use of public resources."
      }
    ],
    closingPerspective: [
      "We place particular emphasis on implementation realism — ensuring that strategies and designs can actually be executed within the institutional, capacity and political constraints that public sector leaders face."
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
    image: "/images/legal.jpeg",
    heroImages: [
      "/images/page-hero-strategy.jpg",
      "/images/page-hero-city.jpg",
      "/images/page-hero-team.jpg",
      "/images/page-hero-technology.jpg",
    ],
    industryPerspective: [
      "Law firms and corporate legal teams are under increasing pressure to deliver more strategic value while managing rising client expectations, regulatory complexity, cost pressures and the rapid emergence of new technologies. Clients no longer want purely reactive legal support. They expect commercial insight, efficiency, predictability, strong governance, and the intelligent use of data and technology — without any compromise on quality or professional standards.",
      "This shift is particularly visible across African markets, where legal teams regularly advise on complex infrastructure and energy projects, cross-border corporate transactions, banking and financial services matters, data protection and technology arrangements, and sophisticated dispute resolution. At the same time, these organisations themselves must modernise how they operate: how they manage knowledge, price and deliver services, protect data, govern the use of artificial intelligence, and create distinctive client experiences.",
      "Arvanto partners with law firms, in-house legal departments and professional services organisations to address these dual challenges. We help legal leaders redesign operating models, strengthen knowledge and matter management systems, improve pricing and client experience, build robust data protection and technology governance frameworks, and adopt AI in a controlled, ethical and value-creating way."
    ],
    numberedFocusAreas: true,
    focusAreas: [
      {
        title: "Legal Process & Workflow Transformation",
        description: "Map matter and support workflows to identify repetitive effort, unclear handoffs, and opportunities to improve consistency, capacity, and service delivery."
      },
      {
        title: "Knowledge, Matter & Precedent Management",
        description: "Improve how teams organize and access matter, precedent, and operational knowledge, with clear attention to information quality, permissions, and governance."
      },
      {
        title: "Client Experience, Pricing & Growth",
        description: "Use client feedback, service patterns, and commercial analysis to identify ways to strengthen relationships, clarify value, and support sustainable practice growth."
      },
      {
        title: "Data Protection, AI & Technology Governance",
        description: "Assess appropriate AI use cases and establish practical guardrails for confidentiality, oversight, quality review, and responsible adoption across legal work."
      }
    ],
    closingPerspective: [
      "Whether supporting a growing firm seeking to professionalise its operations, a larger practice looking to leverage knowledge systems and AI at scale, or an in-house team aiming to become a more strategic business partner, Arvanto brings structured transformation capability grounded in the realities of legal service delivery.",
      "The legal organisations that will thrive in the coming years are those that combine outstanding technical expertise with superior operational capability, knowledge leverage and responsible technology adoption."
    ]
  }
];
