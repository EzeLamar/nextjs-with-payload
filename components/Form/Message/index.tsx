import type { MessageField } from '@payloadcms/plugin-form-builder/types'

import React from 'react'

import { Width } from '../Width'
import RichText from '@/components/RichText'

export const Message: React.FC<MessageField> = ({ message }) => {
  return (
    <Width width={100}>
      <RichText className='mt-3' content={message} />
    </Width>
  )
}
