import config from "@/payload.config";
import { getPayload } from "payload";
import { FormBlock } from "@/components/Form";
import type { Form } from "@payloadcms/plugin-form-builder/types";

export enum FormName {
  TestForm = "Test Form",
}
type Props = {
  name: FormName;
};

export default async function CMSForm({ name }: Props) {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const formRes = await payload.find({
    collection: "forms",
    draft: false,
    limit: 1,
    overrideAccess: false,
    where: {
      title: {
        equals: name,
      },
    },
  });

  const formBlock = formRes?.docs?.[0] as unknown as Form;

  return formBlock ? (
    <FormBlock enableIntro={false} form={formBlock} />
  ) : (
    <p>Form {name} Not Found</p>
  );
}
