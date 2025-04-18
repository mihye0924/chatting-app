"use client";
import ChatSideBar from "@/components/chat/form/sidebar";
import ChatForm from "@/components/chat/form";
import { useEffect, useState } from "react";

const ChatWrap = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // F5, Ctrl+R, Command+R 방지
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
    <div className="border-gray-1 relative h-[600px] w-[430px] overflow-hidden rounded-sm border">
      <ChatSideBar />
      <ChatForm />
      {/* <ThemeToggle /> */}
    </div>
  );
};
export default ChatWrap;
