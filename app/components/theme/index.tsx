"use client";

import { useEffect, useState } from "react";
import { Moon, Eclipse } from "lucide-react";
import themeStore from "@/store/theme";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = themeStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="absolute bottom-4 right-4 p-2 bg-buttons text-textPrimary rounded"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Eclipse color="#ffffff" /> : <Moon />}
    </button>
  );
}
