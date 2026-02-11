import { Github, Linkedin } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/buruadam", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/adam-buru", label: "LinkedIn" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            Ádám Buru
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Ádám Buru. All rights reserved.
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
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
            </div>
        </footer>
    );
};