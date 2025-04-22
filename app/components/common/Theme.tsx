"use client";

import { useEffect, useState } from "react";
import { Moon, Eclipse } from "lucide-react";
import { themeStore } from "@/store/theme";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = themeStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="bg-buttons text-textPrimary absolute bottom-4 right-4 rounded p-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Eclipse color="#ffffff" /> : <Moon />}
    </button>
  );
}
