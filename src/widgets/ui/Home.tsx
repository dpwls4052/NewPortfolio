const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-5"
    >
      <div className="text-center py-10 max-w-3xl">
        <div className="inline-block px-5 py-2 border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] text-sm mb-8 animate-slide-up-1">
          Frontend Developer
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-10 animate-slide-up-2">
          안녕하세요
        </h1>

        <p className="text-lg md:text-[30px] leading-relaxed mb-8 animate-slide-up-3">
          끊임없이 배워가며 성장하는{" "}
          <span className="text-[var(--color-accent)]">개발자</span>{" "}
          배예진입니다.
        </p>

        <div className="text-sm md:text-[18px] leading-relaxed text-[var(--foreground-light)] animate-slide-up-4">
          퍼블리셔에서 프론트엔드 개발자로 성장하며,
          <br />
          사용자 경험과 코드 품질을 모두 중요하게 생각합니다.
        </div>
        <button
          onClick={() => scrollToSection("projects")}
          className="relative inline-block mt-10 px-10 py-3 border border-[var(--border)] rounded-md text-md mb-8 animate-slide-up-5  bg-[rgba(255,255,255,0.15)] overflow-hidden group"
        >
          {/* 왼쪽에서 오른쪽으로 채워지는 배경 */}
          <span className="absolute inset-0 bg-[var(--color-accent)] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-in-out"></span>

          {/* 텍스트 */}
          <span className="relative font-medium text-[var(--color-accent)] dark:text-white group-hover:text-white transition-colors duration-300 inline-block">
            프로젝트 바로가기
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
