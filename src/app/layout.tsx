import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import { ThemeToggleButton } from "../features/theme/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "프론트엔드 개발자 배예진의 포트폴리오입니다.",
  openGraph: {
    title: "Portfolio",
    description: "프론트엔드 개발자 배예진의 포트폴리오입니다.",
    url: "https://baeyejin-portfolio.vercel.app",
    siteName: "Portfolio",
    images: [
      {
        url: "/favicon.png", // 기존 favicon 사용
        width: 512,
        height: 512,
        alt: "배예진 포트폴리오",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning className="custom-scroll">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <ThemeToggleButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
