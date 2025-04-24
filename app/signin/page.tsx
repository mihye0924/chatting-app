"use client";
import Image from "next/image";
import kakaoLogo from "@/assets/images/logo_kakao.svg";
import { InputText } from "@/components/common/InputText";
import SignInForm from "@/components/auth/SignInForm";
import { Button } from "@/components/common/Button";
import { signInWithGoogle } from "@/utils/supabase/actions";
const SignIn = () => {
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
        <SignInForm />

        <div className="relative mx-auto my-3">
          <span className="block text-center text-14 font-light text-black-0 before:absolute before:left-0 before:top-[50%] before:h-[1px] before:w-[105px] before:translate-y-[50%] before:bg-gray-6 before:content-[''] after:absolute after:top-[50%] after:ml-2 after:h-[1px] after:w-[105px] after:translate-y-[50%] after:bg-gray-6 after:content-['']">
            또는
          </span>
        </div>
        <div className="mx-auto">
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
        <div className="mx-auto mt-2">
          <InputText type="radio" id="save-login" label="자동로그인" />
        </div>
      </div>
      <ul className="absolute bottom-10 left-1/2 flex w-[220px] translate-x-[-50%] items-center justify-between">
        <li className="relative after:absolute after:right-[-12px] after:top-[calc(50%-3px)] after:block after:h-[10px] after:w-[1px] after:translate-x-[-50%] after:bg-gray-6 after:content-['']">
          <a href="/signup" className="text-14 font-light text-black-0">
            회원가입
          </a>
        </li>
        <li className="relative after:absolute after:right-[-12px] after:top-[calc(50%-3px)] after:block after:h-[10px] after:w-[1px] after:translate-x-[-50%] after:bg-gray-6 after:content-['']">
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

export default SignIn;
