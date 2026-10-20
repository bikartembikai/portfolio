"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
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
                        asChild
                    >
                        <a href={profile.cvUrl} download>
                            Download CV
                        </a>
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
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                    >
                        <Linkedin className="w-5 h-5" />
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
