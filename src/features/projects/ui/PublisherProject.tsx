"use client";
import { useIntersectionObserver } from "@/src/lib/hooks/useIntersectionObserver";
import { useRef, useState } from "react";
import Image from "next/image";
import { Mimo } from "@/src/shared/ui/icon";
import Button from "@/src/shared/ui/Button";
import Modal from "@/src/features/modal/Modal";
import { Project } from "../model/type";

type Props = {
  className?: string;
};

const PublisherProject = ({ className }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "kkpc",
      title: "금호석유화학",
      description: "방문예약시스템",
      tags: ["#PC", "#Mobile", "#반응형"],
      image: "/assets/mokup/kkpc_back.png",
      demo: "https://visit.kkpc.com/KKPC_Visitor/visitor/main.aspx",
      role: "디자인 · 퍼블리싱",
      contribution: "100%",
      skills: "HTML · CSS · JAVASCRIPT",
      summary:
        "[금호석유화학] 방문예약 시스템 프로젝트는 방문자가 온라인을 통해 원하는 날짜와 시간을 선택하여 간편하게 방문을 예약하고, 관리자가 이를 효율적으로 관리할 수 있는 서비스입니다. 이 시스템은 반응형 웹 디자인으로 구축되어 모바일 환경에서도 최적화된 사용자 경험을 제공합니다. 또한, 관리자가 예약된 출입 인원을 한눈에 파악할 수 있는 직관적인 대시보드를 구현하여 보다 효율적인 출입 관리가 가능하도록 하였습니다.",
      type: "site",
    },
    {
      id: "cloud",
      title: "관리자 클라우드",
      description: "건설사 맞춤형 관리 시스템",
      tags: ["#PC", "#Mobile", "#반응형"],
      image: "/assets/mokup/cloud.png",
      role: "퍼블리싱",
      contribution: "100%",
      skills: "HTML · CSS · JAVASCRIPT",
      summary:
        "건설사를 포함한 각 기업의 요구사항에 맞춰 관리자용 클라우드를 퍼블리싱했습니다. 방문객 관리, 근태현황(얼굴·지문 인식), 최근 방문조회, 매출관리, 위험성 평가 등 다양한 기능을 반응형으로 구현하고, 업무 흐름에 맞게 직관적인 UI로 구성해 효율적인 관리가 가능하도록 작업했습니다.",
      type: "cloud",
      photos: [
        "/assets/mokup/cloud1.png",
        "/assets/mokup/cloud2.png",
        "/assets/mokup/cloud3.png",
        "/assets/mokup/cloud4.png",
      ],
    },
    {
      id: "dashboard",
      title: "현황판 (CJ, 현대제철, 해병2사단 등)",
      description: "실시간 모니터링 대시보드",
      tags: ["#PC"],
      image: "/assets/mokup/dashboard_back.png",
      role: "디자인 · 퍼블리싱",
      contribution: "100%",
      skills: "HTML · CSS · JAVASCRIPT",
      summary:
        "다양한 기업 및 기관(CJ, 현대제철, 해병2사단, 금호석유화학 등)에 설치된 현황판은 관리자가 실시간으로 데이터를 모니터링할 수 있도록 설계된 화면입니다. 금호석유화학과 현대제철에서는 실시간 출입내역을, 해병2사단에서는 입출차 상황을, CJ에서는 제품창고 현황을 실시간으로 확인할 수 있는 기능을 제공합니다. 관리자가 정보를 한눈에 파악할 수 있도록 그래프와 표를 활용해 직관적인 화면 구성을 디자인하고 퍼블리싱을 진행했습니다. 사용성에 중점을 둔 설계를 통해 복잡한 데이터를 간단하고 명확하게 시각화했습니다.",
      type: "dashboard",
      photos: [
        "/assets/mokup/dashboard_back.png",
        "/assets/mokup/dashboard_back2.png",
        "/assets/mokup/dashboard_back3.png",
      ],
    },
    {
      id: "hyundai",
      title: "현대자동차",
      description: "출입증발급시스템",
      tags: ["#KIOSK"],
      image: "/assets/mokup/hyundai_thumbnail.png",
      role: "디자인 · 퍼블리싱",
      contribution: "90% · 100%",
      skills: "HTML · CSS · JAVASCRIPT",
      summary:
        "[현대자동차] 출입증 발급 시스템은 출입 보안을 강화하기 위해 설계된 솔루션으로, 키오스크를 통해 신분증 및 여권 인식과 휴대전화 인증을 통해 본인 확인을 진행하며, 그룹사별 맞춤 출입 절차와 출입증 반납 자동화 기능을 제공합니다. 직관적이고 간편한 UI/UX를 통해 사용자 편의성을 높였으며, 다국어 지원(영어·중국어)을 통해 외국인 사용자도 쉽게 이용할 수 있도록 설계되었습니다. 효율적인 출입 절차를 위해 시각적 요소와 인터페이스 흐름이 최적화된 시스템입니다.",
      type: "kiosk",
      kioskPhotos: [
        {
          images: [
            "/assets/mokup/hyundai_kiosk1.png",
            "/assets/mokup/hyundai_kiosk2.png",
            "/assets/mokup/hyundai_kiosk3.png",
          ],
        },
        {
          images: [
            "/assets/mokup/hyundai_kiosk4.png",
            "/assets/mokup/hyundai_kiosk5.png",
            "/assets/mokup/hyundai_kiosk6.png",
          ],
        },
      ],
    },
    {
      id: "hyundaisteel",
      title: "현대제철",
      description: "방문증발급시스템",
      tags: ["#KIOSK"],
      image: "/assets/mokup/hyundaisteel_thumbnail.png",
      role: "디자인 · 퍼블리싱",
      contribution: "80% · 100%",
      skills: "HTML · CSS · JAVASCRIPT",
      summary:
        "[현대제철] 방문증 발급 시스템은 휴대전화 번호로 예약 정보를 확인한 후, 키오스크에서 안전교육 문제를 풀고 통과 시 얼굴 촬영과 안면인식을 통해 신분증을 스캔, 보관한 후 방문증 카드를 발급하는 시스템입니다. 사용자를 위한 직관적이고 편리한 UI/UX를 설계하여 안전교육 진행과 방문증 발급 절차를 효율적으로 구현했으며, 다국어 지원을 통해 다양한 사용자들이 쉽게 접근할 수 있도록 설계되었습니다.",
      type: "kiosk",
      kioskPhotos: [
        {
          images: [
            "/assets/mokup/hyundaisteel_kiosk1.png",
            "/assets/mokup/hyundaisteel_kiosk2.png",
            "/assets/mokup/hyundaisteel_kiosk3.png",
          ],
        },
        {
          images: [
            "/assets/mokup/hyundaisteel_kiosk4.png",
            "/assets/mokup/hyundaisteel_kiosk5.png",
            "/assets/mokup/hyundaisteel_kiosk6.png",
          ],
        },
      ],
    },
    {
      id: "Gwedu",
      title: "강원특별자치도교육청교육과학정보원",
      description: "방문예약시스템",
      tags: ["#KIOSK"],
      image: "/assets/mokup/hyundaisteel_thumbnail.png",
      role: "퍼블리싱",
      contribution: "100%",
      skills: "HTML · CSS · JAVASCRIPT",
      summary:
        "[강원특별자치도교육청교육과학정보원] 방문예약 시스템은 키오스크를 활용해 방문자가 출입 목적, 담당자, 기간 등의 정보를 직접 입력하고, 보안서약서에 서명하여 출입 신청을 완료하는 서비스입니다. 이후 안내데스크에서 출입 절차를 진행할 수 있도록 설계되었습니다. 퍼블리싱 전반을 담당하며 키오스크 환경을 고려해 사용자 경험을 최적화했습니다. 특히, 가상 키보드 사용 시 화면이 자연스럽게 이동하도록 구현하여 다양한 사용자 환경에서도 불편함 없이 이용할 수 있도록 작업했습니다.",
      type: "kiosk",
      kioskPhotos: [
        {
          images: [
            "/assets/mokup/gwedu_kiosk1.png",
            "/assets/mokup/gwedu_kiosk2.png",
            "/assets/mokup/gwedu_kiosk3.png",
          ],
        },
        {
          images: [
            "/assets/mokup/gwedu_kiosk4.png",
            "/assets/mokup/gwedu_kiosk5.png",
            "/assets/mokup/gwedu_kiosk6.png",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto ${className}`}
    >
      {/* 제목 - 반응형 텍스트 크기 */}
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 md:mb-4 ${isIntersecting ? "animate-slide-up-1" : ""}`}
      >
        Publisher Projects
      </h1>
      <p
        className={`text-sm md:text-base text-center text-[var(--foreground-light)] mb-10 md:mb-16 ${isIntersecting ? "animate-slide-up-2" : ""}`}
      >
        퍼블리셔 프로젝트
      </p>

      {/* 프로젝트 그리드 - 반응형 그리드 */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 ${isIntersecting ? "animate-slide-up-3" : ""}`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer hover:scale-105 transition-transform shadow-lg rounded-2xl overflow-hidden"
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700">
              {/* 이미지 컨테이너 - 반응형 높이 */}
              <div className="flex items-center justify-center sm:h-52 h-60">
                <Image
                  width={400}
                  height={400}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 텍스트 영역 - 반응형 패딩 */}
              <div className="p-3 sm:p-4 text-center">
                <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-1">
                  {project.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <p className="text-xs text-[var(--color-accent)] mt-2">
                  {project.tags.join(" ")}
                </p>
              </div>
            </div>

            {/* 호버 오버레이 */}
            <div className="absolute inset-0 bg-[rgba(69,69,69,0.4)] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center p-4">
              <Button
                variant="accent"
                className="px-4 sm:px-6 md:px-8 py-2 bg-white text-[var(--color-accent)] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 text-xs sm:text-sm md:text-base"
              >
                자세히 보러가기
                <Mimo />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default PublisherProject;
