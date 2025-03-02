import type { CheckboxField } from "@payloadcms/plugin-form-builder/types";
import {
  Control,
  Controller,
  type FieldErrorsImpl,
  type FieldValues,
  type UseFormRegister,
} from "react-hook-form";

import { Error } from "../Error";
import { Width } from "../Width";
import { Checkbox as CheckboxUI } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const Checkbox: React.FC<
  {
    control: Control<FieldValues, unknown>;
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown;
      }>
    >;
    getValues: unknown;
    register: UseFormRegister<unknown & FieldValues>;
    setValue: unknown;
  } & CheckboxField & { isLoading?: boolean }
> = ({ name, control, defaultValue, required, errors, label, width, isLoading }) => {
  return (
    <Width width={width}>
      <div>
        {/* <Label htmlFor={name}>{label}</Label> */}
        <Controller
          control={control}
          defaultValue={defaultValue}
          name={name}
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-row gap-2">
              <CheckboxUI
                id={name}
                disabled={isLoading}
                checked={value}
                onCheckedChange={onChange}
              />
              <Label htmlFor={name}>{label}</Label>
            </div>
          )}
          rules={{ required }}
        />
        {required && errors[name] && <Error />}
      </div>
    </Width>
  );
};
