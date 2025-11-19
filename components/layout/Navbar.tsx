"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.17;
            setIsFixed(window.scrollY >= scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="">
            <div className="h-[17vh] flex justify-center">
                <div className="w-50 h-50 bg-[#041443] rounded-full flex justify-center shadow-2xl">
                    <div className="w-48 h-48 bg-[#253f77] rounded-full mt-1"></div>
                </div>
            </div>
            <nav
                className={`${
                    isFixed ? "fixed top-0 left-0 right-0" : "relative"
                }  bg-[#041443] shadow-lg z-50`}
            >
                <div className="flex justify-between items-center px-3 text-[#8cc5f7]">
                    <img src="/about-icon.png" alt="About" className="w-5 h-5 object-contain" />
                    <div>Skills</div>
                    <div>E</div>
                    <div>P</div>
                    <div>R</div>
                </div>
            </nav>
        </div>
    );
}
