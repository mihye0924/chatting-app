import { SideBarAlarmProps, SideBarProps } from "@/types/side-bar";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const sideBarStore = create<SideBarProps>()(
  persist(
    (set) => ({
      user: true,
      chat: false,
      more: false,
      setActive: (key) => {
        set({
          user: key === "user",
          chat: key === "chat",
          more: key === "more",
        });
      },
    }),
    {
      name: "side-bar", // localStorage에 저장됨
    },
  ),
);

export const sideBarAlarmStore = create<SideBarAlarmProps>()(
  persist(
    (set) => ({
      alarm: false,
      setAlarm: (status: string) => {
        set({ alarm: status === "mute" ? true : false });
      },
    }),
    {
      name: "alarm", // localStorage 키 이름
    },
  ),
);
