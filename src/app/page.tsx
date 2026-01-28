// src/app/page.tsx
"use client";
import { useEffect } from "react";
import Aurora from "../components/Aurora";
import { useThemeStore } from "../features/theme/model";
import Nav from "../widgets/header/ui/Navigation";
import Contact from "../widgets/ui/Contact";
import Home from "../widgets/ui/Home";
import Projects from "../widgets/ui/Projects";
import Skills from "../widgets/ui/Skills";

const Page = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <Nav />

      {/* Home Section - Aurora 배경 위에 컨텐츠 */}
      <div className="relative min-h-screen">
        {/* 배경 */}
        {theme === "dark" && (
          <div className="absolute inset-0">
            <Aurora
              colorStops={["#7751ee", "#a78bfa", "#5227ff"]}
              amplitude={1.3}
              blend={0.8}
              opacity={1.0}
            />
          </div>
        )}
        {/* 컨텐츠 */}
        <Home />
      </div>
      {/* Skills Section */}
      <Skills />

      {/* Projects Section - 준비중 */}
      <Projects />

      {/* Contact Section - 준비중 */}
      <Contact />
    </div>
  );
};

export default Page;
