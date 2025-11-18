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
                <div className="w-50 h-50 bg-sky-300 rounded-full flex justify-center shadow-2xl">
                    <div className="w-48 h-48 bg-sky-400 rounded-full mt-1"></div>
                </div>
            </div>
            <nav
                className={`${
                    isFixed ? "fixed top-0 left-0 right-0" : "relative"
                }  bg-sky-100 shadow-lg z-50`}
            >
                <div className="flex justify-between text-sky-800">
                    <div>A</div>
                    <div>S</div>
                    <div>E</div>
                    <div>P</div>
                    <div>R</div>
                </div>
            </nav>
        </div>
    );
}
