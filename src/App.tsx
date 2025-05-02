import './App.css'
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import SectionAboutMe from "./components/section-about-me.tsx";
import SectionWorkExperience from "./components/section-work-experience.tsx";
import SectionEducation from "./components/section-education.tsx";
import SectionProjects from "./components/section-projects.tsx";
import SectionBlog from "./components/section-blog.tsx";
import {StaggeredFadeInBlur} from "./components/fade-in-blur-effect.tsx";

function App() {
    return (
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
            <Header/>
            <main className="space-y-24">
                <SectionAboutMe/>
                <StaggeredFadeInBlur baseDelay={100} staggerDelay={300} duration={600}>
                    <SectionProjects/>
                    <SectionWorkExperience/>
                    <SectionEducation/>
                    <SectionBlog/>
                </StaggeredFadeInBlur>
            </main>
            <Footer/>
        </div>
    )
}

export default App
