"use client";
import { sideBarStore } from "@/store/side-bar";
import ChatHeader from "@/components/chat/ChatHeader";
import MoreLayout from "@/components/chat/layout/MoreLayout";
import UserLayout from "@/components/chat/layout/UserLayout";
import ChattingLayout from "@/components/chat/layout/ChattingLayout";
const ChatForm = () => {
  const { user, chat, more } = sideBarStore();
  return (
    <aside className="ml-[4.2rem]">
      <ChatHeader />
      {user && <UserLayout />}
      {chat && <ChattingLayout />}
      {more && <MoreLayout />}
    </aside>
  );
};
export default ChatForm;
