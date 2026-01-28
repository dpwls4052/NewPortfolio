import React, { useRef } from "react";
import { useIntersectionObserver } from "../../lib/hooks/useIntersectionObserver";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(skillsRef, { threshold: 0.1 });

  const skills = [
    {
      category: "Frontend & Tools",
      items: [
        { name: "React", level: 75 },
        { name: "Next.js", level: 60 },
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 60 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Git", level: 80 },
        { name: "Figma", level: 85 },
      ],
    },
  ];
  return (
    <section id="skills" className="min-h-screen py-32 px-5" ref={skillsRef}>
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-5xl md:text-6xl font-bold text-center mb-4 ${isIntersecting ? "animate-slide-up-1" : ""}`}
        >
          Skills
        </h1>
        <p
          className={`text-center text-[var(--foreground-light)] mb-16 ${isIntersecting ? "animate-slide-up-2" : ""}`}
        >
          기술 스택과 숙련도
        </p>

        <div
          className={`${isIntersecting ? "animate-slide-up-3" : ""} space-y-12`}
        >
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-accent)]">
                {skillGroup.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {skillGroup.items.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[var(--foreground-light)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--color-primary)] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-[var(--color-accent)] rounded-full ${isIntersecting ? "animate-skill-bar" : ""}`}
                        style={
                          {
                            "--skill-width": `${skill.level}%`,
                            animationDelay: `${0.8 + idx * 0.1}s`,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ${isIntersecting ? "animate-slide-up-4" : ""}`}
        >
          <div className="bg-[var(--color-primary)] border border-[var(--border)] rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
              4+
            </div>
            <div className="text-[var(--foreground-light)]">
              Years of Experience
            </div>
          </div>

          <div className="bg-[var(--color-primary)] border border-[var(--border)] rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
              20+
            </div>
            <div className="text-[var(--foreground-light)]">
              Projects Completed
            </div>
          </div>

          <div className="bg-[var(--color-primary)] border border-[var(--border)] rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
              10+
            </div>
            <div className="text-[var(--foreground-light)]">
              Technologies Mastered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
