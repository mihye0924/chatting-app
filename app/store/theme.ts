import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const themeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      theme: "",
      setTheme: (theme: string) => {
        set({
          theme,
        });
      },
    }),
    {
      name: "theme",
    }
  )
);
