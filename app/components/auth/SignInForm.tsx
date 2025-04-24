"use client";
import React, { useActionState, useCallback, useEffect, useState } from "react";
import { signinWithEmailPassword } from "@/utils/supabase/actions";
import { InputText } from "@/components/common/InputText";
import { userStore } from "@/store/user";
import { useRouter } from "next/navigation";
import { Button } from "../common/Button";
type DataTypes = { user?: object; message?: string };
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [pwInput, setPwInput] = useState("");
  const { setUser } = userStore();
  const router = useRouter();
  const [result, formAction, isPending] = useActionState(
    signinWithEmailPassword,
    null,
  );
  const [data, setData] = useState<DataTypes>({});
  useEffect(() => {
    if (result) {
      setData(result);
    }
    if (data.user) {
      setUser(data.user);
      router.push("/chat");
    }
  }, [data, result, router, setUser]);

  const handleSubmit = useCallback(
    (formData: FormData) => {
      formAction(formData);
    },
    [formAction],
  );
  return (
    <>
      <form action={handleSubmit} className="mx-auto flex flex-col">
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
