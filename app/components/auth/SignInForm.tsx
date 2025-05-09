"use client";
import React, { useActionState, useState } from "react";
import { InputText } from "@/components/common/InputText";
import { Button } from "@/components/common/Button";
import { signInWithEmail } from "@/signin/actions";
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [result, formAction, isPending] = useActionState(signInWithEmail, null);

  return (
    <>
      <form action={formAction} className="mx-auto flex flex-col">
        <InputText
          type="text"
          placeholder="이메일"
          name="email"
          required
          className="border border-b-0 focus:border focus:border-b-0"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="비밀번호"
          name="password"
          required
          className="mb-1"
          onChange={(e) => setPwInput(e.target.value)}
        />
        <span className="mb-1 text-14 text-red-500">
          {result && <span>{result.message}</span>}
        </span>
        <Button
          className={`border border-gray-3 bg-black-0 text-white ${email || pwInput ? "hover:cursor-pointer hover:border hover:border-gray-5 hover:bg-gray-disabled hover:text-black-0" : ""}`}
          disabled={!email || !pwInput}
          variant="default"
          shape="square"
          size="small"
          width="full"
        >
          {isPending ? "Processing" : "로그인"}
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
