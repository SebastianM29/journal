import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages, RegisterPages } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPages/>}/>
      <Route path='/register' element={<RegisterPages/>}/>

      <Route path='/*' element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
