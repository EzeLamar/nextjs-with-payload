import type { CollectionConfig } from "payload";

export const ADMINS = "admins";

const Admins: CollectionConfig = {
  slug: ADMINS,
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => false, // Prevent creating new admin accounts
    read: ({ req: { user } }) => user?.collection === ADMINS,
    update: ({ req: { user } }) => user?.collection === ADMINS, // Only allow updates for authenticated users
    delete: ({ req: { user } }) => user?.collection === ADMINS, // Only allow deletes for authenticated users
  },
  fields: [],
  hooks: {
    beforeOperation: [
      ({ operation }) => {
        // In case plugins try to create a new admin
        if (operation === "create") {
          throw new Error("User creation is disabled");
        }
      },
    ],
  },
};

export default Admins;
