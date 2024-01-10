
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name:'journal',
    initialState: {
        isSaving:true,
        messageSaved: '',
        notes:[],
        active:null
     },
    reducers: {
        addNewEmptyNote: (state,action) => {
            state.notes.push(action.payload)
    
            state.isSaving=false
            
        },
        setActiveNote: (state,action) => {
            state.active= action.payload
            
        },
        setNote: (state,action) => {
            
        },
        setSaving: (state,action) => {
            
        },
        updateNote: (state,action) => {
            
        },
        deleteNoteById: (state,action) => {
            
        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote } = journalSlice.actions;