"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            {/* Subtle background gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, oklch(0.72 0.2 295 / 5%) 0%, transparent 60%)",
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
                        My Work
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of the things I&apos;ve built — from full-stack applications
                        to personal experiments.
                    </p>
                </motion.div>

                {/* Project grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                        >
                            <Card className="h-full border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                                                    {project.title}
                                                </CardTitle>
                                                {project.featured && (
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-medium">
                                                        <Star className="w-2.5 h-2.5" />
                                                        Featured
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {/* Action icons */}
                                        <div className="flex gap-2 shrink-0">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <CardDescription className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <Badge
                                                key={t}
                                                variant="outline"
                                                className="text-xs border-border/50 text-muted-foreground"
                                            >
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* View all CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Button variant="outline" size="lg" className="gap-2 border-border/50 hover:border-primary/50 hover:bg-primary/10" asChild>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            View All on GitHub
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
