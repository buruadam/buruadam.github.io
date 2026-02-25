import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next";

interface Study {
    degree: string;
    school: string;
    location: string;
    period: string;
}

export const Education = () => {
    const { t } = useTranslation();

    const studies = t('education.studies', { returnObjects: true }) as Study[];

    return (
        <section id="education" className="py-24 px-6 relative overflow-hidden">

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="flex items-center gap-2 text-primary font-semibold mb-4 uppercase tracking-widest text-sm">
                    <GraduationCap size={18} /> <span>{t('education.badge')}</span>
                </div>

                <h2 className="text-4xl font-bold mb-16">{t('education.title')}</h2>

                <div className="max-w-4xl">
                    <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-16">
                        {studies.map((edu, idx) => (
                            <div key={idx} className="relative pl-10">

                                <div className="absolute -left-[11px] top-2">
                                    <div className="w-5 h-5 rounded-full bg-background border-4 border-primary" />
                                </div>

                                <div className="flex flex-col gap-4">

                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold w-fit">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-bold tracking-tight text-foreground">
                                            {edu.degree}
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground font-medium">
                                            <span className="text-lg text-foreground/80">{edu.school}</span>
                                            <div className="flex items-center gap-1 text-sm bg-muted/30 px-2 py-0.5 rounded">
                                                <MapPin size={14} />
                                                {edu.location}
                                            </div>
                                        </div>
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