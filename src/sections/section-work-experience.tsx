import InfoCard from "../components/info-card.tsx";
import {WORK_EXPERIENCE} from "../data.tsx";

const SectionWorkExperience = () => {
    return (
        <section id="section-work-experience">
            <h3 className="mb-5 text-lg font-medium">Experience</h3>

            <div className="flex flex-col space-y-2">
                {WORK_EXPERIENCE.map((experience, index) => (
                    <InfoCard {...experience} key={index}/>
                ))}
            </div>
        </section>
    );
};

export default SectionWorkExperience;