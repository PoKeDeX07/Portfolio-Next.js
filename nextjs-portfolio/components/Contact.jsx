'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { profile } from '@/data/portfolio';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    _honeypot: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    // Honeypot — silently drop bot submissions.
    if (form._honeypot) {
      setForm({ name: '', email: '', message: '', _honeypot: '' });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all the fields.');
      return;
    }

    if (!emailRegex.test(form.email.trim())) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!url) {
      toast.error('Form endpoint is not configured. Please try again later.');
      return;
    }

    setSubmitting(true);
    try {
      await fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _honeypot: '',
        }),
      });

      setForm({ name: '', email: '', message: '', _honeypot: '' });
      toast.success('Message sent — I’ll get back within 24 hours.');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again or email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const onResumeDownload = () => {
    toast.success('Downloading resume.pdf');
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/[0.04]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6"
          >
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#9CA3AF]">
              <span className="w-8 h-px bg-white/20" />
              Contact
            </div>
            <h2 className="mt-5 text-[40px] sm:text-[52px] md:text-[68px] leading-[1.05] font-semibold tracking-[-0.03em] text-[#EDEDED]">
              Let’s build something
              <br />
              <span className="text-gradient">great.</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.7] text-[#9CA3AF]">
              I’m currently heads-down at my full-time role and not taking on new projects — but always open to a conversation. If you’re working on something interesting, drop a note.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={profile.resumeUrl}
                download
                onClick={onResumeDownload}
                className="btn-primary group"
              >
                Download Resume
                <Download
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-colors"
                >
                  <span className="text-[13px] text-[#EDEDED]">{s.label}</span>
                  <ExternalLink
                    size={14}
                    className="text-[#9CA3AF] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 rounded-[24px] border border-white/[0.06] bg-[#13131A]/60 p-6 md:p-10 backdrop-blur-sm flex flex-col h-full"
            noValidate
          >
            {/* Honeypot — hidden from real users, bots fill this */}
            <input
              type="text"
              name="_honeypot"
              value={form._honeypot}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="space-y-5 flex-1">
              <Field label="Your name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Cooper"
                  autoComplete="name"
                  className="w-full bg-transparent border-0 border-b border-white/[0.1] px-0 py-3 text-[15px] text-[#EDEDED] placeholder:text-[#9CA3AF]/70 focus:outline-none focus:border-white/40 transition-colors"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  autoComplete="email"
                  className="w-full bg-transparent border-0 border-b border-white/[0.1] px-0 py-3 text-[15px] text-[#EDEDED] placeholder:text-[#9CA3AF]/70 focus:outline-none focus:border-white/40 transition-colors"
                />
              </Field>
              <Field label="Tell me about the project" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  placeholder="A few lines about what you're building and what success looks like."
                  className="w-full bg-transparent border-0 border-b border-white/[0.1] px-0 py-3 text-[15px] text-[#EDEDED] placeholder:text-[#9CA3AF]/70 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-[#0B0B0F] bg-[#EDEDED] hover:bg-white font-semibold text-[15px] transition-all duration-300 disabled:opacity-60"
            >
              {submitting ? 'Sending…' : 'Send message'}
              {!submitting && <ArrowRight size={16} />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block">
    <span className="block text-[11px] tracking-[0.2em] uppercase text-[#9CA3AF] mb-1">
      {label}
    </span>
    {children}
  </label>
);

export default Contact;
