type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  compact?: boolean;
};

export default function PageHero({ label, title, description, image, compact }: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero-banner${compact ? " page-hero-compact" : ""}`}
      style={{ "--banner-img": `url('${image}')` } as React.CSSProperties}
    >
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="container page-hero-content">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
