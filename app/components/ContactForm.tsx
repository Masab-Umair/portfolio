"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  botcheck: false,
};

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? (target as HTMLInputElement).checked : false;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (formData.botcheck) {
      return "Spam detected. Please refresh and try again.";
    }

    if (!formData.name.trim()) {
      return "Please enter your name.";
    }

    if (!formData.email.trim()) {
      return "Please enter your email.";
    }

    if (!emailPattern.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      return "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      return "Please add a short message.";
    }

    return "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validationMessage = validateForm();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    const formId = process.env.NEXT_PUBLIC_WEB3FORMS_FORM_ID?.trim();

    if (!accessKey && !formId) {
      setError(
        "Form submission is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY or NEXT_PUBLIC_WEB3FORMS_FORM_ID to your environment."
      );
      setIsSubmitting(false);
      return;
    }

    const endpoint = formId
      ? `https://api.web3forms.com/submit/${formId}`
      : "https://api.web3forms.com/submit";

    const payload: Record<string, string | boolean> = {
      subject: formData.subject,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      botcheck: formData.botcheck,
    };

    if (accessKey) {
      payload.access_key = accessKey;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData(initialFormData);
      } else {
        setError(
          result.message || "Unable to send message. Please try again later."
        );
      }
    } catch (submitError) {
      setError("Network error. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/90 shadow-2xl shadow-black/30 p-8 md:p-10 backdrop-blur-xl">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.32em] text-blue-300/70 mb-3">
          Get in touch
        </p>
        <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-50 leading-tight">
          Send a message directly from the portfolio.
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-zinc-400 leading-relaxed">
          I read every message personally. Drop your details below and I’ll get back to you with a thoughtful response.
        </p>
      </div>

      <AnimatePresence>
        {error ? (
          <motion.div
            key="error-banner"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200"
          >
            {error}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -16 }}
            className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-8 w-8"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="mt-6 text-2xl font-semibold text-zinc-50">
              Message sent
            </h4>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Thanks for reaching out. I’ll review your message and reply to your email shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -16 }}
            className="space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-zinc-300">
                <span className="font-medium text-zinc-100">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-zinc-800/70 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-300 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>

              <label className="space-y-2 text-sm text-zinc-300">
                <span className="font-medium text-zinc-100">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="your@domain.com"
                  className="w-full rounded-2xl border border-zinc-800/70 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-300 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-zinc-300">
              <span className="font-medium text-zinc-100">Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isSubmitting}
                placeholder="Project type or quick intro"
                className="w-full rounded-2xl border border-zinc-800/70 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-300 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
              />
            </label>

            <label className="space-y-2 text-sm text-zinc-300">
              <span className="font-medium text-zinc-100">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows={6}
                placeholder="Tell me more about your project, timeline, or budget."
                className="w-full rounded-3xl border border-zinc-800/70 bg-zinc-950/80 px-4 py-4 text-sm text-zinc-100 outline-none transition duration-300 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
              />
            </label>

            <label style={{ display: "none" }}>
              <input
                type="checkbox"
                name="botcheck"
                checked={formData.botcheck}
                onChange={handleInputChange}
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-base font-semibold text-zinc-950 transition duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <svg
                  className="h-5 w-5 animate-spin text-zinc-950"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : null}
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
