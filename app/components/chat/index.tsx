"use client";
import ChatSideBar from "@/components/chat/form/sidebar";
import ChatForm from "@/components/chat/form";
import "@/styles/chat.css";

const ChatWrap = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl w-[430px] h-[600px] border border-zinc-200">
      <ChatSideBar />
      <ChatForm />
      {/* <ThemeToggle /> */}
    </div>
  );
};
export default ChatWrap;
