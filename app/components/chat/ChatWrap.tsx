"use client";
import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatForm from "@/components/chat/ChatForm";
import { useEffect, useState } from "react";

const ChatWrap = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F5" ||
        (e.ctrlKey && e.key === "r") ||
        (e.metaKey && e.key === "r")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="relative h-[600px] w-[430px] rounded-sm border border-gray-1">
      <ChatSideBar />
      <ChatForm />
    </div>
  );
};
export default ChatWrap;
