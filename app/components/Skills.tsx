"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Zap,
  GitBranch,
  Shield,
  TrendingUp,
  Cpu,
  Globe,
  RefreshCw,
  Terminal,
  CheckCircle,
} from "lucide-react";

interface SkillItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  span?: string;
}

const skillsData: SkillItem[] = [
  {
    id: "frontend",
    title: "Core Engineering",
    icon: Code2,
    skills: ["Next.js", "React.js", "JavaScript ES6+", "HTML5/CSS3"],
    span: "col-span-1 row-span-2",
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Database,
    skills: ["Custom WordPress Plugins", "PHP", "JSON APIs", "RESTful Design"],
    span: "col-span-1 row-span-2",
  },
  {
    id: "performance",
    title: "Performance",
    icon: Zap,
    skills: ["Core Web Vitals", "Performance Tuning", "Optimization", "SEO"],
  },
  {
    id: "devops",
    title: "DevOps & Server",
    icon: Server,
    skills: ["Live Migrations", "cPanel Management", "Server Debugging"],
  },
  {
    id: "version-control",
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Branching Strategies"],
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    skills: ["Best Practices", "Auth Implementation", "Data Protection"],
  },
];

const SkillCard = ({
  item,
  index,
}: {
  item: SkillItem;
  index: number;
}) => {
  const Icon = item.icon;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50 hover:border-blue-500/30 p-6 flex flex-col justify-between transition-all duration-300 h-full"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon and title */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-50 mb-2">
              {item.title}
            </h3>
          </div>
          <Icon className="w-6 h-6 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
        </div>

        {/* Skills list */}
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.08 }}
              className="px-2 py-1 rounded-lg bg-zinc-800/50 text-xs font-medium text-zinc-300 border border-zinc-700/50 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="relative z-10 mt-4 pt-4 border-t border-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs text-zinc-500">Actively maintained expertise</p>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative py-20 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section heading */}
        <motion.div variants={headingVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-50 mb-4">
            Tech Stack & Expertise
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Full-spectrum capabilities spanning frontend engineering, backend
            architecture, and production operations.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {skillsData.map((item, index) => (
            <motion.div key={item.id} className={item.span || ""}>
              <SkillCard item={item} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", damping: 20 }}
          className="mt-16 p-8 rounded-xl border border-zinc-800/50 bg-zinc-900/30 text-center"
        >
          <p className="text-zinc-300 mb-4">
            Always learning and staying current with modern web standards and
            best practices.
          </p>
          <div className="flex justify-center gap-4">
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Production-Ready Code
            </span>
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Performance Optimized
            </span>
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Scalable Architecture
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
