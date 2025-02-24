import type { CountryField } from "@payloadcms/plugin-form-builder/types";
import type { Control, FieldErrorsImpl, FieldValues } from "react-hook-form";

import React from "react";
import { Controller } from "react-hook-form";

import { Error } from "../Error";
import { Width } from "../Width";
import { countryOptions } from "./options";
import { Label } from "@/components/ui/label";
import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Country: React.FC<
  {
    control: Control<FieldValues, unknown>;
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown;
      }>
    >;
  } & CountryField
> = ({ name, control, errors, label, required, width }) => {
  return (
    <Width width={width}>
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Controller
          control={control}
          defaultValue={""}
          name={name}
          render={({ field: { onChange } }) => (
            <SelectUI onValueChange={onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map((option) => (
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
