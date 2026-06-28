import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
};

export default function CtaBanner({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="section cta-banner">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link href={buttonHref} className="btn btn-light">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
