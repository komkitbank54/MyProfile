"use client";
import { useState, useEffect, RefObject } from "react";
import { NAV_ITEMS } from "@/constants/navItems";

interface NavbarProps {
    scrollRef: RefObject<HTMLElement>;
    activeSection: string;
}

export default function Navbar({ scrollRef, activeSection }: NavbarProps) {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const threshold = container.clientHeight * 0.17;
            setIsFixed(container.scrollTop >= threshold);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [scrollRef]);

    // Action Scroll
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth"});
        }
    }

    return (
        <div className="">
            <div className="h-[17vh] flex justify-center">
                <div className="w-[20vh] h-[20vh] bg-[#041443] rounded-full flex justify-center shadow-2xl">
                    <div className="w-[19.2vh] h-[19.2vh] bg-[#253f77] rounded-full mt-1"></div>
                </div>
            </div>
            <nav
                className={`${
                    isFixed ? "fixed top-0 left-0 right-0" : "relative"
                }  bg-[#041443] shadow-lg z-50`}
            >
                <div className="flex justify-between items-center px-4 py-2 text-[#8cc5f7] active:text-[#3b8fda]">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.id;

                        return (
                            <button key={item.id} onClick={() => scrollToSection(item.id)} className="focus:outline-none transition-transform hover:scale-110">
                                <img
                                    src={`/icon/${isActive ? "active-" : ""}${item.icon}.png`}
                                    alt={item.label}
                                    className={`w-7 h-7 object-contain transition-opacity duration-300 ${
                                        isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                                />
                            </button>
                        )
                    })
                }
                </div>
            </nav>
        </div>
    );
}
