"use client";

import { motion } from "framer-motion";

const skills = [
    "Java (DSA)", "JavaScript", "C", "C++",
    "React", "Next.js", "HTML", "CSS",
    "Node.js", "Express", "Supabase",
    "Vercel", "Git", "GitHub", "AI-Assisted Dev"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-zinc-950/50 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                    Technical Arsenal
                </motion.h2>
                <p className="text-white/50">Powered by modern technologies</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <span
                            key={`${skill}-${index}`}
                            className="text-xl md:text-2xl font-semibold text-white/20 hover:text-white/80 transition-colors mx-4 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <span
                            key={`${skill}-${index}-dup`}
                            className="text-xl md:text-2xl font-semibold text-white/20 hover:text-white/80 transition-colors mx-4 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </section>
    );
}
