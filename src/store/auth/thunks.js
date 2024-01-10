import { loginWhitEmailPassword, onLogoutSession, registerUserWhitEmailPAssword, signInWithGoogle } from "../../firebase"
import { checkingCredentials, login, logout } from "./authSlices"


export const checkingAuthentication = (email,password) => {
return async(dispatch) => {
    dispatch(checkingCredentials())
}
}


export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

   const result = await signInWithGoogle()
   
   if(!result.ok) return dispatch(logout(result.errorMessage))
   //{console.log(result.errorMessage)}
   dispatch(login(result))
   //console.log(result)
    
  }  
}

export const startCreatingUserWhitEmailPassword = ({nombre,correo,password}) => {
  return async (dispatch) => {
    console.log('esta entrando ahi ? thunks , le estoy mandando el nombre?',nombre)
    dispatch(checkingCredentials())


   const result = await registerUserWhitEmailPAssword({nombre,correo,password})


   if (!result.ok) {
    return dispatch(logout(result.errorMessage))
   }
   console.log('llegando bien aca')
   dispatch(login(result))
   console.log(ok)

  }

}

export const startLoginWithEmailPassword =(correo,password) => {
  return async (dispatch) => {
    console.log('estoy en el thunks')
    dispatch(checkingCredentials())
   
   const result = await loginWhitEmailPassword(correo,password)
   if (!result.ok) {
    return dispatch(logout(result.errorMessage))
   }
 
   dispatch(login(result))
   

  }

}


export const  logoutSession = () => {
  return async(dispatch) => {

    await onLogoutSession()

    dispatch(logout())


  }
}