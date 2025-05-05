import {TextEffect} from "../components/text-effect.tsx";

const SectionAboutMe = () => {
    return (
        <section id='section-about-me'>
            <TextEffect
                per='line'
                preset='fade-in-blur'
                className='text-zinc-600 dark:text-zinc-400'
            >
                Passionate about the intersection between machine learning, quantitative finance, and algorithmic
                trading. Focused on showcasing meaningful results through intuitive web experiences.
            </TextEffect>
        </section>
    )
}

export default SectionAboutMe;