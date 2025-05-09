"use client";
import React, { useActionState, useState } from "react";
import { Button } from "@/components/common/Button";
import { InputText } from "@/components/common/InputText";
import { useRouter } from "next/navigation";
import { signUpWithEmailPassword } from "@/signin/actions";

const AuthForm = () => {
  const router = useRouter();
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [error, formAction, isPending] = useActionState(
    signUpWithEmailPassword,
    null,
  );

  return (
    <form action={formAction} className="mx-auto flex flex-col">
      <InputText
        type="text"
        name="email"
        placeholder="이메일"
        required
        className="border border-b-0 focus:border focus:border-b-0"
        onChange={(e) => setIdInput(e.target.value)}
      />
      <InputText
        type="password"
        name="password"
        placeholder="비밀번호"
        required
        className="mb-1"
        onChange={(e) => setPwInput(e.target.value)}
      />
      <span className="mb-1 text-14 text-red-500">
        {error && <span>{error.message}</span>}
      </span>
      <Button
        variant="default"
        shape="square"
        size="small"
        width="full"
        className={`mb-2 border border-gray-3 bg-black-0 text-white hover:bg-gray-disabled hover:text-black-0 ${idInput || pwInput ? "hover:cursor-pointer hover:border hover:border-gray-5" : ""}`}
        disabled={!idInput || !pwInput}
      >
        {isPending ? "Processing" : "회원가입"}
      </Button>
      <Button
        variant="default"
        shape="square"
        size="small"
        width="full"
        onClick={() => router.push("/signin")}
      >
        뒤로가기
      </Button>
    </form>
  );
};

export default AuthForm;
