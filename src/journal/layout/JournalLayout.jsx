import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar,SideBar } from '../components'

const sidebarWidth = 240;


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
       <NavBar sidebarWidth ={sidebarWidth}/>
       

      <SideBar sidebarWidth ={sidebarWidth}/>
       <Box component={'main'}
            sx={{flexGrow:1,p:3}}
       >
       <Toolbar/>
        {children}

       </Box>
      
        


    </Box>
  )
}
