import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Image
              src="/images/psdbim-logo.png"
              alt="Precision Steel Detailing Services"
              className="logo-img logo-img-footer"
              width={200}
              height={44}
            />
          </Link>
          <p>Precision steel detailing &amp; construction modeling.</p>
        </div>
        <nav className="footer-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Facebook">
            Facebook
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {year} Precision Steel Detailing Services. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
