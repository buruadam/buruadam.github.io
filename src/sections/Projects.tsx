import { Code2, ExternalLink } from "lucide-react"

export const Projects = () => {
    const projects = [
        {
            title: "AI Resume Evaluator",
            image: "/projects/resume-evaluator.png",
            description: "An automated recruitment tool that uses Large Language Models to extract structured data from PDF resumes and score candidates based on custom job criteria.",
            tech: ['Java', 'Spring Boot', 'Spring AI', 'Ollama', 'Apache Tika', 'Gradle'],
            link: "https://github.com/buruadam/cv-processor-api",
        },
        {
            title: "Portfolio Page",
            image: "/projects/portfolio-page.png",
            description: "A modern portfolio page. Built with React and Tailwind CSS, featuring dynamic dark mode, custom-themed UI and responsive layouts.",
            tech: ['JavaScript', 'React', 'Tailwind CSS', 'Lucide React', 'Vite'],
            link: "https://github.com/buruadam/buruadam.github.io",
        },
        {
            title: "Timemanager Android Application",
            image: "/projects/timemanager-app.png",
            description: "A modern Android client application developed as a thesis project, offering comprehensive task management, Pomodoro timer, and JWT-based authentication with Ktor-based server-side synchronization.",
            tech: ['Kotlin', 'Jetpack Compose', 'Ktor Client', 'Koin', 'MVVM'],
            link: "https://github.com/buruadam/Timemanager",
        },
        {
            title: "Timemanager Backend API",
            image: "",
            description: "A robust REST API developed to handle user authentication and data synchronization for the Timemanager mobile application, featuring persistent storage and optimized JSON responses.",
            tech: ['Kotlin', 'Ktor', 'Koin', 'Exposed ORM', 'MySQL', 'MockK'],
            link: "https://github.com/buruadam/ktor-timemanager-server",
        },
    ];

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                    <Code2 size={20} /> <span>Portfolio</span>
                </div>
                <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <div key={i} className="flex flex-col h-full group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all">

                            <div className="h-64 bg-muted/20 relative overflow-hidden border-b border-border">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/5 flex items-center justify-center">
                                        <Code2 size={48} className="text-primary/20" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6 cursor-default">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-bold bg-muted/10 backdrop-blur-md text-muted-foreground rounded-full border border-border shadow-sm hover:bg-muted/20 hover:text-foreground hover:border-primary/50 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-muted/10 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-full text-foreground hover:text-primary transition-all duration-300 group/btn cursor-pointer shadow-sm hover:shadow-md"
                                    >
                                        <span className="font-bold">View on GitHub</span>
                                        <ExternalLink
                                            size={16}
                                            className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
                                        />
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/buruadam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-muted/10 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-full text-foreground font-bold transition-all duration-300 group"
                    >
                        <span>View My Projects on GitHub</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}