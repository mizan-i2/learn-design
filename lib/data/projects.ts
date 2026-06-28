export type ProjectCategory =
  | "animation"
  | "mining"
  | "bridges"
  | "commercial"
  | "health";

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
};

export type CategoryData = {
  id: ProjectCategory;
  slug: string;
  title: string;
  description: string;
  showcaseImage: string;
  alt?: boolean;
  projects: ProjectItem[];
};

export const projectCategories: CategoryData[] = [
  {
    id: "animation",
    slug: "cat-animation",
    title: "Animation",
    description:
      "3D construction sequencing, erection animations, and stakeholder visualisations for complex steel builds.",
    showcaseImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&q=80",
    projects: [
      {
        title: "Plant Expansion Sequence",
        description: "4D animation for a minerals processing plant erection sequence.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
      },
      {
        title: "Steel Bridge Erection",
        description: "Lift plan visualisation and staged erection animation for a multi-span bridge.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      },
      {
        title: "High-Rise Core & Steel",
        description: "Construction animation for composite floor and steel frame coordination.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      },
    ],
  },
  {
    id: "mining",
    slug: "cat-mining",
    title: "Mining & Resources",
    description:
      "Materials handling, CHPP upgrades, processing plants, and heavy industrial steel structures.",
    showcaseImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    alt: true,
    projects: [
      {
        title: "Prominent Hill Expansion",
        description: "Steel detailing for mine expansion structures and conveyor supports.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      },
      {
        title: "DBCT RL4 Reclaimer",
        description: "Shop drawings and CNC files for bulk materials reclaimer steelwork.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
      },
      {
        title: "Carrapateena Flotation Plant",
        description: "Full detailing package for coarse flotation circuit steel structures.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      },
      {
        title: "Bengalla CHPP Expansion",
        description: "CHPP expansion steelwork — platforms, trusses, and equipment supports.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
      },
    ],
  },
  {
    id: "bridges",
    slug: "cat-bridges",
    title: "Bridges",
    description: "Steel bridges, transit structures, overpasses, and civil coordination packages.",
    showcaseImage:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80",
    alt: true,
    projects: [
      {
        title: "Ballarat Station",
        description: "Structural steel detailing for station canopies and bridge connections.",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
      },
      {
        title: "Raymond Terrace Bypass",
        description: "Connection detailing for highway bypass bridge steelwork.",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
      },
      {
        title: "MR651 Warringah Freeway",
        description: "Steel bridge components and splice connection shop drawings.",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
      },
    ],
  },
  {
    id: "commercial",
    slug: "cat-commercial",
    title: "Commercial & Light Industrial",
    description:
      "Warehouses, high-rise office towers, distribution centres, and light industrial builds.",
    showcaseImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
    projects: [
      {
        title: "135 Quinns Hill Rd Warehouse",
        description: "Portal frame and mezzanine steel detailing for industrial warehouse.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      },
      {
        title: "405 Bourke Street",
        description: "Commercial tower steel shop drawings and BIM coordination.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      },
      {
        title: "Suburban Rail Loop",
        description: "Structural steel packages for transit infrastructure components.",
        image: "https://images.unsplash.com/photo-1479832678313-bdad9733a2e4?w=600&q=80",
      },
      {
        title: "Solar Farm Ancillary Foundation",
        description: "Steel detailing for ancillary structures and equipment supports.",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
      },
    ],
  },
  {
    id: "health",
    slug: "cat-health",
    title: "Health & Education",
    description: "Hospitals, medical facilities, schools, TAFE campuses, and public buildings.",
    showcaseImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80",
    alt: true,
    projects: [
      {
        title: "Regional Hospital Extension",
        description: "Steel modeling and shop drawings with strict QA documentation.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
      },
      {
        title: "Manuka Health Carterton",
        description: "Health facility structural steel detailing and revision control.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      },
      {
        title: "Nirimba TAFE College",
        description: "Education campus steel structures and access bridge detailing.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      },
    ],
  },
];

export const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "animation", label: "Animation" },
  { id: "mining", label: "Mining & Resources" },
  { id: "bridges", label: "Bridges" },
  { id: "commercial", label: "Commercial & Light Industrial" },
  { id: "health", label: "Health & Education" },
] as const;

export type FilterId = (typeof filterOptions)[number]["id"];
