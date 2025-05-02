import {JSX, ReactNode} from "react";

export interface InfoCardData {
    heading: string,
    subheading: string,
    dates: string
}

export interface FadeInBlurWrapperProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}

export interface StaggeredFadeInBlurProps {
    children: ReactNode | ReactNode[];
    baseDelay?: number;
    staggerDelay?: number;
    duration?: number;
}

export interface CardData {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => JSX.Element;
}