import React from "react";
import { createClientForServer } from "@/utils/supabase/server";
import { signInWithGoogle } from "@/utils/supabase/actions";

const AuthForm = async () => {
  const supabase = await createClientForServer();

  const session = await supabase.auth.getUser();

  if (!session.data.user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <form>
          <button
            formAction={signInWithGoogle}
            className="border rounded px-2.5 py-2"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    );
  }
};

export default AuthForm;
