import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { useCheckAuth } from '../hook/useCheckAuth'
import { JournalPage } from '../journal/JournalPage'

export const AppRoutes = () => {
   const {status} = useCheckAuth()

   if (status === 'checking') {
    return <CheckingAuth/>
   }
   console.log('aca anda',status)
  return (
    <Routes>
        {
            (status === 'conected') 
              ? <Route path='/*' element={<JournalPage/>}/> 
              : <Route path='/auth/*' element={<AuthRoutes/>}/>
        }
          <Route path='/*' element={< Navigate to='/auth/login'/>} /> 

         {/* Login y Registro 
        <Route path='auth/*' element={<AuthRoutes/>}/>

         JournalApp    
        <Route path='/*' element={<JournalRoutes/>}/> */}


    </Routes>
  )
}
