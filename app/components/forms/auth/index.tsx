import React from "react";
import { createClientForServer } from "@/utils/supabase/server";
import { signInWithGoogle } from "@/utils/supabase/actions";
import Image from "next/image";
import kakaoLogo from "@/assets/images/logo_kakao.svg";

const AuthForm = async () => {
  const supabase = await createClientForServer();

  const session = await supabase.auth.getUser();

  if (!session.data.user) {
    return (
      <div className="scrollbar-hide border-gray-1 bg-pink relative h-[600px] w-[430px] overflow-auto overflow-hidden rounded-sm border">
        <div className="absolute left-0 top-0 w-[100%] translate-y-[50%] transform">
          <Image
            src={kakaoLogo}
            width={120}
            height={120}
            className="mx-auto mb-4"
            alt="kakao"
          />
          <form className="mx-auto flex w-[250px] flex-col">
            <input type="text" aria-label="id" className="h-[30px]" />
            <input type="passwoard" aria-label="pw" />
            <input type="submit" aria-label="로그인" />
          </form>
          <div>
            <hr />
            <span>또는</span>
            <hr />
          </div>
          <form>
            <button
              formAction={signInWithGoogle}
              className="rounded border px-2.5 py-2"
            >
              Sign in with Google
            </button>
          </form>
          <input type="radio" aria-label="자동로그인"></input>
        </div>
      </div>
    );
  }
};

export default AuthForm;
