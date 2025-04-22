import { create } from "zustand";
import { persist } from "zustand/middleware";
type TabKey = "user" | "chat" | "dot";
export interface SideBarProps {
  user: boolean;
  chat: boolean;
  dot: boolean;
  setActive: (key: TabKey) => void;
}
export const sideBar = create<SideBarProps>()(
  persist(
    (set, get) => ({
      user: true,
      chat: false,
      dot: false,
      setActive: (key) => {
        const current = get()[key]; // 현재 상태 확인
        if (current) {
          // 이미 눌려있는 탭이면 전부 false로
          set({ user: false, chat: false, dot: false });
        } else {
          // 누른 탭만 true, 나머지는 false
          set({
            user: key === "user",
            chat: key === "chat",
            dot: key === "dot",
          });
        }
      },
    }),
    {
      name: "side-bar", // localStorage에 저장됨
    },
  ),
);

interface SideBarAlarmProps {
  alarm: boolean;
  setAlarm: (status: string) => void;
}

export const sideBarAlarm = create<SideBarAlarmProps>()(
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
