import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark");
        }
        return false;
    });

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setIsDarkMode(isDark);
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors cursor-pointer"
        >
            {isDarkMode ? <Sun /> : <Moon />}
        </button>
    );
};