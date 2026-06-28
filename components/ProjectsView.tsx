"use client";

import { useEffect, useState } from "react";
import {
  filterOptions,
  projectCategories,
  type FilterId,
  type ProjectCategory,
} from "@/lib/data/projects";

const hashMap: Record<string, ProjectCategory> = {
  animation: "animation",
  mining: "mining",
  bridges: "bridges",
  commercial: "commercial",
  health: "health",
};

export default function ProjectsView() {
  const [filter, setFilter] = useState<FilterId>("all");

  useEffect(() => {
    const hash = window.location.hash.replace("#cat-", "");
    if (hashMap[hash]) {
      setFilter(hashMap[hash]);
    }
  }, []);

  const handleTileClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    category: ProjectCategory,
    slug: string
  ) => {
    e.preventDefault();
    setFilter(category);
    const target = document.getElementById(slug);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="category-showcase" aria-label="Project categories">
        {projectCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.slug}`}
            className="category-tile"
            data-category={cat.id}
            onClick={(e) => handleTileClick(e, cat.id, cat.slug)}
          >
            <div
              className="category-tile-bg"
              style={{ "--img": `url('${cat.showcaseImage}')` } as React.CSSProperties}
            />
            <div className="category-tile-content">
              <h2>{cat.title}</h2>
              <span className="category-tile-link">View Projects &rarr;</span>
            </div>
          </a>
        ))}
      </section>

      <div className="category-filter-wrap">
        <div className="container">
          <nav className="category-filter" aria-label="Filter projects by category">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`category-filter-btn${filter === opt.id ? " active" : ""}`}
                data-filter={opt.id}
                onClick={() => setFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {projectCategories.map((cat) => {
        const visible = filter === "all" || filter === cat.id;
        return (
          <section
            key={cat.id}
            className={`category-projects${cat.alt ? " category-projects--alt" : ""}${visible ? "" : " is-hidden"}`}
            id={cat.slug}
            data-category={cat.id}
          >
            <div className="container">
              <header className="category-projects-header">
                <span className="section-label">Category</span>
                <h2>{cat.title}</h2>
                <p>{cat.description}</p>
              </header>
              <div className="category-project-grid">
                {cat.projects.map((project) => (
                  <article key={project.title} className="category-project-item">
                    <div
                      className="category-project-thumb"
                      style={{ "--img": `url('${project.image}')` } as React.CSSProperties}
                    />
                    <div className="category-project-body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
