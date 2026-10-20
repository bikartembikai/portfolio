"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        description: "Drop me a message anytime",
    },
    {
        icon: GithubIcon,
        label: "GitHub",
        value: "@bikartembikai",
        href: profile.github,
        description: "See my code & contributions",
    },
    {
        icon: LinkedinIcon,
        label: "LinkedIn",
        value: "Connect with me",
        href: profile.linkedin,
        description: "Let's grow our network",
    },
];

export default function Contact() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <section id="contact" className="py-24 px-6 relative">
            {/* Background gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 100%, oklch(0.72 0.2 295 / 8%) 0%, transparent 60%)",
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or
                        opportunities to be part of something amazing.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                    {/* Left — CTA card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent glow"
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                                {profile.location}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                            Open to New Opportunities
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Whether you have a project in mind, a job offer, or just want to
                            say hi — my inbox is always open!
                        </p>
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
                        >
                            <Mail className="w-4 h-4" />
                            Say Hello
                            <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right — contact links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        {contactLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.label !== "Email" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <link.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm">{link.label}</p>
                                    <p className="text-muted-foreground text-xs truncate">
                                        {link.description}
                                    </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 text-center text-muted-foreground text-sm border-t border-border/30 pt-8"
            >
                <p>
                    Designed & Built by{" "}
                    <span className="gradient-text font-semibold">{profile.name}</span> ·{" "}
                    {year ?? ""}
                </p>
                <p className="mt-1 text-xs opacity-60">
                    Made with Next.js, shadcn/ui & ❤️
                </p>
            </motion.div>
        </section>
    );
}
