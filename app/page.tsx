import AuthForm from "@/components/auth/AuthForm";
import { createClientForServer } from "@/utils/supabase/server";
import ChatForm from "@/components/chat/ChatWrap";

const Home = async () => {
  const supabase = await createClientForServer();
  const session = await supabase.auth.getUser();

  return <>{!session.data.user ? <AuthForm /> : <ChatForm />}</>;
};
export default Home;
