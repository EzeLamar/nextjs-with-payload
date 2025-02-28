// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { authjsPlugin } from "payload-authjs";
import { authConfig } from "./auth.config";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    formBuilderPlugin({
      fields: {
        payment: false,
      },
      formOverrides: {
        admin: {
          group: "Forms",
        },
        access: {
          read: () => true,
          create: ({ req: { user } }) => !!user, // authenticated users only
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: "Forms",
        },
        access: {
          read: ({ req: { user } }) => !!user, // authenticated users only
          create: ({ req: { user } }) => !!user, // authenticated users only
        },
      },
      // see below for a list of available options
    }),
    authjsPlugin({
      authjsConfig: authConfig,
    }),
    // storage-adapter-placeholder
  ],
});
