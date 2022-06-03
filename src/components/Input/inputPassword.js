import React, { useState } from 'react'
import { Input } from './input'
import { ShowPasswordIcon } from '../ShowPasswordIcon'

const InputPassword = (props) => {
  const [seeing, setSeeing] = useState(false)

  return (
    <Input
      {...props}
      type={seeing ? 'text' : 'password'}
      rightComponent={() => (
        <ShowPasswordIcon
          onClick={() => setSeeing((currentValue) => !currentValue)}
          seeing={seeing}
        />
      )}
    />
  )
}

export { InputPassword }
