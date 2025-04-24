"use client";
import { useActionState, useState } from "react";
import Image from "next/image";
import profileDefault from "@/assets/images/profile_default.jpeg";
import { InputText } from "@/components/common/InputText";
import { Button } from "@/components/common/Button";
import { signinWithEmailPassword } from "@/utils/supabase/actions";
// import { user } from "@/store/user";

const LockForm = () => {
  const [pwInput, setPwInput] = useState("");
  const [error, formAction, isPending] = useActionState(
    signinWithEmailPassword,
    null,
  );
  return (
    <>
      <Image
        src={profileDefault}
        width={120}
        height={120}
        className="mx-auto overflow-hidden rounded-lg"
        alt="profile_default"
      />
      {/* <p className="mb-8 mt-4 text-14">{email}</p> */}
      <p className="mb-4 font-bold">잠금모드 상태입니다.</p>
      <form action={formAction}>
        <InputText type="hidden" name="email" />
        <InputText
          type="password"
          name="password"
          placeholder="비밀번호"
          className="mb-1"
          required
          onChange={(e) => setPwInput(e.target.value)}
        />
        <span className="my-1 block text-left text-14 text-red-500">
          {error && <span>{error.message}</span>}
        </span>
        <Button
          disabled={!pwInput}
          variant="default"
          shape="square"
          size="small"
          width="full"
        >
          {isPending ? "Processing" : "확인"}
        </Button>
      </form>
    </>
  );
};
export default LockForm;
