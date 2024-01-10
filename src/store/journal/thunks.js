import { collection, doc, setDoc } from "firebase/firestore/lite"
import { firestoreDB } from "../../firebase"
import { addNewEmptyNote, setActiveNote } from "./journalSlice"


export const startNewNote = () => {
    return async(dispatch,getState) => {
        /** todo lo que esta en el store -- getState-- */
        const {uid} = getState().auth

        console.log('start new note')
        console.log(uid)

    const newNote = {
        title : '',
        body:'',
        date: new Date().getTime()

    }
    const newDoc = doc(collection(firestoreDB,`${uid}/journal/notes`))
    const setDocResp =  await setDoc(newDoc,newNote)
 
    newNote.id=newDoc.id
   dispatch(addNewEmptyNote(newNote))
   dispatch(setActiveNote(newNote))
  }

}