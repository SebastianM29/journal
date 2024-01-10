import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hook'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../../ui/components/CheckingAuth'

export const LoginPages = () => {
  
  const dispatch =  useDispatch()
  const{status,errorMessage} = useSelector(state => state.auth )
  const isAuntenthicated = useMemo( () => status === 'checking', [status])
  console.log('aca se deberia ver el errorMessage',errorMessage)
  console.log('aca se deberia ver el status',status)
  const{email,password,onInputChange} = useForm({
    email:'',
    password:''
  })
  
  const onSubmit = (e) => {
    e.preventDefault()
    
    dispatch(startLoginWithEmailPassword(email,password))
    
  }
  
  const onGoogleSignIn = () => {
    
    dispatch(startGoogleSignIn())
  }
  
 
  return (
      <AuthLayout>
       <form onSubmit={onSubmit}
       className="animate__animated animate__fadeIn">
         <Grid container >
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='correo' 
              type='email'
              placeholder='correo@correo.com'
              name='email'
              value={email}
              onChange={onInputChange}
              autoComplete="username"
              fullWidth
              
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='contraseña' 
              type='password'
              placeholder='password'
              name='password'
              value={password}
              onChange={onInputChange}
              autoComplete="current-password"
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
                 <Grid item xs={12} sm={6}>
                   <Button disabled={isAuntenthicated} type='submit' variant='outlined' fullWidth>
                    Login
                   </Button>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                   <Button disabled={isAuntenthicated} onClick={onGoogleSignIn} variant='outlined' fullWidth>´
                     <Google/>
                     <Typography sx={{ml:1}}>Google</Typography> 
                   </Button>
                  </Grid>

                  <Grid  container direction='row' justifyContent='end' sx={{mt:3}}>
                    <Link component={RouterLink} to='/auth/register'>
                    <Typography>no tienes cuenta?</Typography> 
                    </Link>
                    
                  </Grid>
             </Grid>

          </Grid>

      </form>
      </AuthLayout>

      
  )
}
