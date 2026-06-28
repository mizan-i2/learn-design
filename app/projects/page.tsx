import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import { pageBanners } from "@/lib/data/pageBanners";
import ProjectsView from "@/components/ProjectsView";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore steel detailing projects by category — Animation, Mining & Resources, Bridges, Commercial, and Health & Education.",
};

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <PageHero
        label="Our Work"
        title="Projects by Category"
        description="Browse our portfolio by sector — the same categories we deliver across mining, infrastructure, commercial, and institutional builds."
        image={pageBanners.projects}
        compact
      />

      <ProjectsView />

      <CtaBanner
        title="Have a project in mind?"
        description="Share your drawings, standards, and timeline. We'll outline how we can support your next build."
        buttonText="Start a Conversation"
      />
    </div>
  );
}
