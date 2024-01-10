import { Save} from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Typography sx={{ fontSize: '40px', fontWeight:'light' }}>29 de Enero, 2023</Typography>
        <Grid item>
            <Button>
                <Save sx={{ fontSize: '40px',mr:'2px' }}  />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
            type='text'
            variant='filled'
            fullWidth
            placeholder='Ingrese un titulo'
            label='Titulo'
            sx={{border:'none', mb:'20px'}}
            
            />
        </Grid>

        <Grid container>
            <TextField
            type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder='Cuentanos tu dia'
            minRows={5}
            />
         </Grid>
         <Grid>
            <ImageGallery/>
         </Grid>


    </Grid>
  )
}
