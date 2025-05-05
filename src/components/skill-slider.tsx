import {useEffect, useState} from "react";
import {SKILLS} from "../data.tsx";
import {InfiniteSliderEffect} from "./infinite-slider-effect.tsx";


function shuffleArray(array: string[]): string[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const SkillSlider = () => {
    const [shuffledSkills, setShuffledSkills] = useState<string[]>([]);

    useEffect(() => {
        setShuffledSkills(shuffleArray(SKILLS));
    }, []);

    return (
        <InfiniteSliderEffect
            gap={24}
            speed={50}
            speedOnHover={15}
        >
            {shuffledSkills.map((skill, index) => (
                <span key={index}
                      className="bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 text-sm px-4 py-2 rounded-full shadow hover:cursor-default whitespace-nowrap"
                >
                    {skill}
                </span>
            ))}
        </InfiniteSliderEffect>
    );
}

export default SkillSlider;