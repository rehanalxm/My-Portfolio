"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;

        // Formspree logic placeholder
        // In production, user would replace the action URL
        const response = await fetch("https://formspree.io/f/xeokgdlw", {
            method: "POST",
            body: new FormData(e.currentTarget),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("Thanks for your message! I'll get back to you soon.");
            form.reset();
        } else {
            setStatus("Oops! There was a problem sending your message.");
        }
    }

    return (
        <section id="contact" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work together.</h2>
                    <p className="text-xl text-white/50 mb-12">
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                    </p>

                    <div className="space-y-6">
                        <Link href="mailto:mdrehanalam061543@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10">
                                <Mail size={24} />
                            </div>
                            <span className="text-lg">mdrehanalam061543@gmail.com</span>
                        </Link>

                        <div className="flex gap-4 pt-4">
                            <Link href="https://github.com/rehanalxm" target="_blank" className="p-4 rounded-full bg-white/5 text-white/80 hover:bg-white hover:text-black transition-all">
                                <Github size={24} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/rehan-alam-282b54312/" target="_blank" className="p-4 rounded-full bg-white/5 text-white/80 hover:bg-[#0077b5] hover:text-white transition-all">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="https://instagram.com/rehanalxm" target="_blank" className="p-4 rounded-full bg-white/5 text-white/80 hover:bg-[#E1306C] hover:text-white transition-all">
                                <Instagram size={24} />
                            </Link>

                        </div>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-white/60">Name</label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/60">Email</label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-white/60">Message</label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {status && (
                            <p className="text-center text-green-400 text-sm mt-4">{status}</p>
                        )}
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
