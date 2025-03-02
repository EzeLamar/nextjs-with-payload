import type { TextField } from "@payloadcms/plugin-form-builder/types";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import React from "react";

import { Error } from "../Error";
import { Width } from "../Width";
import { Label } from "@/components/ui/label";
import { Textarea as TextAreaUI } from "@/components/ui/textarea";

export const Textarea: React.FC<
  {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown;
      }>
    >;
    register: UseFormRegister<unknown & FieldValues>;
    rows?: number;
  } & TextField & { isLoading?: boolean }
> = ({
  name,
  errors,
  label,
  register,
  required: requiredFromProps,
  rows = 3,
  width,
  isLoading,
}) => {
  return (
    <Width width={width}>
      <div>
        <Label htmlFor={name}>{label}</Label>
        <TextAreaUI
          id={name}
          disabled={isLoading}
          rows={rows}
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  );
};
