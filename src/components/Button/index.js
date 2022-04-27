import React from 'react'

export function Button ({ type = 'button', onClick = () => null, children } = {}) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}
