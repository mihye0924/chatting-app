"use server";

import { Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClientForServer } from "./server";

// 구글 로그인
const signInWith = (provider: Provider) => async () => {
  const supabase = await createClientForServer();

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });
  if (error) {
    console.log(error, "error");
  }
  redirect(data.url as string);
};
const signInWithGoogle = signInWith("google");

// 로그아웃
const signOut = async () => {
  const supabase = await createClientForServer();
  await supabase.auth.signOut();
  redirect("/signin");
};

// email,pw 회원가입
const signupWithEmailPassword = async (prev: unknown, formData: FormData) => {
  const supabase = await createClientForServer();

  const { error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    console.log(error);
    revalidatePath("/signup");
    return { message: error.message };
  } else redirect("/chat");
};

// email,pw 로그인
const signinWithEmailPassword = async (prev: unknown, formData: FormData) => {
  const supabase = await createClientForServer();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });
  if (error) {
    revalidatePath("/signin");
    return { message: error.message };
  } else {
    return { user: data.user };
  }
};
export {
  signInWithGoogle,
  signOut,
  signupWithEmailPassword,
  signinWithEmailPassword,
};
