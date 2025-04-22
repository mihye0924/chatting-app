"use client";
import React, { useState } from "react";
import Image from "next/image";
import kakaoLogo from "@/assets/images/logo_kakao.svg";
import { Button } from "@/components/common/Button";
import { InputText } from "@/components/common/InputText";
// import { useRouter } from "next/router";
const AuthForm = () => {
  // const router = useRouter();
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
            value="회원가입"
            className={`mb-2 border border-gray-3 bg-black-0 text-white hover:bg-gray-disabled hover:text-black-0 ${idInput || pwInput ? "hover:cursor-pointer hover:border hover:border-gray-5" : ""}`}
            disabled={!idInput || !pwInput}
          />
          <Button
            variant="default"
            shape="square"
            size="small"
            width="full"
            // onClick={() => router.push("/")}
          >
            뒤로가기
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
