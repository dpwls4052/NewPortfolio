export type FrontendProject = {
  id: number;
  title: string;
  description: string;
  detail: string;
  tags: string[];
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
    github: "https://github.com/dpwls4052/README.git",
    demo: "https://readme-kt-2025.vercel.app/",
    role: "Frontend Developer",
    period: "2025.11 - 2025.12",
    teamSize: "4명",

    // 기존 필드 (간단한 문자열)
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
      "/assets/mokup/Readme_mokup1.png",
      "/assets/mokup/Readme_mokup2.png",
      "/assets/mokup/Readme_mokup3.png",
      "/assets/mokup/Readme_mokup4.png",
    ],

    // 상세 정보 (배열/객체 구조)
    techStackList: [
      {
        name: "Nextjs",
        reason:
          "SSR과 CSR을 활용해 SEO 최적화와 빠른 초기 로딩을 구현하고, App Router로 복잡한 라우팅 구조를 효율적으로 관리했습니다.",
      },
      {
        name: "TailwindCSS",
        reason:
          "유틸리티 클래스 기반으로 일관된 디자인 시스템을 구축하고, 반응형 UI를 빠르게 구현했습니다.",
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
          "브랜치 전략과 PR 기반 코드 리뷰로 코드 품질과 변경 이력을 체계적으로 관리했습니다.",
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "NextAuth"],
    github: "https://github.com/dpwls4052/NextStep.git",
    demo: "https://nextstep-kt-2025.vercel.app/",
    role: "Frontend Developer",
    period: "2024.04 - 2024.06",
    teamSize: "4명",

    // 기존 필드
    summary:
      "학습과 프로젝트를 하나의 흐름으로 연결하고, 로드맵 공유를 통한 동기 부여 및 상호 성장을 지원하며, 개인 성장 이력을 자산화할 수 있는 IT 직군 전용 학습 관리 플랫폼입니다.",
    features: [
      "DAG 구조 기반 로드맵 작성 및 편집",
      "AI 기술 추천 시스템",
      "커뮤니티 기반 로드맵 공유",
      "진행도 추적 및 퀘스트 시스템",
    ],
    challenges: "DAG 구조 설계, Supabase 키 관리, 복잡한 노드 관계 표현",
    screenshots: [
      "/assets/mokup/Nextstep_mokup1.png",
      "/assets/mokup/Nextstep_mokup2.png",
      "/assets/mokup/Nextstep_mokup3.png",
      "/assets/mokup/Nextstep_mokup4.png",
    ],

    // 상세 정보
    techStackList: [
      {
        name: "Nextjs",
        reason:
          "SSR과 CSR을 활용해 SEO 최적화와 빠른 초기 로딩을 구현하고, App Router로 복잡한 라우팅 구조를 효율적으로 관리했습니다.",
      },
      {
        name: "TypeScript",
        reason:
          "복잡한 데이터 구조를 타입 안정성 있게 관리하여 런타임 오류를 줄이고, 팀 협업 시 개발 효율을 높였습니다.",
      },
      {
        name: "TailwindCSS",
        reason:
          "유틸리티 클래스 기반으로 일관된 디자인 시스템을 구축하고, 반응형 UI를 빠르게 구현했습니다.",
      },
      {
        name: "Supabase",
        reason:
          "PostgreSQL 기반으로 데이터 관계를 효율적으로 관리하고, RLS를 통해 사용자별 접근 제어를 구현했습니다.",
      },
      {
        name: "ReactQuery",
        reason:
          "서버 상태와 클라이언트 상태를 분리하여 데이터 캐싱과 동기화를 효율적으로 처리했습니다.",
      },
      {
        name: "Axios",
        reason:
          "공통 API 인스턴스를 구성해 요청·응답 처리와 에러 핸들링을 일관되게 관리했습니다.",
      },
      {
        name: "Figma",
        reason:
          "팀원 간 디자인 시안을 실시간으로 공유하고 피드백을 주고받으며, 일관된 UI/UX를 유지하기 위해 사용했습니다.",
      },
      {
        name: "GitHub",
        reason:
          "브랜치 전략과 PR 기반 코드 리뷰로 코드 품질과 변경 이력을 체계적으로 관리했습니다.",
      },
    ],

    projectIntro:
      "Next.js 기반 학습 관리 플랫폼 NextStep은 IT 직군의 체계적인 성장을 목표로, 학습 범위가 넓고 변화가 빠른 IT 분야에서 개인의 학습 과정과 프로젝트 진행 상황을 체계적으로 관리할 수 있도록 개발했습니다. 기존 학습 플랫폼의 단순 Todo 방식과 정보만 나열된 커뮤니티의 한계를 극복하기 위해, DAG(방향성 비순환 그래프) 구조 기반의 로드맵 시스템과 AI 기술 추천, 커뮤니티 공유 기능을 제공합니다. 이를 통해 사용자는 자신의 성장 단계를 구조화하고, 학습과 프로젝트를 하나의 흐름으로 관리하며, 다른 사용자와 로드맵을 공유하여 상호 성장할 수 있습니다. 또한 퀘스트 시스템과 포인트 기반 프로필 꾸미기를 통해 지속적인 학습 동기를 부여하고, 성장 기록을 포트폴리오로 자산화할 수 있도록 설계했습니다.",

    mainFeatures: [
      "DAG 구조 기반 워크스페이스 생성 및 노드 관리",
      "AI 추천을 통한 연관 기술 탐색",
      "IT 직군별 커뮤니티에서 로드맵 공유 및 불러오기",
      "분야별 뉴스 기사 큐레이션 및 댓글 기능",
      "퀘스트 달성 및 포인트 적립 시스템",
      "포인트로 구매 가능한 프로필 꾸미기 아이템 상점",
    ],

    myContributions: [
      {
        title: "회원가입 및 인증 시스템 구축",
        description:
          "회원 전용 기능이 많은 서비스 특성을 고려하여 NextAuth와 JWT를 활용한 인증 시스템을 설계하고, 로그인부터 세션 유지, 인증 기반 API 접근 제어까지 안정적인 사용자 인증 흐름을 구축했습니다.",
        details: [
          "NextAuth 기반 회원가입/로그인 및 세션 관리 구현",
          "JWT 검증을 통한 인증 API 보호 및 접근 제어",
          "인증 상태에 따른 페이지 접근 분기 및 보호 라우팅 처리",
        ],
      },
      {
        title: "마이페이지 및 프로필 관리 기능 구현",
        description:
          "사용자가 자신의 성장 이력과 프로필을 직접 관리하고 표현할 수 있도록 마이페이지를 중심으로 개인 정보 수정과 프로필 커스터마이징 기능을 구현했습니다.",
        details: [
          "이름, 커리어 및 경력 정보 수정·추가 기능 구현",
          "상점에서 구매한 아이템을 활용한 프로필 꾸미기 기능 개발",
          "프로필 적용 상태 관리 및 미리보기 UX 설계",
        ],
      },
      {
        title: "퀘스트 및 포인트 시스템 개발",
        description:
          "사용자의 지속적인 서비스 이용을 유도하기 위해 일일 퀘스트 기반의 보상 구조를 설계하고, 활동에 따른 포인트 적립과 내역 확인 기능을 구현했습니다.",
        details: [
          "일일 1회 퀘스트 제공 및 최초 행동 보상 로직 구현",
          "퀘스트 상태에 따른 UI 제어 및 중복 보상 방지 처리",
          "포인트 획득 및 사용 내역 조회 기능 개발",
        ],
      },
      {
        title: "상점 및 구매 흐름 구현",
        description:
          "퀘스트를 통해 획득한 포인트를 아이템 구매로 자연스럽게 연결하기 위해 상점 기능을 구현하고, 구매 내역 관리까지 포함한 사용자 보상 흐름을 완성했습니다.",
        details: [
          "포인트 기반 아이템 구매 처리 및 중복 구매 방지",
          "구매 내역 조회 기능 구현",
          "상점 구매 아이템을 프로필 커스터마이징과 연동",
        ],
      },
    ],

    troubleShootingList: [
      {
        problem: "트리 구조의 한계: 다중 선행 지식 표현 불가",
        description:
          "초기에 로드맵을 트리 구조로 설계했으나, 하나의 기술이 여러 선행 지식을 필요로 하는 경우를 표현할 수 없었습니다. 예를 들어, '풀스택 개발'을 배우려면 'JavaScript'와 'Database' 두 가지를 모두 알아야 하는데, 트리 구조에서는 하나의 노드가 하나의 부모만 가질 수 있어 이러한 관계를 표현할 수 없었습니다.",
        cause:
          "트리 구조는 각 노드가 단 하나의 부모 노드만 가질 수 있도록 제한되어 있습니다. 하지만 실제 기술 학습 과정에서는 여러 개념이 하나의 선행 지식을 공유하거나, 하나의 기술을 배우기 위해 여러 선행 지식이 필요한 경우가 빈번하게 발생합니다.",
        solution:
          "DAG(Directed Acyclic Graph, 방향성 비순환 그래프) 구조로 전환했습니다. DAG는 하나의 노드가 여러 부모 노드를 가질 수 있으면서도 순환 참조를 방지하여, 복잡한 기술 간 의존 관계를 정확하게 표현할 수 있습니다. Supabase에서 노드 간 관계를 별도 테이블로 관리하고, 순환 참조 방지 로직을 추가했습니다.",
        result:
          "사용자들이 실제 학습 경로를 더욱 현실적으로 설계할 수 있게 되었고, 여러 기술의 융합이 필요한 복잡한 로드맵도 정확하게 표현할 수 있게 되었습니다. 이를 통해 서비스의 핵심 가치인 '체계적인 학습 관리'를 효과적으로 구현할 수 있었습니다.",
        code: `// 순환 참조 방지 로직 예시
const checkCyclicDependency = (
  nodeId: string, 
  parentId: string, 
  graph: Map<string, string[]>
): boolean => {
  const visited = new Set<string>();
  const stack = [parentId];
  
  while (stack.length > 0) {
    const current = stack.pop()!;
    if (current === nodeId) return true; // 순환 발견
    
    if (!visited.has(current)) {
      visited.add(current);
      const children = graph.get(current) || [];
      stack.push(...children);
    }
  }
  
  return false;
};`,
      },
      {
        problem: "Supabase API 키 무분별 사용으로 인한 보안 위험",
        description:
          "프로젝트 초기에 Service Role Key와 Anon Key의 차이를 명확히 이해하지 못한 채 모든 기능에서 무분별하게 사용하고 있었습니다. 특히 Service Role Key가 클라이언트 코드에 노출되어 있어, 모든 데이터베이스 접근 권한이 외부에 노출될 위험이 있었습니다.",
        cause:
          "Supabase의 두 가지 주요 키에 대한 이해 부족이 원인이었습니다. Service Role Key는 모든 RLS(Row Level Security) 정책을 우회하는 관리자 권한 키이고, Anon Key는 RLS 정책을 따르는 클라이언트용 키인데, 이를 구분하지 않고 사용했습니다.",
        solution:
          "API 키 사용 기준을 명확히 정립했습니다. (1) Service Role Key는 서버 사이드에서만 사용하며, users 테이블의 민감한 정보 접근 등 특정 관리 작업에만 제한적으로 사용, (2) Anon Key는 클라이언트 사이드 모든 일반 작업에 사용하고 RLS 정책으로 보호, (3) 환경 변수 파일(.env)을 .gitignore에 추가하여 키 노출 방지, (4) 기능별로 필요한 최소 권한만 부여하는 원칙 수립",
        result:
          "보안 취약점을 제거하고, 사용자 정보에 대한 접근 권한을 최소 범위로 제한했습니다. 키 관리 기준이 명확해져 팀원들이 올바른 키를 선택하여 사용할 수 있게 되었고, 향후 유지보수 및 확장성도 크게 향상되었습니다.",
        code: `// 올바른 키 사용 예시
// 클라이언트: Anon Key 사용 (RLS 정책 적용)
const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 서버: Service Role Key 사용 (관리자 권한 필요 시에만)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // 서버 환경 변수
  { auth: { persistSession: false } }
);`,
      },
    ],
  },
];
