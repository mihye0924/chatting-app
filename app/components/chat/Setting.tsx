"use client";
import { signOut } from "@/utils/supabase/actions";
import { useCallback } from "react";

const Setting = () => {
  const items = [
    {
      id: 1,
      name: "환경설정",
    },
    {
      id: 2,
      name: "잠금모드",
    },
    {
      id: 3,
      name: "로그아웃",
    },
  ];

  const handleSetting = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e.currentTarget.innerText, "item");
      switch (e.currentTarget.innerText) {
        case "환경설정":
          break;
        case "잠금모드":
          break;
        case "로그아웃":
          signOut();
          break;
        default:
          return false;
      }
    },
    [],
  );
  return (
    <div className="bg-black-opacity absolute bottom-[20px] left-[55px] rounded-[0.5rem] p-1 text-sm">
      {items.map((item) => (
        <button
          className="hover:text-black-0 cursor-pointer px-2 text-white hover:rounded-[0.2rem] hover:bg-white"
          key={item.id}
          onClick={(e) => handleSetting(e)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
export default Setting;
