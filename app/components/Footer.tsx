"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  MapPin,
} from "lucide-react";

interface ContactOption {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  type: "email" | "phone" | "link";
}

const contactOptions: ContactOption[] = [
  {
    icon: Mail,
    label: "Email",
    value: "umairmasab935@gmail.com",
    href: "mailto:umairmasab935@gmail.com",
    type: "email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 324-1583954",
    href: "tel:+923241583954",
    type: "phone",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/masabumair",
    type: "link",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/masabumair",
    type: "link",
  },
];

const ContactCard = ({
  option,
  index,
}: {
  option: ContactOption;
  index: number;
}) => {
  const Icon = option.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.a
      href={option.href}
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-interactive rounded-lg p-6 border border-zinc-800/50 hover:border-blue-500/30 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300 flex items-start gap-4"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-cyan-500/20 group-hover:border-blue-500/50 transition-all duration-300">
        <Icon className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1 group-hover:text-zinc-400 transition-colors">
          {option.label}
        </p>
        <p className="text-sm font-medium text-zinc-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 truncate">
          {option.value}
        </p>
      </div>

      {/* Arrow indicator */}
      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-4 h-4 text-zinc-500" />
      </div>
    </motion.a>
  );
};

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <footer className="relative py-20 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main headline */}
        <motion.div variants={headingVariants} className="mb-16 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-50 mb-6 leading-tight">
            Have a project in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              mind?
            </span>
            <br />
            Let&apos;s build it.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            I&apos;m available for freelance projects, full-time opportunities,
            and consulting work. Reach out directly for the fastest response.
          </p>
        </motion.div>

        {/* Contact options grid */}
        <motion.div variants={contentVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {contactOptions.map((option, index) => (
            <ContactCard key={index} option={option} index={index} />
          ))}
        </motion.div>

        {/* Location info */}
        <motion.div
          variants={contentVariants}
          className="text-center mb-16 p-6 rounded-lg border border-zinc-800/50 bg-zinc-900/30"
        >
          <div className="flex items-center justify-center gap-2 text-zinc-400 mb-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm">Based in Peshawar, Pakistan</span>
          </div>
          <p className="text-xs text-zinc-500">
            Working globally on North American timelines • Always available for
            remote opportunities
          </p>
        </motion.div>

        {/* Bottom divider and credit */}
        <motion.div
          variants={contentVariants}
          className="pt-8 border-t border-zinc-800/50 text-center"
        >
          <p className="text-sm text-zinc-500">
            Designed & built by Masab Umair • {new Date().getFullYear()}
          </p>
          <p className="text-xs text-zinc-600 mt-2">
            Built with Next.js, Framer Motion, Tailwind CSS & ❤️
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
