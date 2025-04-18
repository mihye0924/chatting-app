import { FaUser } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineBell, HiOutlineBellSlash } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { sideBar, sideBarAlarm } from "@/store/side-bar";

const ChatSideBar = () => {
  const { user, chat, dot, setting, setActive } = sideBar();
  const { alarm, setAlarm } = sideBarAlarm();

  return (
    <div className="bg-gray-2 float-left flex h-[100%] w-[70px] flex-col flex-wrap justify-between overflow-hidden">
      <div className="mt-[40px] flex flex-grow-[1] flex-col items-center justify-between gap-2">
        <FaUser
          className={`${
            user ? "text-gray-5" : "text-gray-3"
          } text-24 cursor-pointer`}
          onClick={() => setActive("user")}
        />
        <IoChatbubbleSharp
          className={`${
            chat ? "text-gray-5" : "text-gray-3"
          } text-24 cursor-pointer`}
          onClick={() => setActive("chat")}
        />
        <HiDotsHorizontal
          className={`${
            dot ? "text-gray-5" : "text-gray-3"
          } text-24 cursor-pointer`}
          onClick={() => setActive("dot")}
        />
      </div>
      <div className="mb-[20px] flex flex-grow-[9] flex-col items-center justify-end gap-5">
        {!alarm ? (
          <HiOutlineBell
            className={`text-gray-3 text-24 cursor-pointer`}
            onClick={() => setAlarm("mute")}
          />
        ) : (
          <HiOutlineBellSlash
            className={`text-gray-3 text-24 cursor-pointer`}
            onClick={() => setAlarm("un-mute")}
          />
        )}
        <SlSettings
          className={`${
            setting
              ? "text-gray-5 bg-gray-4 mx-1 rounded-full px-1 text-[30px]"
              : "text-gray-3 px-1 text-[30px]"
          } cursor-pointer`}
          onClick={() => setActive("setting")}
        />
      </div>
    </div>
  );
};
export default ChatSideBar;
