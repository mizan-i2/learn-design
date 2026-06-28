import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { pageBanners } from "@/lib/data/pageBanners";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Precision Steel Detailing Services — request a quote, schedule a call, or discuss your steel detailing project.",
};

const offices = [
  {
    name: "Head Office",
    address: ["123 Steel Street", "Melbourne VIC 3000", "Australia"],
    phone: "+61390000000",
    display: "+61 3 9000 0000",
  },
  {
    name: "Regional Office",
    address: ["45 Industrial Drive", "Brisbane QLD 4000", "Australia"],
    phone: "+61730000000",
    display: "+61 7 3000 0000",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk about your project"
        description="Share your scope, timeline, and standards. We respond within one business day."
        image={pageBanners.contact}
      />

      <section className="section contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>
              Whether you need a full detailing package, BIM support, or extra team capacity—we&apos;re
              here to help.
            </p>
            <ul className="contact-details">
              <li>
                <strong>Email</strong>
                <a href="mailto:info@psdbim.com">info@psdbim.com</a>
              </li>
              <li>
                <strong>Phone</strong>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <strong>Location</strong>
                <span>Your City, Country</span>
              </li>
              <li>
                <strong>Hours</strong>
                <span>Mon – Fri, 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
            <div className="contact-extras">
              <h3>What to include</h3>
              <ul className="why-list">
                <li>Project type and approximate tonnage</li>
                <li>Your detailing or BIM standards</li>
                <li>Target start date and delivery milestones</li>
                <li>Preferred software (Tekla, Revit, etc.)</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section offices">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Locations</span>
            <h2>Our offices</h2>
            <p>Dummy office addresses — replace with your real locations.</p>
          </div>
          <div className="offices-grid">
            {offices.map((office) => (
              <article key={office.name} className="office-card">
                <h3>{office.name}</h3>
                <p>
                  {office.address.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <a href={`tel:${office.phone}`}>{office.display}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-map">
        <div className="container">
          <p className="map-placeholder">
            Map placeholder — add Google Maps embed or your office address when ready.
          </p>
        </div>
      </section>
    </>
  );
}
