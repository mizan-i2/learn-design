import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Steel detailing, BIM modeling, estimating, and construction support services from Precision Steel Detailing Services.",
};

const services = [
  {
    num: "01",
    title: "Steel Detailing",
    description:
      "Complete shop drawing packages, connection details, and CNC-ready files for fabricators and erectors.",
    items: [
      "Shop & erection drawings",
      "Connection design support",
      "Anchor bolt & embed plans",
      "CNC / DSTV export",
    ],
  },
  {
    num: "02",
    title: "3D BIM Modeling",
    description:
      "Intelligent structural models built for coordination, fabrication, and downstream facility management.",
    items: ["Tekla & Revit structures", "Clash detection support", "LOD-specific deliverables", "As-built model updates"],
  },
  {
    num: "03",
    title: "Model Estimating",
    description:
      "Accurate quantity take-offs extracted directly from coordinated models to support tendering and procurement.",
    items: ["Weight & material summaries", "Member schedules", "Revision-based updates", "Bid support packages"],
  },
  {
    num: "04",
    title: "Resource Leasing",
    description:
      "Experienced detailers and modelers embedded in your team when workload peaks or deadlines tighten.",
    items: ["Flexible team scaling", "Your tools & standards", "Remote collaboration", "Short or long-term engagement"],
  },
  {
    num: "05",
    title: "Document Control",
    description:
      "Organized revision management so every stakeholder works from the latest approved information.",
    items: ["Transmittal registers", "Revision tracking", "RFI & RFI log support", "Drawing register maintenance"],
  },
  {
    num: "06",
    title: "Construction Animation",
    description:
      "Visual sequencing and 4D presentations that help teams plan lifts, logistics, and stakeholder buy-in.",
    items: ["Erection sequence videos", "4D BIM scheduling", "Site logistics visualization", "Client & tender presentations"],
  },
];

const processSteps = [
  {
    num: "1",
    title: "Kick-off & Standards",
    text: "We review your drawings, fabrication standards, and delivery format before modeling begins.",
  },
  {
    num: "2",
    title: "Model & Detail",
    text: "Our team builds coordinated models and produces shop drawings aligned to your checklist.",
  },
  {
    num: "3",
    title: "Review & Revise",
    text: "Structured review cycles with marked-up comments, tracked revisions, and fast turnaround.",
  },
  {
    num: "4",
    title: "Issue & Support",
    text: "Final issue packages plus ongoing support through fabrication and erection queries.",
  },
];

const faqs = [
  {
    q: "What software do you use?",
    a: "We primarily work in Tekla Structures, Autodesk Revit, Advance Steel, AutoCAD, and Navisworks. We can adapt to your preferred platform and standards.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Turnaround depends on project size and complexity. Small packages may be delivered in 1–2 weeks; larger industrial projects are scheduled in agreed milestones.",
  },
  {
    q: "Do you work with our fabrication standards?",
    a: "Yes. We adopt your connection details, naming conventions, title blocks, and QA checklists as part of every engagement.",
  },
  {
    q: "Can you provide resources on a monthly basis?",
    a: "Yes. Our resource leasing service provides dedicated detailers or modelers embedded in your team for ongoing or peak workload support.",
  },
];

const tools = [
  "Tekla Structures",
  "Autodesk Revit",
  "Advance Steel",
  "AutoCAD",
  "Navisworks",
  "Bluebeam Revu",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        description="End-to-end steel detailing and construction modeling support—delivered to your standards, on schedule, and with clear communication at every revision."
      />

      <section className="section services">
        <div className="container">
          <div className="services-grid services-grid-expanded">
            {services.map((service) => (
              <article key={service.num} className="service-item service-item-expanded">
                <div className="service-icon">{service.num}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2>Our Process</h2>
            <p>A clear, repeatable workflow that keeps quality high and surprises low.</p>
          </div>
          <ol className="process-steps">
            {processSteps.map((step) => (
              <li key={step.num} className="process-step">
                <span className="process-num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tools">
        <div className="container">
          <p className="tools-label">Software &amp; Platforms We Work With</p>
          <div className="tools-grid">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Common questions</h2>
            <p>Dummy answers — update with your real policies and turnaround times.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need detailing support?"
        description="Tell us about your project scope and we'll recommend the right service mix for your team."
        buttonText="Request a Quote"
      />
    </>
  );
}
