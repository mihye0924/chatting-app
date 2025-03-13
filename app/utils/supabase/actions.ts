"use server";

import { Provider } from "@supabase/supabase-js";
import { createClientForServer } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
    console.log(error);
  }

  redirect(data.url as string);
};

const signInWithGoogle = signInWith("google");

const signOut = async () => {
  const supabase = await createClientForServer();
  await supabase.auth.signOut();
};

export { signInWithGoogle, signOut };
