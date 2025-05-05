import {TextLoopEffect} from "./text-loop-effect.tsx";
import {COPYRIGHT} from "../data.tsx";
import {Monitor, Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";

const Footer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const ICON_SIZE: number = 16

    const applyTheme = (theme: "light" | "dark" | "system") => {
        if (theme === "system") {
            localStorage.removeItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", prefersDark);
        } else {
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }
    };

    // Load theme preference from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setActiveIndex(1);
        } else if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
            setActiveIndex(0);
        } else {
            // system
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", prefersDark);
            setActiveIndex(2);
        }
    }, []);

    const ITEMS = [
        {
            icon: <Sun size={ICON_SIZE} />,
            dataId: "light",
            ariaLabel: "Switch to light theme",
            action: () => applyTheme("light")
        },
        {
            icon: <Moon size={ICON_SIZE}/>,
            dataId: "dark",
            ariaLabel: "Switch to dark theme",
            action: () => applyTheme("dark")
        },
        {
            icon: <Monitor size={ICON_SIZE}/>,
            dataId: "system",
            ariaLabel: "Switch to system theme",
            action: () => applyTheme("system")
        }
    ];

    return (
        <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
            <div className="flex items-center justify-between">
                <div className="relative inline-block whitespace-nowrap text-xs text-zinc-500">
                    <TextLoopEffect>
                        <span>Built with React, Tailwind CSS, Motion</span>
                        <span>&#169; {COPYRIGHT} Shaurya Chandhoke</span>
                    </TextLoopEffect>
                </div>
                <div className="text-xs text-zinc-400 space-x-1">
                    {ITEMS.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            data-id={item.dataId}
                            aria-label={item.ariaLabel}
                            onClick={() => {
                                setActiveIndex(index);
                                item.action();
                            }}
                            className={`relative inline-flex w-8 h-8 items-center justify-center rounded transition-colors ${
                                activeIndex === index
                                    ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                                    : ""
                            }`}
                        >
                            {item.icon}
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;