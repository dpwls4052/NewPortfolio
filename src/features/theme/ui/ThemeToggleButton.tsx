"use client";
import { useThemeStore } from "../model";
import Sun from "./SunIcon";
import Moon from "./MoonIcon";
import Button from "@/src/shared/ui/Button";
import { useState } from "react";

const ThemeToggleButton = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const [mounted, setMounted] = useState(false);

  // 첫 렌더링 후 mounted를 true로
  if (typeof window !== "undefined" && !mounted) {
    setMounted(true);
  }

  // 마운트 전에는 기본 아이콘 표시 (hydration 매칭)
  if (!mounted) {
    return (
      <Button className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 bg-[var(--color-primary)] border border-[var(--border)] hover:bg-[var(--background-light)] transition-colors">
        <Moon />
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 bg-[var(--color-primary)] border border-[var(--border)] hover:bg-[var(--background-light)] transition-colors"
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggleButton;
