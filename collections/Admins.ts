import type { CollectionConfig } from "payload";

export const ADMINS = "admins";

const Admins: CollectionConfig = {
  slug: ADMINS,
  admin: {
    useAsTitle: "name",
  },
  fields: [],
};

export default Admins;
