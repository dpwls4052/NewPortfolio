// src/shared/ui/Navigation.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // 모바일 메뉴 닫기
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

  // 모바일 메뉴 열렸을 때 body 스크롤 막기
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 데스크톱 네비게이션 */}
      <nav
        className={`hidden md:block fixed top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div
          className="bg-[rgba(255, 255, 255, 0.15)] border border-[var(--border)] rounded-full px-6 lg:px-10 py-3 shadow-lg backdrop-blur-[8px]"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow:
              "inset 0 0 4px 2px rgba(191, 191, 191, 0.25), 0 0 3px 0 rgba(163, 163, 163, 0.2)",
          }}
        >
          <ul className="flex items-center gap-20 lg:gap-30">
            <button
              className="flex items-center gap-2 mr-15 lg:mr-20"
              onClick={() => scrollToSection("home")}
            >
              <Image src="/favicon.png" alt="logo" width={30} height={30} />
              <span className="text-sm font-medium">PORTFOLIO</span>
            </button>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm lg:text-base font-medium transition-colors hover:text-[var(--color-accent)] ${
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

      {/* 모바일 네비게이션 */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div
          className="bg-[rgba(255, 255, 255, 0.15)] border-b border-[var(--border)] px-4 py-3 backdrop-blur-[8px]"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <button
              className="flex items-center gap-2"
              onClick={() => scrollToSection("home")}
            >
              <Image src="/favicon.png" alt="logo" width={24} height={24} />
              <span className="text-xs font-medium">PORTFOLIO</span>
            </button>

            {/* 햄버거 버튼 */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-[rgba(255,255,255,0.2)] rounded-lg transition-colors"
              aria-label="메뉴"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div
            className="bg-[rgba(255, 255, 255, 0.95)] dark:bg-[rgba(30, 30, 30, 0.95)] border-b border-[var(--border)] backdrop-blur-[8px]"
            style={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
            <ul className="px-4 py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-all ${
                      activeSection === item.id
                        ? "text-[var(--color-accent)] bg-[rgba(var(--color-accent-rgb),0.1)]"
                        : "text-[var(--foreground)] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)]"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
