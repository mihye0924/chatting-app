import { UserProps } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create<UserProps>()(
  persist(
    (set) => ({
      user: {},
      setUser: (user) => {
        set({
          user: user,
        });
      },
    }),
    {
      name: "user",
    },
  ),
);
