import React, { useMemo, useState } from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {  Alert, Button, Grid,Link,TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hook'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWhitEmailPassword } from '../../store/auth/thunks'


export const RegisterPages = () => {
  const dispatch = useDispatch()
  const [initialValid ,setInitialValid] = useState(false)
   
   const formValidators = {
    nombre:[(value) => value.length>=6 , 'nombre obligatorio'],
    correo:[(value)=> value.includes('@'),'debe incluir una @'],
    password:[(value)=> value.length>=6, 'debe tener minimo 6 caracteres']
   }

   const formData = {
    nombre:'',
    correo:'',
    password:''
   }
 
   
  
   
   
   const{status,errorMessage} = useSelector((state) => state.auth);
   const checkingStatus = useMemo(() => status==='checking', [status])
  console.log( 'deberia ver el status', status,checkingStatus)
   console.log(errorMessage)



   const {nombre,correo,password,onInputChange,
          formState,isFormValid,nombreValido,correoValido,passwordValido} = useForm(formData,formValidators)


  

   const onRegister = (e) => {
    e.preventDefault()
    setInitialValid(true)
    console.log('submit')

    if (!isFormValid) return
    dispatch(startCreatingUserWhitEmailPassword(formState))
    
   }


  return (
    <AuthLayout name='Register'>
      <form onSubmit={onRegister} className="animate__animated animate__fadeIn">


       <Grid container >
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='nombre' 
              type='text'
              placeholder='Nombre'
              name='nombre'
              value={nombre}
              onChange={onInputChange}
              error={!!nombreValido && initialValid}
              helperText={nombreValido}
              fullWidth
              
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='correo' 
              type='email'
              placeholder='correo'
              name='correo'
              value={correo}
              onChange={onInputChange}
              error={!!correoValido && initialValid}
              helperText={correoValido}
              fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='password' 
              type='password'
              placeholder='pass'
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValido && initialValid}
              helperText={passwordValido}
              fullWidth
              />
            </Grid>

            <Grid
             container
             spacing={2}
             sx={{mb:2 , mt:2}}
             >    
                 <Grid item xs={12} sx={{display:!!errorMessage? '' : 'none'}}>
                  <Alert severity='error'>
                     {errorMessage}
                  </Alert>
                  
                  </Grid>
                 <Grid item xs={12}>
                   <Button type='submit' variant='outlined' disabled={checkingStatus}  fullWidth>
                    Crear cuenta
                   </Button>
                  </Grid>
                  <Grid sx={{mt:3}} container direction='row' justifyContent='end'>
                    <Typography>ya tienes cuenta?</Typography>
                    <Link component={RouterLink} to='/auth/login'>
                    <Typography sx={{ml:1}}>ingresar</Typography>
                    </Link>
                  </Grid>

                 
             </Grid>

          </Grid>







      </form>

    </AuthLayout>
  )
}
