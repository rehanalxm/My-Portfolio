"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 bg-zinc-950 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white">Rehan Alam</h3>
                    <p className="text-white/40 text-sm mt-1">© {new Date().getFullYear()} Rehan Alam. All rights reserved.</p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/rehanalxm" target="_blank" className="text-white/60 hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rehan-alam-282b54312/" target="_blank" className="text-white/60 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="mailto:mdrehanalam061543@gmail.com" className="text-white/60 hover:text-white transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
