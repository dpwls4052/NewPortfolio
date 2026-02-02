"use client";

import { useRef } from "react";
import { Mail, Github, Link as LinkIcon } from "lucide-react";
import { useIntersectionObserver } from "@/src/lib/hooks/useIntersectionObserver";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-5 py-24"
    >
      {/* 배경 블러 (기존 섹션들과 톤 맞춤) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="w-full max-w-3xl">
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 md:mb-10 ${isIntersecting ? "animate-slide-up-1" : ""}`}
          >
            Contact
          </h1>
          <p
            className={`text-sm md:text-[20px] leading-[35px] text-center text-[var(--foreground-light)] mb-10 md:mb-20 ${isIntersecting ? "animate-slide-up-2" : ""}`}
          >
            실력이란 쌓아가는 것이라 믿으며, 오늘도 레벨업 중입니다. <br />
            배움의 길을 멈추지 않고, 더 나은 내일을 위해 끊임없이
            나아가겠습니다.
          </p>
        </div>

        {/* 카드 */}
        <div>
          <div
            className={`grid gap-6 ${isIntersecting ? "animate-slide-up-3" : ""}`}
          >
            {/* Email */}
            <a
              href="mailto:dpwls4052@naver.com"
              className="
                group flex items-center justify-between rounded-xl
                border border-[var(--border)]
                bg-white/70 dark:bg-gray-900/50
                px-6 py-4
                hover:border-[var(--color-accent)]
                hover:shadow transition
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-md font-semibold">Email</p>
                  <p className="text-sm text-[var(--foreground-light)]">
                    dpwls4052@naver.com
                  </p>
                </div>
              </div>
              <span className="text-xs text-[var(--foreground-light)] group-hover:text-[var(--color-accent)] transition">
                Click
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dpwls4052"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-between rounded-xl
                border border-[var(--border)]
                bg-white/70 dark:bg-gray-900/50
                px-6 py-4
                hover:border-[var(--color-accent)]
                hover:shadow transition
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-md font-semibold">GitHub</p>
                  <p className="text-sm text-[var(--foreground-light)]">
                    github.com/dpwls4052
                  </p>
                </div>
              </div>
              <LinkIcon className="h-4 w-4 text-[var(--foreground-light)] group-hover:text-[var(--color-accent)] transition" />
            </a>
          </div>

          {/* 하단 메시지 */}
          <p
            className={`mt-10 text-center text-xs text-[var(--foreground-light)] ${isIntersecting ? "animate-slide-up-4" : ""}`}
          >
            © {new Date().getFullYear()} Byejin Portfolio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
