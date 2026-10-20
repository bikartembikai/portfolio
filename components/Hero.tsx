"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

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

export default function Hero() {
    const scrollToSection = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
        >
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, oklch(0.72 0.2 295 / 15%), transparent 70%)",
                    }}
                    animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, oklch(0.65 0.22 240 / 12%), transparent 70%)",
                    }}
                    animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(oklch(0.97 0.005 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.005 270) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
                >
                    <Sparkles className="w-3.5 h-3.5" />
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
                >
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">{profile.name}</span>
                </motion.h1>

                {/* Role */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
                >
                    {profile.role}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {profile.tagline}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                >
                    <Button
                        size="lg"
                        className="px-8 gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
                        onClick={() => scrollToSection("#projects")}
                    >
                        View My Work
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="px-8 border-border/50 hover:bg-white/5 hover:border-primary/50 hover:scale-105 transition-all duration-200"
                        onClick={() => { window.open(profile.cvUrl, "_blank"); }}
                    >
                        Download CV
                    </Button>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center gap-4"
                >
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                    >
                        <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                    >
                        <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${profile.email}`}
                        className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <ArrowDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
}
