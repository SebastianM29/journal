import { Grid, Typography, colors } from '@mui/material'
import MoodBadIcon from '@mui/icons-material/MoodBad';  
import React from 'react'

export const NothingSelection = () => {
  return (
    <Grid 
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'calc(100vh - 110px)',backgroundColor: 'primary.main',padding: 4, borderRadius:'20px' }}
    className='animate__animated animate__fadeInUp'
    > 
     <Grid item xs={12}>
       <MoodBadIcon sx={{color :'white', fontSize:'100px'}}/>
     </Grid>
     <Grid item xs={12}>
        <Typography sx={{color :'white'}}>
           Seleccione o cree una entrada 
        </Typography>
     </Grid>
    </Grid>
    
  )
}
