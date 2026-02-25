import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const isHu = i18n.language === "hu";

    const toggleLanguage = () => {
        i18n.changeLanguage(isHu ? "en" : "hu");
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 rounded-full hover:bg-foreground/10 transition-colors cursor-pointer"
            title={isHu ? "Switch to English" : "Váltás magyarra"}
        >
            <div className="w-6 h-4 flex items-center justify-center overflow-hidden border border-border/50 shadow-sm transition-transform group-hover:scale-105">
                <img
                    src={isHu ? "./flags/hu.png" : "./flags/en.png"}
                    alt={isHu ? "HU" : "EN"}
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground group-hover:text-foreground">
                {isHu ? "HU" : "EN"}
            </span>
        </button>
    );
};
