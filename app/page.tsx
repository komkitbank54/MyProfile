"use client";

import { useRef } from "react";

import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/about-section";
import ExpSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ResumeSection from "@/components/sections/resume-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
    const scrollRef = useRef(null);

    return (
        <div
            ref={scrollRef}
            className="snap-y snap-mandatory h-screen overflow-y-scroll"
        >
            <div className="snap-start">
                <Navbar scrollRef={scrollRef} />
            </div>
            <div className="bg-[#56a1e4]">
                <section className="">
                    <AboutSection />
                </section>
                <section className="snap-start pt-[4.8vh]">
                    <SkillsSection />
                </section>
                <section className="snap-start pt-[4.8vh]">
                    <ExpSection />
                </section>
                <section className="snap-start pt-[4.8vh]">
                    <PortfolioSection />
                </section>
                <section className="snap-start pt-[4.8vh]">
                    <ResumeSection />
                </section>
            </div>
        </div>
    );
}
