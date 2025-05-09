"use client";
import { signOut } from "@/signin/actions";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const Setting = () => {
  const router = useRouter();
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
      // console.log("target: ", e.currentTarget.innerText);
      switch (e.currentTarget.innerText) {
        case "환경설정":
          break;
        case "잠금모드":
          router.push("/lock");
          break;
        case "로그아웃":
          localStorage.removeItem("user");
          signOut();
          break;
        default:
          return false;
      }
    },
    [router],
  );
  return (
    <div className="absolute bottom-[20px] left-[55px] rounded-[0.5rem] bg-black-opacity p-1 text-sm">
      {items.map((item) => (
        <button
          className="cursor-pointer px-2 text-white hover:rounded-[0.2rem] hover:bg-white hover:text-black-0"
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
