import AuthForm from "@/components/forms/auth/index";
import ChatForm from "@/components/chat";
export default async function Home() {
  return (
    <>
      <AuthForm />
      <ChatForm />
    </>
  );
}
