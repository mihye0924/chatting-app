import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { auth, handlers } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, // .env 파일에 저장한 클라이언트 ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // .env 파일에 저장한 클라이언트 Secret
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  // session: { strategy: "jwt" },
  // callbacks: {
  //   async session({ session, token }) {
  //     if (session.user?.name) session.user.name = token.name;
  //     return session;
  //   },
  // },
});
