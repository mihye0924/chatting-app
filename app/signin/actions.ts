"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";

// // 구글 로그인
const signInWith = (provider: Provider) => async () => {
  const supabase = await createClient();

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

// 로그인
const signInWithEmail = async (prev: unknown, formData: FormData) => {
  const supabase = await createClient();

  const params = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(params);

  if (error) {
    revalidatePath("/signin");
    return { message: error.message };
  } else {
    redirect("/chat");
  }
};

// 회원가입
const signUpWithEmailPassword = async (prev: unknown, formData: FormData) => {
  const supabase = await createClient();

  const params = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(params);

  if (error) {
    revalidatePath("/error");
    return { message: error.message };
  } else {
    redirect("/signin");
  }
};

// 로그아웃
const signOut = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/signin");
};

export { signInWithGoogle, signOut, signUpWithEmailPassword, signInWithEmail };
