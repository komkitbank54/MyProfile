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

  // --- แก้ไข Logic การ Scroll ตรงนี้ ---
  const scrollToSection = (id: string) => {
    const container = scrollRef.current;
    const element = document.getElementById(id);
    if (container && element) {
      // ใช้ container.scrollTo และ element.offsetTop เพื่อความแม่นยำใน div
      container.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };
  // ------------------------------------

  return (
    <div className="relative z-50">
      {/* Avatar Section - 8-bit Original Style */}
      <div className="h-[17vh] flex justify-center items-end pb-4 pt-12">
        <div className="relative group cursor-pointer transition-transform hover:-translate-y-1">
            {/* Hard Shadow (เงาทึบ 8-bit) */}
            <div className="absolute top-2 left-2 w-full h-full bg-[#041443]"></div>
            
            {/* ตัวกรอบ */}
            <div className="relative w-[14vh] h-[14vh] bg-[#ffecd1] border-4 border-[#041443] flex justify-center items-center">
                <div className="w-[12vh] h-[12vh] bg-[#253f77] border-2 border-[#041443]">
                    <img src="/your-pixel-avatar.png" alt="Profile" className="w-full h-full object-cover pixelated" /> 
                </div>
            </div>
        </div>
      </div>

      {/* Navbar Bar - 8-bit Original Style */}
      <nav
        className={`${
          isFixed 
            ? "fixed top-0 left-0 right-0 border-b-4 border-[#041443]" 
            : "relative border-y-4 border-[#041443]"
        } bg-[#041443] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300`}
      >
        <div className="max-w-screen-md mx-auto flex justify-between items-center px-6 py-3 text-[#8cc5f7]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative focus:outline-none transition-all duration-200 ${
                    isActive ? "-translate-y-1" : "hover:-translate-y-1"
                }`}
              >
                {/* Pixel Icon Container - สีเดิม */}
                <div className={`p-2 border-2 ${isActive ? "bg-[#facc15] border-white" : "bg-[#253f77] border-[#56a1e4]"} transition-colors`}>
                    <img
                    src={`/icon/${item.icon}.png`} 
                    alt={item.label}
                    className={`w-6 h-6 object-contain pixelated ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
                    style={{ imageRendering: "pixelated" }} 
                    />
                </div>
                
                {/* Tooltip - 8-bit Style */}
                {isActive && (
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#041443] bg-[#facc15] px-2 py-1 border-2 border-[#041443] whitespace-nowrap font-bold shadow-[2px_2px_0px_0px_#041443]">
                        {item.label}
                    </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}