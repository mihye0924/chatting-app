import AuthForm from "@/components/forms/AuthForm";
import { ThemeToggle } from "@/theme/ThemeToggle";

export default async function Home() {
  return (
    <>
      <AuthForm />
      <ThemeToggle />
    </>
  );
}
