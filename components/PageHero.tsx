type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  compact?: boolean;
};

export default function PageHero({ label, title, description, compact }: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " page-hero-compact" : ""}`}>
      <div className="container">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
