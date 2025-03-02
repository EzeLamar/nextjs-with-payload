import type { SelectField } from "@payloadcms/plugin-form-builder/types";
import type { Control, FieldErrorsImpl, FieldValues } from "react-hook-form";

import React from "react";
import { Controller } from "react-hook-form";

import { Error } from "../Error";
import { Width } from "../Width";
import { Label } from "@/components/ui/label";
import {
  Select as SelectUI,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Select: React.FC<
  {
    control: Control<FieldValues, unknown>;
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown;
      }>
    >;
  } & SelectField & { isLoading?: boolean }
> = ({
  name,
  defaultValue,
  control,
  errors,
  label,
  options,
  required,
  width,
  isLoading,
}) => {
  return (
    <Width width={width}>
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Controller
          control={control}
          defaultValue={defaultValue}
          name={name}
          render={({ field: { onChange } }) => (
            <SelectUI onValueChange={onChange} defaultValue={defaultValue} disabled={isLoading}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectUI>
          )}
          rules={{ required }}
        />
        {required && errors[name] && <Error />}
      </div>
    </Width>
  );
};
