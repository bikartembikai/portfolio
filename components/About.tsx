"use client";

import { motion } from "framer-motion";
import { MapPin, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { profile, skills } from "@/data/portfolio";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.5 },
    }),
};

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                        Who I Am
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-6">
                            <MapPin className="w-4 h-4 text-primary" />
                            {profile.location}
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            {profile.bio}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { number: "3+", label: "Projects Built" },
                                { number: "2+", label: "Years Learning" },
                                { number: "5+", label: "Technologies" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-4 rounded-xl border border-border/50 bg-card/50 text-center"
                                >
                                    <p className="text-2xl font-bold gradient-text mb-1">
                                        {stat.number}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Code className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    custom={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <Badge
                                        variant="secondary"
                                        className="px-3 py-1.5 text-sm border border-border/50 bg-secondary hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
