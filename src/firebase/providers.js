import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        //const crendential = GoogleAuthProvider.credentialFromResult(result)
         
        const {displayName,email,photoURL,uid} = result.user
        
        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }



    } catch (error) {
        
        const errorCode = error.code;
        const errorMessage = error.message
        console.log(error)
        return{
            ok:false,
            errorCode,
            errorMessage


        }
    }
}

export const registerUserWhitEmailPAssword = async({nombre,correo,password}) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth,correo,password)
        const {uid , photoURL} = resp.user;
        console.log(resp)
        await updateProfile(firebaseAuth.currentUser,{displayName:nombre})

        return {
            ok:true,
            uid,photoURL,correo,nombre
        }

    } catch (error) {
        return{
            ok:false,
            errorMessage:error.message
        }
    }

}


export const loginWhitEmailPassword = async(correo,password) => {
    try {
        console.log('providers',correo,password)
        const resp =  await signInWithEmailAndPassword(firebaseAuth,correo,password)
        const {uid,photoURL,displayName}= resp.user

        console.log('nombre en providers',displayName)
        return{
            ok:true,
            displayName,
            uid,
            photoURL


        }
        
    } catch (error) {
       
       
        return {
         ok:false,
         errorMessage:error.message 
        }

        
    }

}

export const onLogoutSession = async() => {

   return await firebaseAuth.signOut()

}