"use client";

import { sideBarStore } from "@/store/side-bar";

const ChatHeader = () => {
  const { user, chat, more } = sideBarStore();
  return (
    <header className="h-[40px] border-none">
      <h1 className="inline pl-4 font-semibold leading-[40px]">
        {user && "친구"}
        {chat && "채팅"}
        {more && "더보기"}
      </h1>
    </header>
  );
};
export default ChatHeader;
