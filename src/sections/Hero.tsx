import { ChevronDown, Download, FileText, Github, Linkedin } from "lucide-react"
import { useEffect, useRef, useState } from "react";

const socialLinks = [
    { icon: Github, href: "https://github.com/buruadam", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/adam-buru", label: "LinkedIn" },
];

export const Hero = () => {

    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsResumeOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium bg-success/10 text-success rounded-full border border-success/20 shadow-sm">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                    </span>
                    Open to work
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Ádám Buru
                    </span>. <br />
                    I build <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        scalable
                    </span> software with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        precision
                    </span>.
                </h1>

                <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                    I am a <span className="text-foreground font-semibold">Software Engineer</span> passionate about building
                    <span className="text-foreground font-medium"> scalable</span> and <span className="text-foreground font-medium">maintainable</span> applications.
                    I focus on transforming complex technical concepts into
                    <span className="text-foreground font-medium"> high-quality, clean</span> and <span className="text-foreground font-medium">efficient</span> digital solutions.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4">

                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setIsResumeOpen(!isResumeOpen)}
                            className="flex items-center gap-2 px-8 py-4 bg-success text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-success/20 cursor-pointer"
                        >
                            <Download size={20} />
                            Download Resume
                            <ChevronDown size={18} className={`transition-transform ${isResumeOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isResumeOpen && (
                            <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
                                <a
                                    href="/Buru_Adam_CV_HU.pdf"
                                    download
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted/10 transition text-foreground font-medium border-b border-border"
                                >
                                    <FileText size={16} className="text-foreground" />
                                    Hungarian (HU)
                                    <Download size={16} />
                                </a>
                                <a
                                    href="/Buru_Adam_CV_EN.pdf"
                                    download
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted/10 transition text-foreground font-medium"
                                >
                                    <FileText size={16} className="text-foreground" />
                                    English (EN)
                                    <Download size={16} />
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">

                        <span className="font-bold tracking-widest text-muted-foreground">
                            Follow me:
                        </span>

                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                </div>
                <div className="mt-20 animate-bounce flex justify-center">
                    <a href="#about" className="text-muted hover:text-primary">
                        <ChevronDown size={32} />
                    </a>
                </div>
            </div>
        </section>
    )
}

