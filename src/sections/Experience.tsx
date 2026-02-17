import { Briefcase, Calendar, MapPin } from "lucide-react"

export const Experience = () => {
    const experiences = [
        {
            role: 'IT Intern',
            company: 'Samsung Electronics Magyar Zrt.',
            location: 'Jászfényszaru, Hungary',
            period: '2023 - 2024',
            description: [
                'Assisted in the design and implementation of database-driven IT systems, focusing on data integrity and performance.',
                'Ensured peak performance of user workstations and provided technical troubleshooting to minimize downtime.',
                'Supported network infrastructure development and managed hardware installations and repairs.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="flex items-center gap-2 text-primary font-semibold mb-4 uppercase tracking-widest text-sm">
                    <Briefcase size={18} /> <span>Career Path</span>
                </div>

                <h2 className="text-4xl font-bold mb-16">Work Experience</h2>

                <div className="max-w-4xl">
                    <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-16">
                        {experiences.map((job, idx) => (
                            <div key={idx} className="relative pl-10">

                                <div className="absolute -left-[11px] top-2">
                                    <div className="w-5 h-5 rounded-full bg-background border-4 border-primary" />
                                </div>

                                <div className="flex flex-col gap-4">

                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold w-fit">
                                        <Calendar size={14} />
                                        {job.period}
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-bold tracking-tight text-foreground">
                                            {job.role}
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground font-medium">
                                            <span className="text-lg text-foreground/80">{job.company}</span>
                                            <div className="flex items-center gap-1 text-sm bg-muted/30 px-2 py-0.5 rounded">
                                                <MapPin size={14} />
                                                {job.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-border rounded-2xl p-6 shadow-sm">
                                        <ul className="space-y-4">
                                            {job.description.map((point, pIdx) => (
                                                <li key={pIdx} className="flex gap-3 text-muted-foreground leading-relaxed">
                                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}