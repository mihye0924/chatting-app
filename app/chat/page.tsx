"use client";
import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatForm from "@/components/chat/ChatForm";
import { useEffect, useState } from "react";
import { userStore } from "@/store/user";

const Chat = () => {
  const [mounted, setMounted] = useState(false);
  const { user } = userStore();

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
    console.log("user: ", user);
    setMounted(true);
  }, [user]);

  if (!mounted) return null;
  return (
    <div className="relative h-[600px] w-[430px] rounded-sm border border-gray-1">
      <ChatSideBar />
      <ChatForm />
    </div>
  );
};
export default Chat;
