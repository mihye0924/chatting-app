import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  console.log(session, "auth");

  if (!session) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
