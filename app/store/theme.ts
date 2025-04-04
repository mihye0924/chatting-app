import { create } from "zustand";

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const themeStore = create<ThemeProps>((set) => ({
  theme: "light",
  setTheme: (theme: string) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export default themeStore;
