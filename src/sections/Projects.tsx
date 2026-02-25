import { Code2, ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next";

export const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t('projects.items.cv_processor.title'),
            description: t('projects.items.cv_processor.description'),
            image: "/projects/resume-evaluator.png",
            tech: ['Java', 'Spring Boot', 'Spring AI', 'Ollama', 'Apache Tika', 'Gradle'],
            link: "https://github.com/buruadam/cv-processor-api",
        },
        {
            title: t('projects.items.portfolio.title'),
            description: t('projects.items.portfolio.description'),
            image: "/projects/portfolio-page.png",
            tech: ['JavaScript', 'React', 'Tailwind CSS', 'Lucide React', 'Vite'],
            link: "https://github.com/buruadam/buruadam.github.io",
        },
        {
            title: t('projects.items.timemanager_app.title'),
            description: t('projects.items.timemanager_app.description'),
            image: "/projects/timemanager-app.png",
            tech: ['Kotlin', 'Jetpack Compose', 'Ktor Client', 'Koin', 'MVVM'],
            link: "https://github.com/buruadam/Timemanager",
        },
        {
            title: t('projects.items.timemanager_api.title'),
            description: t('projects.items.timemanager_api.description'),
            image: "",
            tech: ['Kotlin', 'Ktor', 'Koin', 'Exposed ORM', 'MySQL', 'MockK'],
            link: "https://github.com/buruadam/ktor-timemanager-server",
        },
    ];

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                    <Code2 size={20} /> <span>{t('projects.badge')}</span>
                </div>
                <h2 className="text-4xl font-bold mb-12">{t('projects.title')}</h2>

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
                                        <span className="font-bold">{t('projects.view_on_github')}</span>
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
                        <span>{t('projects.view_all')}</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}