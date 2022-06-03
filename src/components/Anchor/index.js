import React from 'react'
import { InternalAnchorStyled, RemoteAnchor } from './styled'

export function Anchor ({
  path,
  children,
  isRemote = false,
  aling = 'left'
} = {}) {
  return isRemote
    ? (
      <RemoteAnchor href={path} aling={aling}>{children}</RemoteAnchor>
      )
    : (
      <InternalAnchorStyled to={path}>{children}</InternalAnchorStyled>
      )
}
