import AboutSection from "@/components/sections/about-section";
import ExpSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ResumeSection from "@/components/sections/resume-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {

    return (
        <div className="bg-[#56a1e4] snap-y snap-mandatory h-screen overflow-y-scroll">
            <section className="snap-start">
                <AboutSection />
            </section>
            <section className="snap-start">
                <SkillsSection />
            </section>
            <ExpSection />
            <PortfolioSection />
            <ResumeSection />
        </div>
    );
}
