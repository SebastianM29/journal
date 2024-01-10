import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const SideBar = ({sidebarWidth = 240}) => {
    const {displayName}= useSelector( state => state.auth)
  return (
    <Box component='nav' 
    sx={{width:{sm:sidebarWidth},flexShrink: {sm: 0 }}}
    className='animate__animated animate__fadeInLeft'
    >
        <Drawer variant='permanent'//temporary
        open
        sx={{
            display:'block',
            '& .MuiDrawer-paper': {boxSizing:'border-box',width: sidebarWidth}
        }}
        
        
        >
                <Toolbar>
                <Typography variant='h5' noWrap component='div'>
                    {displayName}
                </Typography>
                </Toolbar>
                <Divider/>
                <List>
                     {['Enero','Febrero','Marzo','Abril','Mayo'].map( text => (

                        <ListItem key= {text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                    <Grid container>
                                          <ListItemText primary= {text}/>
                                          <ListItemText secondary = {'algo hay que escribir, deberia tener algo'}/>
                                    </Grid>
                                
                            </ListItemButton>


                        </ListItem>
                     ))

                     }
                </List>
           



        </Drawer>



    </Box>
  )
}
