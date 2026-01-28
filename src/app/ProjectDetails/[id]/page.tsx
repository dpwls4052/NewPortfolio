"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CalendarDays,
  Users,
  Tags,
  Wrench,
  CheckCircle2,
  Bug,
  Sparkles,
  BookOpen,
} from "lucide-react";

import Button from "@/src/shared/ui/Button";
import { frontendProjects } from "@/src/features/projects/model/frontendProjects";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/60 dark:bg-gray-900/40 px-3 py-1 text-xs font-medium text-[var(--foreground)] backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/70 dark:bg-gray-900/50 shadow-sm">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}
const techIconMap: Record<string, string> = {
  Nextjs: "/assets/icons/nextjs.svg",
  JavaScript: "/assets/icons/javascript.svg",
  TailwindCSS: "/assets/icons/tailwindcss.svg",
  Supabase: "/assets/icons/supabase.svg",
  Firebase: "/assets/icons/firebase.svg",
  GitHub: "/assets/icons/github.svg",
  Figma: "/assets/icons/figma.svg",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();

  const projectId = Number(params.id);

  const project = useMemo(() => {
    if (!Number.isFinite(projectId)) return undefined;
    return frontendProjects.find((p) => p.id === projectId);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen grid place-items-center bg-[var(--background)] px-6">
        <div className="max-w-md w-full rounded-3xl border border-[var(--border)] bg-white/60 dark:bg-gray-900/40 p-8 shadow-xl backdrop-blur">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            프로젝트를 찾을 수 없습니다
          </h1>
          <p className="mt-2 text-sm text-[var(--foreground-light)]">
            주소가 잘못되었거나 프로젝트가 삭제되었을 수 있어요.
          </p>
          <div className="mt-6 flex gap-3">
            <Button onClick={() => router.back()}>돌아가기</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* 배경 블러 */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/18 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[480px] w-[480px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* 헤더 */}
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/75 shadow-lg backdrop-blur-[8px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>돌아가기</span>
          </button>

          <div className="flex items-center gap-2">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-3 sm:px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-[var(--border)] bg-white/70 dark:bg-gray-900/40 px-3 sm:px-4 py-2 text-sm font-semibold shadow-sm hover:border-[var(--color-accent)] hover:shadow transition"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className=" px-4 sm:px-6 py-10 sm:py-20 bg-gradient-to-br from-[var(--color-accent)]/20 to-blue-500/20 mb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex gap-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground-light)]">
                  <CalendarDays className="h-4 w-4" />
                  진행 기간
                </div>
                <div className="text-sm sm:text-base font-semibold">
                  {project.period ?? "-"}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground-light)]">
                  <Users className="h-4 w-4" />팀 구성
                </div>
                <div className="text-sm sm:text-base font-semibold">
                  {project.teamSize ?? "-"}
                </div>
              </div>
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {project.title}
            </h1>

            <p className="mt-10 text-base sm:text-lg text-[var(--foreground-light)] leading-relaxed">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {(project.tags ?? []).map((t) => (
                <Chip key={t}>
                  <Tags className="mr-1.5 h-3.5 w-3.5 text-[var(--color-accent)]" />
                  {t}
                </Chip>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  프로젝트 보러가기
                </a>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white/50 dark:bg-gray-900/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-blue-500/10" />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 본문 */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        {project.projectIntro ? (
          <section id="intro">
            <div>
              <SectionTitle
                icon={
                  <BookOpen className="h-5 w-5 text-[var(--color-accent)]" />
                }
                title="프로젝트 소개"
              />
              <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)]">
                {project.projectIntro}
              </p>
            </div>
          </section>
        ) : null}

        {project.mainFeatures?.length ? (
          <section id="features" className="mt-15">
            <div>
              <SectionTitle
                icon={
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />
                }
                title="주요 기능"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.mainFeatures.map((feature, idx) => (
                  <div
                    key={`${feature}-${idx}`}
                    className={cn(
                      " rounded-lg border border-[var(--border)] bg-white/70 dark:bg-gray-900/40 p-5 shadow-sm",
                      "hover:border-[var(--color-accent)] hover:shadow transition",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-white text-[12px] font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {project.techStackList?.length ? (
          <section id="tech" className="mt-24">
            <SectionTitle
              icon={<Wrench className="h-5 w-5 text-[var(--color-accent)]" />}
              title="기술 스택"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project.techStackList.map((tech) => (
                <div
                  key={tech.name}
                  className="group rounded-lg border border-[var(--border)] bg-white/70 dark:bg-gray-900/40 p-4 text-center shadow-sm hover:border-[var(--color-accent)] hover:shadow transition"
                >
                  <div className="flex justify-center mb-3">
                    <Image
                      src={techIconMap[tech.name]}
                      alt={tech.name}
                      width={30}
                      height={30}
                      className="opacity-90 group-hover:opacity-100  dark:invert"
                    />
                  </div>

                  <h3 className="text-sm font-semibold">{tech.name}</h3>
                  <p className="mt-5 text-[15px] text-[var(--foreground-light)] line-clamp-2">
                    {tech.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {project.myContributions?.length ? (
          <section id="contrib" className="mt-30">
            <div>
              <SectionTitle
                icon={
                  <Sparkles className="h-5 w-5 text-[var(--color-accent)]" />
                }
                title="내가 기여한 부분"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.myContributions.map((c, idx) => (
                  <div
                    key={`${c.title}-${idx}`}
                    className={cn(
                      "rounded-lg border border-[var(--border)] bg-white/70 dark:bg-gray-900/40 p-6 shadow-sm",
                      "hover:border-[var(--color-accent)] hover:shadow transition",
                    )}
                  >
                    <div className="flex gap-3">
                      <div className="mt-0.5 h-auto w-2 items-center rounded-full bg-[var(--color-accent)]"></div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">
                          {c.title}
                        </h3>
                        {c.description ? (
                          <p className="mt-4 text-sm sm:text-base text-[var(--foreground-light)] leading-relaxed font-light">
                            {c.description}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {c.details?.length ? (
                      <ul className="mt-6 flex flex-wrap">
                        {c.details.map((d, di) => (
                          <li
                            key={`${d}-${di}`}
                            className="flex items-center gap-2 p-2"
                          >
                            <span className="mt-0.5 text-[var(--color-accent)]">
                              •
                            </span>
                            <span className="text-md text-[var(--foreground-light)] leading-relaxed">
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {project.troubleShootingList?.length ? (
          <section id="trouble" className="mt-30">
            <div>
              <SectionTitle
                icon={<Bug className="h-5 w-5 text-[var(--color-accent)]" />}
                title="트러블 슈팅"
              />

              <div className="space-y-6">
                {project.troubleShootingList.map((t, idx) => (
                  <details key={`${t.problem}-${idx}`}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-[var(--color-accent)]">
                          {t.problem}
                        </h3>
                      </div>
                      <span className="mt-1 inline-flex items-center rounded-full border border-[var(--border)] bg-white/60 dark:bg-gray-900/40 px-3 py-1 text-xs font-medium">
                        #{idx + 1}
                      </span>
                    </summary>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-[var(--border)] bg-white/50 dark:bg-gray-900/30 p-5">
                        <div className="text-lg font-semibold mb-4">
                          🔍 문제 상황
                        </div>
                        <p className="text-md  text-[var(--foreground-light)] leading-relaxed">
                          {t.description}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[var(--border)] bg-white/50 dark:bg-gray-900/30 p-5">
                        <div className="text-lg font-semibold mb-4">
                          💭 원인 분석
                        </div>
                        <p className="text-md text-[var(--foreground-light)] leading-relaxed">
                          {t.cause}
                        </p>
                      </div>

                      <div className="md:col-span-2 rounded-2xl border border-[var(--border)] bg-white/50 dark:bg-gray-900/30 p-5">
                        <div className="text-lg font-semibold mb-4">
                          ✅ 해결 방법
                        </div>
                        <p className="text-md text-[var(--foreground-light)] leading-relaxed">
                          {t.solution}
                        </p>

                        {t.code ? (
                          <div className="mt-10">
                            <div className="flex items-center justify-between gap-3">
                              <div className="text-sm font-semibold text-[var(--foreground-light)]">
                                코드 스니펫
                              </div>
                            </div>
                            <pre className="mt-2 overflow-x-auto rounded-2xl border border-[var(--border)] bg-gray-950 p-4 text-md text-gray-100">
                              <code>{t.code}</code>
                            </pre>
                          </div>
                        ) : null}
                      </div>

                      <div className="md:col-span-2 rounded-2xl border border-[var(--border)] bg-white/50 dark:bg-gray-900/30 p-5">
                        <div className="text-lg font-semibold mb-4">
                          🎉 결과
                        </div>
                        <p className="text-md text-[var(--foreground-light)] leading-relaxed">
                          {t.result}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mt-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/55 dark:bg-gray-900/35 p-6 sm:p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  다음 프로젝트도 보고 싶다면
                </h3>
                <p className="mt-1 text-sm text-[var(--foreground-light)]">
                  목록으로 돌아가 다른 작업물을 확인해보세요.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90 transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-[var(--border)] bg-white/70 dark:bg-gray-900/40 px-5 py-3 text-sm font-semibold shadow-sm hover:border-[var(--color-accent)] hover:shadow transition"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                ) : null}

                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center rounded-sm border border-[var(--border)] bg-white/70 dark:bg-gray-900/40 px-5 py-3 text-sm font-semibold shadow-sm hover:border-[var(--color-accent)] hover:shadow transition"
                >
                  목록으로
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 pb-6 text-center text-xs text-[var(--foreground-light)]">
          <span>© {new Date().getFullYear()} Portfolio</span>
        </footer>
      </main>
    </div>
  );
}
