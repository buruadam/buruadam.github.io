import { Layers, Terminal, Database, Layout } from "lucide-react";
import Icon from "tech-stack-icons";

export const Skills = () => {
    const categories = [
        {
            name: "Backend",
            icon: <Terminal size={22} />,
            skills: [
                { name: "java", label: "Java" },
                { name: "spring", label: "Spring Boot" },
                { name: "kotlin", label: "Kotlin" },
                { name: "python", label: "Python" },
                { name: "csharp", label: "C#" },
                { name: "nodejs", label: "Node.js" }
            ]
        },
        {
            name: "Frontend",
            icon: <Layout size={22} />,
            skills: [
                { name: "react", label: "React" },
                { name: "js", label: "JavaScript" },
                { name: "html5", label: "HTML" },
                { name: "css3", label: "CSS" },
                { name: "tailwindcss", label: "Tailwind CSS" },
                { name: "vitejs", label: "Vite" },
            ]
        },
        {
            name: "Database and tools",
            icon: <Database size={22} />,
            skills: [
                { name: "mysql", label: "MySQL" },
                { name: "docker", label: "Docker" },
                { name: "git", label: "Git" },
                { name: "github", label: "GitHub", isDark: true },
                { name: "postman", label: "Postman" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                    <Layers size={24} /> <span>Stack</span>
                </div>
                <h2 className="text-4xl font-bold mb-12">Technologies</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="bg-card rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        {cat.name}
                                    </h3>
                                </div>

                                <ul className="space-y-6">
                                    {cat.skills.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="group/item flex items-center gap-4 cursor-default"
                                        >
                                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                <Icon name={skill.name} className={`w-7 h-7 ${skill.isDark ? "dark:invert" : ""}`} />
                                            </div>

                                            <span className="text-base font-bold tracking-tight text-muted-foreground group-hover/item:translate-x-1.5 transition-all duration-300 ease-out inline-block">
                                                {skill.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};