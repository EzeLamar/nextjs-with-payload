import type { EmailField } from "@payloadcms/plugin-form-builder/types";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import React from "react";

import { Error } from "../Error";
import { Width } from "../Width";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Email: React.FC<
  {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown;
      }>
    >;
    register: UseFormRegister<unknown & FieldValues>;
  } & EmailField & { isLoading?: boolean }
> = ({
  name,
  errors,
  label,
  register,
  required: requiredFromProps,
  isLoading,
  width,
}) => {
  return (
    <Width width={width}>
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Input
          id={name}
          disabled={isLoading}
          type="text"
          placeholder="Email"
          {...register(name, {
            pattern: /^\S[^\s@]*@\S+$/,
            required: requiredFromProps,
          })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  );
};
