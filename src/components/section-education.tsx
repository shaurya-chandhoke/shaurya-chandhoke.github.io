import InfoCard from "./info-card.tsx";
import {EDUCATION_DATA} from "../data.tsx";

const SectionEducation = () => {
    return (
        <section id="section-education">
            <h3 className="mb-5 text-lg font-medium">Education</h3>

            <div className="flex flex-col space-y-2">
                {EDUCATION_DATA.map((education, index) => (
                    <InfoCard {...education} key={index}/>
                ))}
            </div>
        </section>
    )
}

export default SectionEducation;