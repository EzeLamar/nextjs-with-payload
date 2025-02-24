import React from 'react'

import { serializeLexical } from './serialize'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RichText: React.FC<{ className?: string; content: any; enableGutter?: boolean }> = ({
  className,
  content,
}) => {
  if (!content) {
    return null
  }

  return (
    <div className={[className].filter(Boolean).join(' ')}>
      {content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        serializeLexical({ nodes: content?.root?.children })}
    </div>
  )
}

export default RichText
