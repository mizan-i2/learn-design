import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import HeroSlider from "@/components/HeroSlider";

const exploreCards = [
  {
    href: "/about",
    num: "01",
    title: "Who We Are",
    description: "Our story, values, team, and why clients choose to work with us.",
    link: "Read more →",
  },
  {
    href: "/projects",
    num: "02",
    title: "Projects",
    description: "Sectors we serve and sample project case studies across industries.",
    link: "View projects →",
  },
  {
    href: "/services",
    num: "03",
    title: "Services",
    description: "Steel detailing, BIM, estimating, resource support, and more.",
    link: "View services →",
  },
  {
    href: "/contact",
    num: "04",
    title: "Contact",
    description: "Request a quote, schedule a call, or send us your project brief.",
    link: "Get in touch →",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section home-intro">
        <div className="container home-intro-inner">
          <p>
            We are a steel detailing and BIM team helping fabricators, engineers, and contractors
            deliver accurate shop drawings and coordinated models—on time and to your standards.
          </p>
        </div>
      </section>

      <section className="section home-pages">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Explore</span>
            <h2>Find what you need</h2>
            <p>Each section of our site has its own page with full details.</p>
          </div>
          <div className="page-cards">
            {exploreCards.map((card) => (
              <Link key={card.href} href={card.href} className="page-card">
                <span className="page-card-num">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="page-card-link">{card.link}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="It's in the detail"
        description="Bridges to bus stations. Hospitals to high-rises. Mines to materials handling—or anything in between. Let Precision Steel Detailing Services handle the details."
        buttonText="Start a Conversation"
      />
    </>
  );
}
