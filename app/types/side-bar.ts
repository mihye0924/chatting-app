export type TabKey = "user" | "chat" | "more";
export interface SideBarProps {
  user: boolean;
  chat: boolean;
  more: boolean;
  setActive: (key: TabKey) => void;
}

export interface SideBarAlarmProps {
  alarm: boolean;
  setAlarm: (status: string) => void;
}
