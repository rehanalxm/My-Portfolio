"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Crafting intelligent <br />
                            <span className="text-blue-500">web solutions.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
                            <p>
                                I'm Rehan Alam, a Full Stack Developer driven by the challenge of turning complex problems into elegant, user-centric applications.
                            </p>
                            <p>
                                My expertise lies in the <strong className="text-white font-medium">MERN Stack</strong> and <strong className="text-white font-medium">Next.js</strong> ecosystem.
                                I don't just write code; I architect systems that are scalable, maintainable, and built for performance.
                            </p>
                            <p>
                                Recently, I've been pioneering <strong className="text-white font-medium">AI-driven development workflows</strong>,
                                leveraging tools that allow me to ship robust features at 2x speed without compromising on quality.
                            </p>
                        </div>
                    </div>

                    {/* Stats / Cards Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                                    <Code2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Full Stack Engineer</h3>
                            </div>
                            <p className="text-white/50 text-sm">Specializing in end-to-end development from database design to pixel-perfect frontends.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">AI-Integrated workflow</h3>
                            </div>
                            <p className="text-white/50 text-sm">Utilizing advanced AI tools to accelerate build times and optimize logic.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Modern Web Standards</h3>
                            </div>
                            <p className="text-white/50 text-sm">Building accessible, SEO-friendly, and responsive applications for the modern web.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
