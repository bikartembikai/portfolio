"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowRight } from "lucide-react";
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
        icon: Github,
        label: "GitHub",
        value: "@yourusername",
        href: profile.github,
        description: "See my code & contributions",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Connect with me",
        href: profile.linkedin,
        description: "Let's grow our network",
    },
];

export default function Contact() {
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
                        <Button size="lg" className="gap-2 w-full group" asChild>
                            <a href={`mailto:${profile.email}`}>
                                <Mail className="w-4 h-4" />
                                Say Hello
                                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
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
                    {new Date().getFullYear()}
                </p>
                <p className="mt-1 text-xs opacity-60">
                    Made with Next.js, shadcn/ui & ❤️
                </p>
            </motion.div>
        </section>
    );
}
