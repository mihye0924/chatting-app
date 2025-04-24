"use client";
import { FaUser } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineBell, HiOutlineBellSlash } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { sideBarStore, sideBarAlarmStore } from "@/store/side-bar";
import { useState } from "react";
import Setting from "@/components/chat/Setting";

const ChatSideBar = () => {
  const { user, chat, more, setActive } = sideBarStore();
  const { alarm, setAlarm } = sideBarAlarmStore();
  const [setting, setSetting] = useState(false);

  return (
    <div className="float-left flex h-[100%] w-[70px] flex-col flex-wrap justify-between overflow-hidden bg-gray-2">
      <div className="mt-[40px] flex flex-grow-[1] flex-col items-center justify-between gap-2">
        <FaUser
          className={`${
            user ? "text-gray-5" : "text-gray-3"
          } cursor-pointer text-24`}
          onClick={() => setActive("user")}
        />
        <IoChatbubbleSharp
          className={`${
            chat ? "text-gray-5" : "text-gray-3"
          } cursor-pointer text-24`}
          onClick={() => setActive("chat")}
        />
        <HiDotsHorizontal
          className={`${
            more ? "text-gray-5" : "text-gray-3"
          } cursor-pointer text-24`}
          onClick={() => setActive("more")}
        />
      </div>
      <div className="mb-[20px] flex flex-grow-[9] flex-col items-center justify-end gap-5">
        {!alarm ? (
          <HiOutlineBell
            className="cursor-pointer text-24 text-gray-3"
            onClick={() => setAlarm("mute")}
          />
        ) : (
          <HiOutlineBellSlash
            className="cursor-pointer text-24 text-gray-3"
            onClick={() => setAlarm("un-mute")}
          />
        )}
        <SlSettings
          className={`${
            setting
              ? "mx-1 rounded-full bg-gray-4 px-1 text-[30px] text-gray-5"
              : "px-1 text-[30px] text-gray-3"
          } relative cursor-pointer`}
          onClick={() => setSetting(!setting)}
        />
        {setting && <Setting />}
      </div>
    </div>
  );
};
export default ChatSideBar;
