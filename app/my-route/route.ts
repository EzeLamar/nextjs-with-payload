import { ADMINS } from "@/collections/Admins";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { getPayloadSession } from "payload-authjs";

export const GET = async () => {
  const adminSession = await getPayloadSession({
    userCollectionSlug: ADMINS,
  });

  if (!adminSession) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "customers",
  });

  return Response.json(data);
};
