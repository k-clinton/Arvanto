export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand the Business & Context",
    description: "Immerse into enterprise realities, organizational structures, data ecosystems, and competitive market dynamics to establish baseline truth.",
    keyOutputs: [
      "Diagnostic Mapping & Stakeholder Interviews",
      "Data Ecosystem & Infrastructure Audit",
      "Competitive Landscape Benchmark"
    ]
  },
  {
    step: "02",
    title: "Diagnose",
    subtitle: "Identify Problems & Growth Levers",
    description: "Isolate high-friction operational bottlenecks, structural inefficiencies, capital misallocations, and untapped value creation levers.",
    keyOutputs: [
      "Root Cause Failure Analysis",
      "Opportunity & Risk Inventory",
      "Strategic Gap Assessment"
    ]
  },
  {
    step: "03",
    title: "Quantify",
    subtitle: "Determine Economic & Financial Impact",
    description: "Apply rigorous quantitative, financial, and actuarial models to simulate scenarios and project net financial impact before capital commitment.",
    keyOutputs: [
      "Financial & Economic Valuation Model",
      "Scenario Stress-Testing Matrix",
      "Prioritized Value Roadmap"
    ]
  },
  {
    step: "04",
    title: "Transform",
    subtitle: "Implement Solutions & AI Engines",
    description: "Deploy multidisciplinary transformation pods to integrate AI agents, overhaul operating processes, and execute change management.",
    keyOutputs: [
      "Transformation Management Office (TMO)",
      "Custom AI & Data System Deployment",
      "Target Operating Model Implementation"
    ]
  },
  {
    step: "05",
    title: "Scale",
    subtitle: "Monitor, Optimize & Expand",
    description: "Embed continuous feedback loops, real-time KPI dashboards, and governance frameworks to guarantee permanent value retention and scale.",
    keyOutputs: [
      "Real-time Executive Dashboard",
      "Post-Implementation Performance Audit",
      "Continuous Optimization Playbook"
    ]
  }
];
