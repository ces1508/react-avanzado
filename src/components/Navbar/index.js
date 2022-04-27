import React from 'react'
import { NavStyled, LinkStyled } from './styled'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE_ICON = 32
export const Navbar = () => {
  return (
    <NavStyled>
      <LinkStyled to='/'><MdHome size={SIZE_ICON} />home</LinkStyled>
      <LinkStyled to='/favs'> <MdFavoriteBorder size={SIZE_ICON} /> favoritos</LinkStyled>
      <LinkStyled to='/user'><MdPersonOutline size={SIZE_ICON} /> usuario</LinkStyled>
    </NavStyled>
  )
}
