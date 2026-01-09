"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const mainProjects = [
    {
        title: "KhojSetu",
        description: "A comprehensive Lost & Found platform connecting people to their lost items with real-time chat and location services.",
        tech: ["Next.js", "Supabase", "Tailwind"],
        image: "/images/khojsetu.jpg",
        links: { demo: "https://khoj-setu.vercel.app/", github: "https://github.com/rehanalxm/KhojSetu" }
    },
    {
        title: "StudyVault",
        description: "Academic resource sharing hub for notes, syllabus, and previous year questions.",
        tech: ["React", "Node.js", "MongoDB"],
        image: "/images/studyvault.jpg",
        links: { demo: "https://study-vault-beta.vercel.app/", github: "https://github.com/rehanalxm/StudyVault" }
    },
    {
        title: "TradeFlow (Zerodha Clone)",
        description: "Professional trading platform simulation with real-time market data analysis.",
        tech: ["Next.js", "Finnhub API", "Charts.js"],
        image: "/images/tradeflow.jpg",
        links: { demo: "https://zerodha-frontend-omega-three.vercel.app/", github: "https://github.com/rehanalxm/Zerodha-Clone" }
    }
];

const miniProjects = [
    {
        title: "Weather App",
        tech: "JavaScript/API",
        description: "Real-time weather tracking",
        link: "https://rehanalxm.github.io/Weather_App/"
    },
    {
        title: "Simon Game",
        tech: "jQuery",
        description: "Classic memory game",
        link: "https://rehanalxm.github.io/Simon_Says_Game/"
    },
    {
        title: "To-Do List",
        tech: "Node/LocalStorage",
        description: "Task management app",
        link: "https://rehanalxm.github.io/To-Do-List-/"
    },
    {
        title: "Client Portfolio",
        tech: "HTML/CSS/JS",
        description: "Professional portfolio website",
        link: "https://rehanalxm.github.io/fillmicc-portfolio/"
    },
];

export default function Projects() {
    const miniProjectsRef = useRef<HTMLDivElement>(null);
    const featuredProjectsRef = useRef<HTMLDivElement>(null);

    const scrollFeaturedProjects = (direction: "left" | "right") => {
        if (featuredProjectsRef.current) {
            const scrollAmount = 450;
            const newScrollLeft = featuredProjectsRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
            featuredProjectsRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };

    const scrollMiniProjects = (direction: "left" | "right") => {
        if (miniProjectsRef.current) {
            const scrollAmount = 350;
            const newScrollLeft = miniProjectsRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
            miniProjectsRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="projects" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-white/50">Explore my recent work</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scrollFeaturedProjects("left")}
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/5"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scrollFeaturedProjects("right")}
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/5"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div
                    ref={featuredProjectsRef}
                    className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                >
                    {mainProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="min-w-[350px] md:min-w-[450px] snap-center relative h-[500px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group"
                        >
                            {/* Image Background */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 flex flex-col justify-end">
                                <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white/70 text-sm line-clamp-3 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs px-2 py-1 rounded bg-white/20 text-white/90 backdrop-blur-md border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Link href={project.links.demo} target="_blank" className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition-colors">
                                            Live Demo <ExternalLink size={16} />
                                        </Link>
                                        <Link href={project.links.github} target="_blank" className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-2 transition-colors backdrop-blur-md">
                                            Code <Github size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mini Projects */}
                <div className="mt-24">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4 inline-block">
                            Mini Projects & Archives
                        </h3>

                        <div className="flex gap-4">
                            <button
                                onClick={() => scrollMiniProjects("left")}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/5"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scrollMiniProjects("right")}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/5"
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={miniProjectsRef}
                        className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                    >
                        {miniProjects.map((project, index) => (
                            <Link
                                href={project.link}
                                target="_blank"
                                key={project.title}
                                className="min-w-[280px] md:min-w-[320px] snap-center group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors flex items-start gap-4 hover:border-white/10"
                            >
                                <div className="p-3 rounded-xl bg-white/5 text-white/60 group-hover:text-blue-400 transition-colors">
                                    <Folder size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                                    <p className="text-sm text-white/40 mb-2">{project.description}</p>
                                    <div className="text-xs font-mono text-zinc-500">{project.tech}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
