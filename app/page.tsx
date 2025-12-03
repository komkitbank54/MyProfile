"use client";

import { useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_ITEMS } from "@/constants/navItems";

import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/about-section";
import ExpSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ResumeSection from "@/components/sections/resume-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const activeSection = useScrollSpy(scrollRef, sectionIds);

    return (
        <div
            ref={scrollRef}
            className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
        >
            <div className="snap-start">
                <Navbar scrollRef={scrollRef} activeSection={activeSection}/>
            </div>
            <div className="bg-[#56a1e4]">
                <section id="about">
                    <AboutSection />
                </section>
                <section id="skills" className="snap-start pt-[4.8vh]">
                    <SkillsSection />
                </section>
                <section id="exp" className="snap-start pt-[4.8vh]">
                    <ExpSection />
                </section>
                <section id="port" className="snap-start pt-[4.8vh]">
                    <PortfolioSection />
                </section>
                <section id="resume" className="snap-start pt-[4.8vh]">
                    <ResumeSection />
                </section>
            </div>
        </div>
    );
}
