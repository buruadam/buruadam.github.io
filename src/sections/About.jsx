import { User, CheckCircle2, Cpu } from "lucide-react";

export const About = () => {
    const skills = [
        'Git version control',
        'Test Driven Development',
        'Containerization with Docker',
        'REST API development',
        'API Testing with Postman',
    ];

    return (
        <section id="about" className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                        <User size={20} /> <span>About Me</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-6 italic">Bridging Theory and Practice</h2>

                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            As a university graduate, I thrive on turning academic foundations into
                            high-quality software. I don't just write code, I focus on building
                            sustainable and scalable systems.
                        </p>
                        <p>
                            I'm a fast learner with a proactive mindset, always eager to master new
                            frameworks. My approach is defined by high attention to detail and
                            clear communication.
                        </p>
                    </div>

                </div>

                <div className="w-full">

                    <div className="flex items-center gap-2 text-primary font-semibold mb-8">
                        <Cpu size={20} /> <span>Technical Skills</span>
                    </div>

                    <div className="grid gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="group/item flex items-center gap-4 p-1 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-default"
                            >
                                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover/item:bg-primary/20 transition-colors duration-300">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="text-lg font-bold tracking-tight text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-1.5 transition-all duration-300 ease-out">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};