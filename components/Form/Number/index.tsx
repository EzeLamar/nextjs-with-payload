import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export const Number: React.FC<
  {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown
      }>
    >
    register: UseFormRegister<unknown & FieldValues>
  } & TextField & { isLoading?: boolean }
> = ({ name, defaultValue, errors, label, register, required: requiredFromProps, width, isLoading }) => {
  return (
    <Width width={width}>
      <div>
        <Label htmlFor={name}>
          {label}
        </Label>
        <Input
          id={name}
          disabled={isLoading}
          type="number"
          defaultValue={defaultValue}
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  )
}
