import Link from "next/link";

const exploreBlocks = [
  {
    href: "/about",
    num: "01",
    title: "Who We Are",
    description: "Our story, values, team, and why clients choose to work with us.",
    link: "Read more",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
  },
  {
    href: "/projects",
    num: "02",
    title: "Projects",
    description: "Sectors we serve and sample project case studies across industries.",
    link: "View projects",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
  },
  {
    href: "/services",
    num: "03",
    title: "Services",
    description: "Steel detailing, BIM, estimating, resource support, and more.",
    link: "View services",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=80",
  },
  {
    href: "/contact",
    num: "04",
    title: "Contact",
    description: "Request a quote, schedule a call, or send us your project brief.",
    link: "Get in touch",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
  },
];

export default function ExploreBlocks() {
  return (
    <section className="section home-explore">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Explore</span>
          <h2>Find what you need</h2>
          <p>Each section of our site has its own page with full details.</p>
        </div>
        <div className="explore-grid">
          {exploreBlocks.map((block) => (
            <Link
              key={block.href}
              href={block.href}
              className="explore-block"
              style={{ "--block-img": `url('${block.image}')` } as React.CSSProperties}
            >
              <div className="explore-block-bg" aria-hidden="true" />
              <div className="explore-block-content">
                <span className="explore-block-num">{block.num}</span>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
                <span className="explore-block-link">
                  {block.link} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
