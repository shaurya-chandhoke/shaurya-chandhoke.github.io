import {useState, useEffect} from 'react';
import {FadeInBlurWrapperProps, StaggeredFadeInBlurProps} from "../interfaces/global-interfaces.ts";

export const FadeInBlurEffect = ({children, delay = 0, duration = 500}: FadeInBlurWrapperProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-all duration-500 ease-out ${
                isVisible
                    ? 'opacity-100 blur-none'
                    : 'opacity-0 blur-md'
            }`}
            style={{transitionDuration: `${duration}ms`}}
        >
            {children}
        </div>
    );
};

// StaggeredFadeInBlur Component - Wraps multiple children with staggered delays
export const StaggeredFadeInBlur = ({
                                        children,
                                        baseDelay = 0,
                                        staggerDelay = 200,
                                        duration = 500
                                    }: StaggeredFadeInBlurProps) => {
    return (
        <>
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <FadeInBlurEffect
                        key={index}
                        delay={baseDelay + (index * staggerDelay)}
                        duration={duration}
                    >
                        {child}
                    </FadeInBlurEffect>
                ))
            ) : (
                <FadeInBlurEffect delay={baseDelay} duration={duration}>
                    {children}
                </FadeInBlurEffect>
            )}
        </>
    );
};
