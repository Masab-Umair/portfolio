"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gotham Polling (US)",
    description:
      "Data visualization platform translating complex US polling insights into interactive web experiences. Real-time analytics dashboards for political research organizations.",
    tags: ["WordPress", "Elementor Pro", "Data Visualization"],
    link: "https://gothampolling.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Hope Urgent and Primary Care Clio",
    description:
      "Full WordPress site built with Elementor Pro plus a custom PHP/JS/CSS appointment management plugin. Includes a role-based Doctor login and dashboard for approving, rejecting, and deleting pending appointments, while keeping doctors out of the WordPress admin.",
    tags: ["WordPress", "Elementor Pro", "PHP", "Custom Plugin", "Appointment Management"],
    link: "https://hopeurgentandprimarycareclio.com/",
  },
  {
    id: 3,
    title: "Mynd Myself",
    description:
      "Healthcare directory and community platform connecting patients with holistic practitioners. Built with WordPress, Elementor Pro, WooCommerce/membership tools, advanced multi-parameter search, practitioner portals, event management, and Zoom integration.",
    tags: ["WordPress", "Elementor Pro", "WooCommerce", "Membership", "Directory"],
    link: "https://www.myndmyself.com/",
  },
  {
    id: 4,
    title: "Order Software Keys",
    description:
      "Digital e-commerce store for software license keys with automated instant delivery, secure checkout, multi-currency formatting, user dashboards, and product reviews. Includes a custom user-based plugin that tracks logged-in clients and reveals specific products, categories, and pages only to authorized customers.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "Custom Plugin", "License Delivery", "Elementor Pro"],
    link: "https://ordersoftwarekeys.com/",
  },
  {
    id: 5,
    title: "MindSurf Media",
    description:
      "High-conversion agency landing page with direct booking and lead magnet workflows. Built on WordPress with Elementor-style layout, dynamic CSS, scroll animations, and a structured sales funnel for B2B lead generation.",
    tags: ["WordPress", "Elementor Pro", "Landing Page", "Lead Gen", "Animations"],
    link: "https://mindsurfmedia.com/",
  },
  {
    id: 6,
    title: "Grand Zawiyah of America",
    description:
      "Community nonprofit platform featuring donation progress tracking, event ticketing, media resources, and a custom Elementor-compatible mixed image/video slider plugin for rich multimedia presentation.",
    tags: ["WordPress", "Elementor Pro", "Donations", "Events", "PHP", "Custom Plugin"],
    link: "https://grandzawiyahofamerica.org/",
  },
  {
    id: 7,
    title: "Sat Morn",
    description:
      "Nostalgia-driven apparel and merchandise brand site with immersive storytelling and investor-focused pitch sections, built for engaging brand launches and merch presentation.",
    tags: ["WordPress", "Elementor Pro", "Merch", "Branding", "Storytelling"],
    link: "https://satmorn.com/",
  },
  {
    id: 8,
    title: "Candid Smiles Orthodontics",
    description:
      "High-end orthodontic website designed for precision healthcare branding and patient trust, built using WordPress and Elementor Pro with polished visual design.",
    tags: ["WordPress", "Elementor Pro", "Healthcare", "Design", "Branding"],
    link: "https://candidsmilesorthodontics.com/",
  },
  {
    id: 9,
    title: "The Opulent Cleaning Co.",
    description:
      "Rapid deployment service website created on Wix with a client-friendly launch approach and polished presentation for a cleaning business.",
    tags: ["Wix", "Brand Launch", "Service Website", "Client Autonomy", "Design"],
    link: "https://www.theopulentcleaningco.net/",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`group relative rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50 hover:border-blue-500/30 p-8 flex flex-col justify-between transition-colors duration-300 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Project title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-50 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer with links */}
      <div className="relative z-10 flex gap-3 pt-6 border-t border-zinc-800/50">
        {project.link && (
          <motion.a
            href={project.link}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="cursor-interactive flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-medium text-sm transition-colors duration-300"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        )}
        {project.github && (
          <motion.a
            href={project.github}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="cursor-interactive flex items-center gap-2 text-zinc-400 hover:text-zinc-200 font-medium text-sm transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section heading */}
        <motion.div variants={headingVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-50 mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A curated selection of recent work spanning data visualization,
            healthcare, and performance optimization.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
