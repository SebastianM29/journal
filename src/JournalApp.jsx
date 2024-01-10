import React from 'react'
import { Outlet } from 'react-router-dom'
import { Apptheme } from './theme/Apptheme'
import { useSelector } from 'react-redux'
import { CheckingAuth } from './ui/components/CheckingAuth'
import { AppRoutes } from './routes/AppRoutes'

export const JournalApp = () => {

  
  
  
  return (
    <Apptheme>
    
  

        <AppRoutes/>

   
    
    </Apptheme>
  )
}
