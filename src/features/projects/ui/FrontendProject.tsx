"use client";
import { useIntersectionObserver } from "@/src/lib/hooks/useIntersectionObserver";
import Button from "@/src/shared/ui/Button";
import { Mimo } from "@/src/shared/ui/icon";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const FrontendProject = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const isIntersecting = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  const feprojects = [
    {
      id: 1,
      title: "README",
      description: "온라인 서점 플랫폼",
      detail:
        "사용자가 도서를 검색하고 구매할 수 있는 온라인 서점 플랫폼입니다",
      tags: ["React", "JavaScript", "Supabase"],
      image: "/images/readme-mockup.png",
      github: "https://github.com/yourusername/readme",
      demo: "https://readme-demo.vercel.app",
    },
    {
      id: 2,
      title: "NextStep",
      description: "IT 직군간 로드맵을 작성 및 공유하는 플랫폼",
      detail:
        "IT 직군 간 학습 로드맵을 작성하고 공유할 수 있는 협업 플랫폼입니다. ",
      tags: ["React", "Next.js", "TypeScript", "Supabase"],
      image: "/images/nextstep-mockup.png",
      github: "https://github.com/yourusername/nextstep",
      demo: "https://nextstep-demo.vercel.app",
    },
  ];

  const handleProjectClick = (projectId: number) => {
    router.push(`/ProjectDetails/${projectId}`);
  };
  return (
    <section
      id="feprojects"
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <h1
        className={`text-5xl md:text-6xl font-bold text-center mb-4 ${isIntersecting ? "animate-slide-up-1" : ""}`}
      >
        Frontend Projects
      </h1>
      <p
        className={`text-center text-[var(--foreground-light)] mb-16 ${isIntersecting ? "animate-slide-up-2" : ""}`}
      >
        프론트엔드 프로젝트
      </p>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${isIntersecting ? "animate-slide-up-3" : ""}`}
      >
        {feprojects.map((project) => (
          <div
            key={project.id}
            className="border border-[var(--border)] shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform relative group"
          >
            {/* 전체 오버레이 - hover 시 나타남 */}
            <div
              onClick={() => handleProjectClick(project.id)}
              className="absolute inset-0 bg-[rgba(69,69,69,0.4)] opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center rounded-2xl cursor-pointer"
            >
              <Button
                variant="accent"
                className="px-8 py-2 bg-white text-[var(--color-accent)] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                자세히 보러가기 <Mimo />
              </Button>
            </div>

            {/* 목업 이미지 */}
            <div className="bg-[#2a2a2a] dark:bg-[#2a2a2a] p-8 flex items-center justify-center h-[250px]">
              <Image
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* 프로젝트 정보 */}
            <div className="p-6 bg-white dark:bg-[var(--background)]">
              <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-semibold mb-2">
                {project.description}
              </p>
              <p className="text-sm text-[var(--foreground-light)] mb-4">
                {project.detail}
              </p>

              {/* 태그 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[14px] rounded-sm font-semibold bg-[#e8e3fb] text-[var(--color-accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrontendProject;
