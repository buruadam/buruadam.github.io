import { User, CheckCircle2, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    const skills = t('about.skills_list', { returnObjects: true }) as string[];

    return (
        <section id="about" className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                        <User size={20} /> <span>{t('about.badge')}</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-6 italic">{t('about.title')}</h2>

                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <p>{t('about.description_p1')}</p>
                        <p>{t('about.description_p2')}</p>
                        <p>{t('about.description_p3')}</p>
                    </div>

                </div>

                <div className="w-full">

                    <div className="flex items-center gap-2 text-primary font-semibold mb-8">
                        <Cpu size={20} /> <span>{t('about.skills_title')}</span>
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
                                <span className="text-lg font-bold tracking-tight text-muted-foreground group-hover/item:translate-x-1.5 transition-all duration-300 ease-out">
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