"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
    const educationData = [
        {
            level: "Bachelor of Computer Applications (BCA)",
            institution: "Magadh University Gaya",
            year: "2023 - 2026 (Running)",
            description: "Specializing in Full Stack Development, DSA, and Software Engineering.",
            icon: <GraduationCap size={24} className="text-blue-400" />
        },
        {
            level: "Higher Secondary (12th Grade)",
            institution: "Y.A.S Parsando (BSEB)",
            year: "2021 - 2023",
            description: "Focused on Physics, Chemistry, and Mathematics.",
            icon: <BookOpen size={24} className="text-purple-400" />
        },
        {
            level: "Secondary School (10th Grade)",
            institution: "Paramount Academy Tarapur (CBSE)",
            year: "2011 - 2021",
            description: "Foundation in Science and Mathematics.",
            icon: <School size={24} className="text-emerald-400" />
        }
    ];

    return (
        <section id="education" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                    <p className="text-white/50 max-w-2xl mx-auto">My academic journey and qualifications.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-white/10 transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {edu.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{edu.level}</h3>
                            <p className="text-blue-400 font-medium mb-1">{edu.institution}</p>
                            <p className="text-white/40 text-sm mb-4 font-mono">{edu.year}</p>
                            <p className="text-white/60 text-sm leading-relaxed">{edu.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
