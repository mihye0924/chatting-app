"use client";
import React from "react";
import Image from "next/image";
import kakaoLogo from "@/assets/images/logo_kakao.svg";
import SignUpForm from "@/components/auth/SignUpForm";
const SignUp = () => {
  return (
    <div className="relative h-[600px] w-[430px] rounded-sm border border-gray-1 bg-lightgray scrollbar-hide">
      <div className="absolute left-1/2 top-1/2 w-[250px] translate-x-[-50%] translate-y-[-55%] transform">
        <Image
          src={kakaoLogo}
          width={120}
          height={120}
          className="mx-auto mb-4"
          alt="kakao"
        />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
