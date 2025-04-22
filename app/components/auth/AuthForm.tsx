"use client";
import React, { useState } from "react";
import { signInWithGoogle } from "@/utils/supabase/actions";
import Image from "next/image";
import kakaoLogo from "@/assets/images/logo_kakao.svg";
import { Button } from "@/components/common/Button";
import { InputText } from "@/components/common/InputText";
const AuthForm = () => {
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("ID:", idInput, "Password:", pwInput);
  };

  return (
    <div className="bg-lightgray relative h-[600px] w-[430px] rounded-sm border border-gray-1 scrollbar-hide">
      <div className="absolute top-1/2 w-[100%] translate-y-[-55%] transform">
        <Image
          src={kakaoLogo}
          width={120}
          height={120}
          className="mx-auto mb-4"
          alt="kakao"
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-[250px] flex-col"
        >
          <InputText
            type="text"
            placeholder="아이디"
            required
            className="border border-b-0 focus:border focus:border-b-0"
            onChange={(e) => setIdInput(e.target.value)}
          />
          <InputText
            type="password"
            placeholder="비밀번호"
            required
            className="mb-2"
            onChange={(e) => setPwInput(e.target.value)}
          />
          <InputText
            type="submit"
            value="로그인"
            className={`border border-gray-3 bg-white hover:bg-gray-disabled ${idInput || pwInput ? "hover:cursor-pointer hover:border hover:border-gray-5" : ""}`}
            disabled={!idInput || !pwInput}
          />
        </form>
        <div className="relative mx-auto my-3 w-[250px]">
          <span className="after:bg-gray-6 before:bg-gray-6 block text-center text-14 font-light text-black-0 before:absolute before:left-0 before:top-[50%] before:h-[1px] before:w-[105px] before:translate-y-[50%] before:content-[''] after:absolute after:top-[50%] after:ml-2 after:h-[1px] after:w-[105px] after:translate-y-[50%] after:content-['']">
            또는
          </span>
        </div>
        <div className="mx-auto w-[250px]">
          <Button
            onClick={signInWithGoogle}
            variant="default"
            shape="square"
            size="small"
            width="full"
          >
            Google 로그인
          </Button>
        </div>
        <div className="mx-auto mt-2 w-[250px]">
          <InputText type="radio" id="save-login" label="자동로그인" />
        </div>
      </div>
      <ul className="absolute bottom-10 left-1/2 flex w-[220px] translate-x-[-50%] items-center justify-between">
        <li className="after:bg-gray-6 relative after:absolute after:right-[-12px] after:top-[calc(50%-3px)] after:block after:h-[10px] after:w-[1px] after:translate-x-[-50%] after:content-['']">
          <a href="/join" className="text-14 font-light text-black-0">
            회원가입
          </a>
        </li>
        <li className="after:bg-gray-6 relative after:absolute after:right-[-12px] after:top-[calc(50%-3px)] after:block after:h-[10px] after:w-[1px] after:translate-x-[-50%] after:content-['']">
          <a href="#" className="text-14 font-light text-black-0">
            계정 찾기
          </a>
        </li>
        <li>
          <a href="#" className="text-14 font-light text-black-0">
            비밀번호 재설정
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AuthForm;
