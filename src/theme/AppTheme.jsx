import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { purpleTheme } from './purpleTheme'

export const Apptheme = ({children}) => {
  
  
  

  return (
    <ThemeProvider theme = {purpleTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
    
  )
}
