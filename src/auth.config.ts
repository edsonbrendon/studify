import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
    }),
  ],
} satisfies NextAuthConfig;

export default authConfig;