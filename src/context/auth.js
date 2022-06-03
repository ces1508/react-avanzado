import React from 'react'
import { useAuthenticate } from '../hooks/useAuthenticate'

const AuthContext = React.createContext({})

const AuthContextProvider = ({ children }) => {
  const authProviderValue = useAuthenticate()

  return (
    <AuthContext.Provider value={{ ...authProviderValue }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContext }
