import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  DetailPage,
  CategoryPhotosPage,
  FavsPage,
  LoginRegisterPage,
  UserPage
} from '../pages'

const isLogged = false

const RequireAuth = ({ children }) => {
  if (isLogged) return children
  return <LoginRegisterPage />
}

const AppRouter = () => {
  return (
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
    </Routes>

  )
}

export { AppRouter }
