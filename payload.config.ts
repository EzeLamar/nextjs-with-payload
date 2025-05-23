// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { authjsPlugin } from "payload-authjs";
import { adminsAuthConfig } from "@/auth.admins.config";
import { customersAuthConfig } from "@/auth.customers.config";

import Admins, { ADMINS } from "@/collections/Admins";
import Customers, { CUSTOMERS } from "@/collections/Customers";
import { Media } from "@/collections/Media";
import { sendCalendarInvite } from "@/collections/actions/SendCalendarInvite";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: ADMINS,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Admins, Customers, Media],
  editor: lexicalEditor(),
  email: nodemailerAdapter({
    defaultFromAddress: "ezequiel.lamarquee@gmail.com",
    defaultFromName: "Admin Eze",
    // Nodemailer transportOptions
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
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
        hooks: {
          afterChange: [
            async ({ req: { payload }, operation, doc }) => {
              if (operation === "create") {
                const toEmail = doc.submissionData.find(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (data: any) => data.field === "email"
                )?.value;

                // Call the function to send the invite
                await sendCalendarInvite({
                  payload: payload,
                  toEmail: toEmail,
                });
              }
            },
          ],
        },
      },
      // see below for a list of available options
    }),
    // Admins Auth Config
    authjsPlugin({
      userCollectionSlug: ADMINS,
      authjsConfig: adminsAuthConfig,
    }),
    // Customers Auth Config
    authjsPlugin({
      userCollectionSlug: CUSTOMERS,
      authjsConfig: customersAuthConfig,
    }),
  ],
});
