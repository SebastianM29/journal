import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firebaseAuth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { login, logout } from '../store/auth'

export const useCheckAuth = () => {

    const {status} = useSelector(state => state.auth)
    const dispatch = useDispatch()
 
 
    useEffect(() => {
 
    onAuthStateChanged(firebaseAuth,async(user)=>{
     if (!user) return dispatch(logout()) 

    //  const {uid,email,displayName,photoURL} = user;
     dispatch(login(user))
     
    })
    }, [])
   
    return {status}

}
