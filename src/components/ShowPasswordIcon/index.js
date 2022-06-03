import React from 'react'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

export const ShowPasswordIcon = ({ seeing, onClick }) => {
  return (
    <div onClick={onClick}>
      {seeing
        ? <IoIosEye />
        : <IoIosEyeOff />}
    </div>
  )
}
