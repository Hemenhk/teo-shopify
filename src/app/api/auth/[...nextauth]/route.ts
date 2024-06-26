import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import Auth from "@/schema/adminAuthSchema";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        await connectToDatabase();
        if (!credentials) {
          throw new Error("Credentials are missing");
        }

        const { email, password } = credentials as any;
        const adminUser = await Auth.findOne({
          email: email,
        }).select("+password");

        if (!adminUser) {
          throw new Error("No admin was found");
        }

        const validPassword = await verifyPassword(
          password || "",
          adminUser.password
        );

        if (!validPassword) {
          throw new Error("Password was incorrect!");
        }

        if (validPassword) {
          console.log(validPassword);
          return {
            id: adminUser._id,
            email: adminUser.email,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET, 
});

export { handler as GET, handler as POST };
