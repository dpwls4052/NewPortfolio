// src/shared/ui/Navigation.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeSectionBottom =
          homeSection.offsetTop + homeSection.offsetHeight;
        const scrollPosition = window.scrollY + 100;

        // Home 섹션을 벗어나면 Nav 표시
        setIsVisible(scrollPosition > homeSectionBottom);
      }

      // 현재 섹션 감지
      const sections = navItems.map((item) => item.id);
      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div
        className="bg-[rgba(255, 255, 255, 0.15)] border border-[var(--border)] rounded-full px-10 py-3 shadow-lg backdrop-blur-[8px]"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow:
            "inset 0 0 4px 2px rgba(191, 191, 191, 0.25), 0 0 3px 0 rgba(163, 163, 163, 0.2)",
        }}
      >
        <ul className="flex items-center gap-30">
          <button
            className="flex items-center gap-2 mr-20"
            onClick={() => scrollToSection("home")}
          >
            <Image src="/favicon.png" alt="logo" width={30} height={30} />
            <span className="text-sm">PORTFOLIO</span>
          </button>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-[16px] font-medium transition-colors hover:text-[var(--color-accent)] ${
                  activeSection === item.id
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--foreground)]"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
