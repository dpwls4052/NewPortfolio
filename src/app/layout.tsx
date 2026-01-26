import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import { ThemeToggleButton } from "../features/theme/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "프론트엔드 개발자 배예진의 포트폴리오 웹사이트",
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
