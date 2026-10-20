"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.03 }}
                >
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-lg gradient-text">Portfolio</span>
                </motion.a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                            {link.label}
                        </button>
                    ))}
                    <Button
                        size="sm"
                        className="ml-2"
                        onClick={() => handleNavClick("#contact")}
                    >
                        Hire Me
                    </Button>
                </nav>

                {/* Mobile nav */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger
                        render={
                            <Button variant="ghost" size="icon" className="md:hidden">
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        }
                    />
                    <SheetContent side="right" className="w-64 bg-card border-border">
                        <nav className="flex flex-col gap-2 mt-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button className="mt-4" onClick={() => handleNavClick("#contact")}>
                                Hire Me
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    );
}
