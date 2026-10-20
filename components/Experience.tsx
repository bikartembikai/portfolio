"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                        My Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                    <div className="flex flex-col gap-8">
                        {experience.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative pl-16"
                            >
                                {/* Icon dot */}
                                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl border border-primary/30 bg-background flex items-center justify-center shadow-lg shadow-primary/10">
                                    {item.company === "University" ? (
                                        <GraduationCap className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Briefcase className="w-5 h-5 text-primary" />
                                    )}
                                </div>

                                {/* Content card */}
                                <div className="p-5 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <div>
                                            <h3 className="font-semibold text-lg leading-tight">
                                                {item.role}
                                            </h3>
                                            <p className="text-primary text-sm font-medium">
                                                {item.company}
                                            </p>
                                        </div>
                                        <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/50 whitespace-nowrap">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="outline"
                                                className="text-xs border-primary/20 text-primary/80"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
