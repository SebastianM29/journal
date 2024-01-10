import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutSession } from '../../store/auth'

export const NavBar = ({sidebarWidth}) => {
 const dispatch = useDispatch()

  const onLogout = ( ) => {
    
    console.log('haciendo clickoncio')
    dispatch(logoutSession())
  }

  return (
    <AppBar position='fixed'
            sx={{ width:{sm:`calc(100% - ${sidebarWidth}px)`},
            ml:{sm:`${sidebarWidth}px`}
        }}
    >
        <Toolbar>
              <IconButton
              edge='start'
              sx={{mr:2,display:{ sm: 'none'}}}
              
              >
                <MenuOutlined/>
              </IconButton>
              <Grid  container direction = 'row' justifyContent='space-between' alignItems='center'>

                <Typography noWrap component='div'>Agenda</Typography>

                <IconButton
               onClick={onLogout}
                color='error'>
                     <LogoutOutlined/>
                </IconButton>
              </Grid>
        </Toolbar>

    </AppBar>
  )
}
