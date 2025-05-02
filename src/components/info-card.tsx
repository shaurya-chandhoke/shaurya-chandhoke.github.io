import {InfoCardData} from "../interfaces/global-interfaces.ts";
import {useRef, useState} from "react";
import * as React from "react";

const InfoCard = (props: InfoCardData) => {
    const {heading, subheading, dates} = props;

    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({x, y});
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
        >
            {/* Glow Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, oklch(44.2% 0.017 285.786), transparent 50%)`,
                }}
            />

            <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                    <div className="relative flex w-full flex-row justify-between">
                        <div>
                            <h4 className="font-normal dark:text-zinc-100">{heading}</h4>
                            <p className="text-zinc-500 dark:text-zinc-400">{subheading}</p>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400">{dates}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;