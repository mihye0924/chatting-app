import React from "react";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <>
          <span className="mr-2">Hello {session.user!.name}</span>
          <Link href="/api/auth/signout">Sign Out</Link>
        </>
      ) : (
        // <button onClick={() => signOut(session?.id)}>로그아웃</button>
        // <></>
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </div>
  );
}
