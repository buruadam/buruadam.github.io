import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -74% 0px",
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = `#${entry.target.id}`;
                    setActiveSection(id);
                    window.history.replaceState(null, "", id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) observer.observe(section);
        });

        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection("");
                window.history.replaceState(null, "", window.location.pathname);
            } else if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                setActiveSection(navLinks[navLinks.length - 1].href);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                    }}
                    className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300 tracking-tighter"
                >
                    Ádám Buru
                </a>

                <div className="hidden md:flex space-x-8 font-medium uppercase">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative py-2 group overflow-hidden"
                        >
                            <span className={`text-xs font-bold transition-colors duration-300 tracking-widest ${activeSection === link.href ? "text-foreground" : "text-muted-foreground hover:text-primary"
                                }`}>
                                {link.label}
                            </span>

                            <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${activeSection === link.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                                }`} />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <a href="mailto:adam.buru@gmail.com" className="hidden md:block">
                        <button className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer">
                            Contact
                        </button>
                    </a>

                    <button
                        className="md:hidden p-2 text-foreground cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-lg font-medium transition-colors ${activeSection === link.href ? "text-primary" : "text-muted-foreground"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="mailto:adam.buru@gmail.com"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-foreground text-background px-5 py-3 rounded-xl text-sm font-bold text-center"
                    >
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
};