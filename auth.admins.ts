import { adminsAuthConfig } from "@/auth.admins.config"; // ⚠ Import the config from a separate file
import { ADMINS } from "@/collections/Admins";
import payloadConfig from "@payload-config";
import NextAuth from "next-auth";
import { withPayload } from "payload-authjs";

export const { handlers, signIn, signOut, auth } = NextAuth(
  withPayload(adminsAuthConfig, {
    userCollectionSlug: ADMINS,
    payloadConfig,
  })
);
