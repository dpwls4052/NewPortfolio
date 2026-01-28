export type FrontendProject = {
  id: number;
  title: string;
  description: string;
  detail: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  role?: string;
  period?: string;
  teamSize?: string;
  techStack?: string;
  projectIntro?: string;
  skills?: string;
  summary?: string;
  features?: string[];
  screenshots?: string[];
  challenges?: string;
  learned?: string;
};

// 상세 정보를 위한 확장 타입들
export type TechStackItem = {
  name: string;
  reason: string;
};

export type ProjectIntroDetail = {
  problem: string;
  solution: string;
  goals: string[];
  achievements: string[];
};

export type FeatureCategory = {
  category: string;
  features: string[];
};

export type Contribution = {
  title: string;
  description: string;
  details: string[];
};

export type TroubleshootingItem = {
  problem: string;
  description: string;
  cause: string;
  solution: string;
  result: string;
  code?: string;
};

// 기존 FrontendProject 타입에 상세 정보 추가
export type FrontendProjectWithDetails = FrontendProject & {
  techStackList?: TechStackItem[];
  projectIntroDetail?: ProjectIntroDetail;
  mainFeatures?: string[];
  myContributions?: Contribution[];
  troubleShootingList?: TroubleshootingItem[];
};

export const frontendProjects: FrontendProjectWithDetails[] = [
  {
    id: 1,
    title: "README",
    description: "온라인 서점 플랫폼",
    detail: "사용자가 도서를 검색하고 구매할 수 있는 온라인 서점 플랫폼입니다",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "Firebase"],
    image: "/assets/mokup/kkpc_back.png",
    github: "https://github.com/yourusername/readme",
    demo: "https://readme-kt-2025.vercel.app/",
    role: "Frontend Developer",
    period: "2025.11 - 2025.12",
    teamSize: "4명",

    // 기존 필드 (간단한 문자열)
    techStack:
      "Next.js, Tailwind CSS, JavaScript, Supabase, Firebase, Figma, GitHub",
    skills: "Next.js, JavaScript, Supabase, Tailwind CSS",
    summary:
      "사용자가 책을 빠르고 편리하게 찾고 구매할 수 있는 직관적인 UX와, 관리자가 효율적으로 업무를 처리할 수 있는 통합 관리 시스템을 제공하는 온라인 서점 플랫폼입니다.",
    features: [
      "도서 검색 및 필터링 기능",
      "장바구니 및 결제 시스템",
      "사용자 리뷰 및 평점 시스템",
    ],
    challenges:
      "헤더 카운트 업데이트, Git 충돌 해결, 대용량 데이터 로딩 최적화",
    screenshots: [
      "/assets/mokup/kkpc_back.png", // 메인 페이지 - 베스트셀러 섹션
      "/assets/mokup/kkpc_back.png", // 상품 목록 페이지
      "/images/readme-detail.png", // 상품 상세 페이지
      "/images/readme-cart.png", // 장바구니 페이지
    ],

    // 상세 정보 (배열/객체 구조)
    techStackList: [
      {
        name: "Nextjs",
        reason:
          "SSR과 CSR을 효과적으로 활용하여 SEO 최적화와 빠른 초기 로딩 속도를 구현하기 위해 선택했습니다. App Router를 통해 API 라우팅과 페이지 관리를 통합하여 개발 효율성을 높였습니다.",
      },
      {
        name: "TailwindCSS",
        reason:
          "빠른 프로토타이핑과 일관된 디자인 시스템 구축이 가능하며, 유틸리티 클래스 기반으로 자유로운 커스터마이징이 가능하여 선택했습니다.",
      },
      {
        name: "JavaScript",
        reason:
          "팀원 모두가 익숙한 언어로 협업 속도를 높이고, 빠른 개발 진행을 위해 선택했습니다.",
      },
      {
        name: "Supabase",
        reason:
          "PostgreSQL 기반의 실시간 데이터베이스로, 백엔드 구축 없이도 복잡한 쿼리와 관계형 데이터를 효율적으로 관리할 수 있어 선택했습니다.",
      },
      {
        name: "Firebase",
        reason:
          "간편한 사용자 인증 시스템과 이메일 인증, 비밀번호 재설정 등의 기능을 빠르게 구현하기 위해 선택했습니다.",
      },
      {
        name: "Figma",
        reason:
          "팀원 간 디자인 시안을 실시간으로 공유하고 피드백을 주고받으며, 일관된 UI/UX를 유지하기 위해 사용했습니다.",
      },
      {
        name: "GitHub",
        reason:
          "Git 브랜치 전략을 통한 효율적인 협업과 PR 기반 코드 리뷰로 코드 품질을 유지하기 위해 사용했습니다.",
      },
    ],

    // 프로젝트 소개 (간단하게)
    projectIntro:
      "Next.js 기반 온라인 서점 플랫폼 README는 “새로운 책과 만나는 즐거움”을 목표로, 사용자가 빠르고 편리하게 책을 검색·구매할 수 있는 UX를 중심으로 개발했습니다. 기존 서점의 복잡한 구매 흐름과 분산된 관리 업무를 개선하기 위해 검색/구매 경험을 단순화하고, 재고·배송·리뷰를 한곳에서 처리하는 관리자 전용 페이지를 제공했습니다. 또한 Firebase 인증 + Supabase 데이터 관리 + Next.js(App Router) 구조로 프론트-백 연동과 SSR/CSR 이해를 강화하며 실무형 개발 경험을 쌓았습니다. 확장 가능한 구조로 설계해 향후 기능 추가와 서비스 고도화가 용이하도록 구성했습니다.",
    // 주요 기능 (간단하게)
    mainFeatures: [
      "판매량 기반 베스트셀러 및 카테고리별 도서 검색",
      "장바구니 수량 관리 및 재고 기반 구매 제어",
      "토스 페이먼츠 연동 결제 및 주문 관리",
      "구매자 전용 리뷰 작성 및 평점 시스템",
    ],

    myContributions: [
      {
        title: "공통 UI 컴포넌트 및 전체 UI 다듬기",
        description:
          "서비스 전반의 UX 완성도를 높이기 위해 공통 UI 컴포넌트를 구현 및 화면 전반의 디테일을 정리했습니다. 사용자 행동에 즉각적인 피드백을 줄 수 있도록 모달, 토스트, 스켈레톤 UI를 적용했습니다.",
        details: [
          "모달, 토스트 등 공통 UI 컴포넌트 구현",
          "전체 페이지 UI 디테일 및 인터랙션 정리",
          "데이터 로딩 시 스켈레톤 적용으로 체감 UX 개선",
        ],
      },
      {
        title: "리뷰 관리 기능 구현",
        description:
          "사용자가 작성한 리뷰를 효율적으로 관리할 수 있도록 리뷰 조회, 등록, 수정, 삭제 기능을 구현했습니다. 리뷰 상태에 따라 화면을 분리하여 관리 편의성과 가독성을 높였습니다.",
        details: [
          "구매 이력 기반 리뷰 작성 권한 검증",
          "한 주문번호 내 동일 도서 1회 리뷰 제한 로직",
          "리뷰 조회 / 등록 / 수정 / 삭제 기능 구현",
          "리뷰 상태별 UI 분리로 가독성 개선",
        ],
      },
      {
        title: "홈 화면 베스트셀러 데이터 처리",
        description:
          "실제 판매 데이터를 기반으로 베스트셀러 도서를 노출하기 위해 판매량 기준 정렬 로직을 구현하고, 페이지 진입 시 서버의 최신 데이터를 조회하도록 구성했습니다.",
        details: [
          "판매량(sales count) 기준 도서 정렬",
          "베스트셀러 영역 UI 구성",
          "페이지 로드 시 최신 데이터 조회 방식 적용",
        ],
      },
      {
        title: "도서 검색 기능 구현",
        description:
          "사용자가 도서 제목과 저자 정보를 기준으로 원하는 책을 빠르고 직관적으로 찾을 수 있도록 검색 기능을 구현하고, 검색 흐름 전반의 사용성을 고려한 UX를 적용했습니다.",
        details: [
          "도서 제목, 저자 기준 검색 기능 구현",
          "검색 결과 실시간 반영",
          "검색 결과 없을 경우 사용자 안내 UI 제공",
        ],
      },
    ],

    troubleShootingList: [
      {
        problem: "Git Rebase 중 작업 코드 손실 이슈",
        description:
          "팀원이 rebase 작업 중 그날 작성한 코드가 모두 사라진 것처럼 보이는 문제가 발생했습니다. 코드가 실제로 삭제된 것으로 착각하여 당황했습니다.",
        cause:
          "rebase 과정에서 충돌이 발생했을 때, Git이 변경사항을 임시로 stash 영역에 숨겨놓은 것이었습니다. 충돌 해결 방법을 몰라 코드가 손실된 것으로 오인했습니다.",
        solution:
          "`git status` 명령어로 충돌 파일 목록을 확인하고, 충돌 마커(<<<<<<<, =======, >>>>>>>)를 찾아 직접 코드를 비교하며 해결했습니다. 충돌 해결 후 `git rebase --continue`로 작업을 완료했습니다.",
        result:
          "Git의 충돌 해결 프로세스를 이해하게 되었고, 이후 비슷한 상황이 발생해도 침착하게 대응할 수 있게 되었습니다. 팀 내에서 Git 사용 가이드를 작성하여 공유하기도 했습니다.",
        code: `# 충돌 확인
git status

# 충돌 파일 수동 수정 후
git add <충돌파일>

# rebase 계속 진행
git rebase --continue`,
      },
    ],
  },
  {
    id: 2,
    title: "NextStep",
    description: "IT 직군간 로드맵을 작성 및 공유하는 플랫폼",
    detail:
      "IT 직군 간 학습 로드맵을 작성하고 공유할 수 있는 협업 플랫폼입니다.",
    tags: ["React", "Next.js", "TypeScript", "Supabase"],
    image: "/images/nextstep-mockup.png",
    github: "https://github.com/yourusername/nextstep",
    demo: "https://nextstep-kt-2025.vercel.app/",
    role: "Frontend Lead",
    period: "2024.04 - 2024.06",
    teamSize: "5명",
    skills: "Next.js, TypeScript, Supabase, Tailwind CSS",
    summary: "IT 직군 로드맵 공유 플랫폼 프로젝트입니다.",
    features: [
      "로드맵 작성 및 편집 기능",
      "사용자 간 로드맵 공유",
      "진행도 추적 시스템",
    ],
    screenshots: ["/images/nextstep-1.png", "/images/nextstep-2.png"],
    challenges: "복잡한 로드맵 구조를 효율적으로 표현",
    learned: "TypeScript와 Next.js의 고급 기능 활용",
  },
];
