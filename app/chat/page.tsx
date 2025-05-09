"use client";
import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatForm from "@/components/chat/ChatForm";
import { userStore } from "@/store/user";
import { createClient } from "@/utils/supabase/client";
import { CSSProperties, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Chat = () => {
  const router = useRouter();
  const { user, setUser } = userStore();
  const [loading, setLoading] = useState(true);
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
    const getUserList = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.log(error);
      } else {
        setUser(data.user);
      }
    };
    getUserList();
  }, [setUser]);

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    } else {
      setTimeout(() => {
        router.push("/chat");
        setLoading(false);
      }, 1000);
    }
  }, [user, router]);

  return !loading ? (
    <div className="relative h-[600px] w-[430px] rounded-sm border border-gray-1">
      <ChatSideBar />
      <ChatForm />
    </div>
  ) : (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", zIndex: 50 }}
    >
      <ClipLoader
        color="#ffffff"
        loading={true}
        cssOverride={override}
        size={60}
      />
    </div>
  );
};
export default Chat;
