import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext, AuthContextProvider } from '@context/auth'
import {
  HomePage,
  DetailPage,
  CategoryPhotosPage,
  FavsPage,
  LoginPage,
  UserPage,
  RegisterPage
} from '@pages'

const RequireAuth = ({ children }) => {
  const { state } = useContext(AuthContext)
  if (state.isAuth) return children
  return <LoginPage />
}

const AppRouter = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<DetailPage />} />
        <Route path='/category/:categoryId' element={<CategoryPhotosPage />} />
        <Route
          path='/favs' element={
            <RequireAuth>
              <FavsPage />
            </RequireAuth>
      }
        />
        <Route
          path='/user' element={
            <RequireAuth>
              <UserPage />
            </RequireAuth>
      }
        />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

    </AuthContextProvider>

  )
}

export { AppRouter }
