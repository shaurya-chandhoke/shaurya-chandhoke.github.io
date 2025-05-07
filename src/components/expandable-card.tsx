"use client";

import React, {JSX, useEffect, useId, useRef, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { CARD_DATA } from "../data";

// Define proper types for the card data
export interface CardData {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => React.ReactNode;
}

// Define media type enum for clarity
enum MediaType {
    IMAGE = 'image',
    VIDEO = 'video'
}

// Helper function to determine media type
const getMediaType = (src: string | undefined): MediaType => {
    if (!src) return MediaType.IMAGE;
    const extension = src.split('.').pop()?.toLowerCase() || '';
    if (extension === 'mp4') return MediaType.VIDEO;
    // We'll handle GIFs as images
    return MediaType.IMAGE;
};

// Media component that renders the appropriate element based on file type
interface MediaRendererProps {
    src: string;
    alt: string;
    className: string;
    onLoad?: () => void;
}

const MediaRenderer: React.FC<MediaRendererProps> = ({ src, alt, className, onLoad }) => {
    const mediaType = getMediaType(src);

    if (mediaType === MediaType.VIDEO) {
        return (
            <video
                className={className}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={onLoad}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }

    // Use image with loading="lazy" for images and GIFs
    return (
        <img
            width={200}
            height={200}
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
            onLoad={onLoad}
        />
    );
};

export function ExpandableCard(): JSX.Element {
    const [active, setActive] = useState<CardData | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);
    const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);
    const [thumbnailsLoaded, setThumbnailsLoaded] = useState<Record<string, boolean>>({});

    // Calculate scrollbar width on mount
    useEffect(() => {
        const width = window.innerWidth - document.documentElement.clientWidth;
        setScrollbarWidth(width);
    }, []);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent): void {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        try {
            if (active) {
                // Calculate scrollbar width - fallback in case the effect above hasn't run yet
                const width = scrollbarWidth || window.innerWidth - document.documentElement.clientWidth;

                // Save current padding if any
                const currentPaddingRight = parseInt(getComputedStyle(document.body).paddingRight, 10) || 0;

                // Apply padding to compensate for scrollbar disappearance
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${currentPaddingRight + width}px`;
            } else {
                // Reset to original state
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }
        } catch (error) {
            console.error("Error managing body overflow:", error);
        }

        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            // Ensure we clean up properly if component unmounts while active
            if (active) {
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }
        };
    }, [active, scrollbarWidth]);

    useOutsideClick(ref, () => setActive(null));

    // Define animation variants for better reliability
    const backdropVariants = {
        hidden: { opacity: 0, backdropFilter: "blur(0px)" },
        visible: { opacity: 1, backdropFilter: "blur(8px)" },
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

    // Handle media load status
    const handleMediaLoad = (cardTitle: string): void => {
        setThumbnailsLoaded(prev => ({
            ...prev,
            [cardTitle]: true
        }));
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {active && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={backdropVariants}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                        style={{
                            WebkitBackdropFilter: "blur(8px)",
                        }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={fadeInVariants}
                            transition={{ duration: 0.2 }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={cardVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="w-full h-80"
                            >
                                <MediaRenderer
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                            className="font-medium text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-zinc-800 dark:bg-zinc-600 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        className="text-neutral-600 h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                {CARD_DATA.map((card) => (
                    <motion.div
                        key={card.title}
                        onClick={() => setActive(card)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: thumbnailsLoaded[card.title] ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="h-60 w-full rounded-lg overflow-hidden"
                            >
                                <MediaRenderer
                                    src={card.src}
                                    alt={card.title}
                                    className="h-60 w-full rounded-lg object-cover object-top"
                                    onLoad={() => handleMediaLoad(card.title)}
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = (): JSX.Element => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};