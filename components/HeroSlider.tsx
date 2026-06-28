"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
];

const DELAY = 5500;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, DELAY);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero hero-slider" aria-label="Homepage slider">
      <div className="hero-slides" aria-hidden="true">
        {SLIDES.map((img, i) => (
          <div
            key={img}
            className={`hero-slide${i === current ? " is-active" : ""}`}
            style={{ "--slide-img": `url('${img}')` } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Steel Detailers</p>
        <h1>Innovative. Focused. Collaborative.</h1>
        <div className="hero-actions">
          <Link href="/contact" className="btn">
            Download Our E-Brochure
          </Link>
        </div>
      </div>

      <button type="button" className="hero-arrow hero-arrow-prev" aria-label="Previous slide" onClick={prev}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button type="button" className="hero-arrow hero-arrow-next" aria-label="Next slide" onClick={next}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="hero-dots" role="tablist" aria-label="Slider pagination">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-dot${i === current ? " is-active" : ""}`}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
