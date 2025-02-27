// auth.config.ts
import { NextAuthConfig } from "next-auth";
import github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthConfig = {
  providers: [github, Google],
};
