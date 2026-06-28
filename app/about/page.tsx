import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn about Precision Steel Detailing Services — our team, values, and commitment to quality steel detailing and BIM.",
};

const values = [
  {
    title: "Precision",
    text: "Accurate detailing and coordinated models that fabricators and erectors can trust on site.",
  },
  {
    title: "Partnership",
    text: "We embed in your workflow, adopt your standards, and communicate clearly at every stage.",
  },
  {
    title: "Quality",
    text: "Structured QA checks, revision control, and attention to connection details that matter.",
  },
  {
    title: "Reliability",
    text: "Realistic schedules, proactive updates, and delivery you can plan fabrication around.",
  },
];

const team = [
  {
    initials: "JD",
    name: "John Doe",
    role: "Managing Director",
    bio: "15+ years in structural steel detailing and project delivery across mining and infrastructure sectors.",
  },
  {
    initials: "JS",
    name: "Jane Smith",
    role: "Lead BIM Manager",
    bio: "Specialist in Tekla and Revit coordination with a focus on clash-free model delivery.",
  },
  {
    initials: "MR",
    name: "Michael Roberts",
    role: "Senior Steel Detailer",
    bio: "Expert in connection detailing, CNC output, and fabrication-ready shop drawing packages.",
  },
  {
    initials: "SP",
    name: "Sarah Patel",
    role: "Document Control Lead",
    bio: "Manages transmittals, revision registers, and QA documentation for multi-discipline projects.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="Built on precision, driven by partnership"
        description="Precision Steel Detailing Services is a dedicated steel detailing and construction modeling team focused on quality, clarity, and dependable delivery."
      />

      <section className="section about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Our story</h2>
            <p>
              We started with a simple belief: great structures begin with great details. Today we
              support fabricators, engineers, and contractors with shop drawings, BIM models, and
              back-office support that keeps projects moving.
            </p>
            <p>
              We prioritize close client partnerships and unwavering quality in every deliverable.
              As a steel detailing and construction modeling firm, we listen first—then tailor
              solutions that reduce risk, improve coordination, and keep projects on schedule.
            </p>
            <p>
              From 3D BIM coordination to shop drawings and as-built models, we support mining,
              commercial, infrastructure, and institutional builds. Our team brings deep sector
              experience and modern tooling to every engagement.
            </p>
          </div>
          <div className="about-visual">
            <div className="stat-card">
              <strong>15+</strong>
              <span>Years combined experience</span>
            </div>
            <div className="stat-card">
              <strong>200+</strong>
              <span>Projects delivered</span>
            </div>
            <div className="stat-card accent">
              <strong>On time</strong>
              <span>On budget, every time</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What drives us</span>
            <h2>Our values</h2>
            <p>The principles behind every model, drawing, and revision we issue.</p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <article key={v.title} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-us">
        <div className="container why-grid">
          <div className="why-content">
            <span className="section-label">Why choose us</span>
            <h2>Your detailing partner, not just a vendor</h2>
            <p>
              Whether you need a full detailing package or extra capacity for a busy tender period,
              we scale to fit. Core offerings include model-based estimating, dedicated resource
              support, document control, and construction visualization.
            </p>
            <ul className="why-list">
              <li>Experienced detailers across Tekla, Revit, and Advance Steel</li>
              <li>Flexible engagement — project-based or ongoing support</li>
              <li>Clear transmittals and revision tracking on every issue</li>
              <li>Sector knowledge in mining, infrastructure, and commercial work</li>
            </ul>
            <Link href="/services" className="btn">
              Explore our services
            </Link>
          </div>
          <div
            className="why-image"
            style={
              {
                "--img":
                  "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80')",
              } as React.CSSProperties
            }
          />
        </div>
      </section>

      <section className="section team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our team</span>
            <h2>People behind the details</h2>
            <p>Dummy team profiles — replace with your real staff names and photos.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section content-block">
        <div className="container prose">
          <h2>Mission &amp; vision</h2>
          <p>
            <strong>Mission:</strong> To deliver precise, reliable steel detailing and BIM services
            that help our clients build with confidence.
          </p>
          <p>
            <strong>Vision:</strong> To be the trusted detailing partner of choice for fabricators
            and contractors across Australia and beyond.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to work together?"
        description="Tell us about your next project and we'll show you how we can support your team."
        buttonText="Get In Touch"
      />
    </>
  );
}
