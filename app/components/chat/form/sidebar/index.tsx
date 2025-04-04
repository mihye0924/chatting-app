import { FaUser } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineBell, HiOutlineBellSlash } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import sideBar from "@/store/side-bar";

const ChatSideBar = () => {
  const { active, setActive } = sideBar();

  return (
    <div className="flex justify-between flex-col flex-wrap overflow-hidden w-[70px] float-left h-[100%] bg-stone-50">
      <div className="flex-grow-[1] gap-2 flex flex-col justify-between items-center mt-[40px]">
        <FaUser
          className={`${
            active.user ? "text-[#696969]" : "text-[#d9d9d9]"
          } text-[24px] cursor-pointer`}
          onClick={() => setActive("user", !active.user)}
        />
        <IoChatbubbleSharp
          className={`${
            active.chat ? "text-[#696969]" : "text-[#d9d9d9]"
          } text-[24px] cursor-pointer`}
          onClick={() => setActive("chat", !active.chat)}
        />
        <HiDotsHorizontal
          className={`${
            active.dot ? "text-[#696969]" : "text-[#d9d9d9]"
          } text-[24px] cursor-pointer`}
          onClick={() => setActive("dot", !active.dot)}
        />
      </div>
      <div className="flex-grow-[9] flex flex-col justify-end items-center mb-[20px] gap-5">
        {!active.alarm ? (
          <HiOutlineBell
            className={`text-[24px] text-[#d9d9d9] cursor-pointer`}
            // onClick={() => setActive("alarm", "mute")}
          />
        ) : (
          <HiOutlineBellSlash
            className={`text-[24px] text-[#d9d9d9] cursor-pointer`}
            // onClick={() => setActive("alarm", "un-mute")}
          />
        )}
        <SlSettings className={`text-[22px] text-[#d9d9d9] cursor-pointer`} />
      </div>
    </div>
  );
};
export default ChatSideBar;
