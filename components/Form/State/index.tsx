import type { StateField } from "@payloadcms/plugin-form-builder/types";
import type { Control, FieldErrorsImpl, FieldValues } from "react-hook-form";

import React from "react";
import { Controller } from "react-hook-form";

import { Error } from "../Error";
import { Width } from "../Width";
import { stateOptions } from "./options";
import { Label } from "@/components/ui/label";
import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const State: React.FC<
  {
    control: Control<FieldValues, unknown>;
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown;
      }>
    >;
  } & StateField & { isLoading?: boolean }
> = ({ name, control, errors, label, required, width, isLoading }) => {
  return (
    <Width width={width}>
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Controller
          control={control}
          defaultValue={""}
          name={name}
          render={({ field: { onChange } }) => (
            <SelectUI onValueChange={onChange} disabled={isLoading}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {stateOptions.map((option) => (
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
