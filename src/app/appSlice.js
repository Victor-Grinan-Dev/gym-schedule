import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: true,
        currentLang: "en",
        isModal:false,
        isPicModal:false,
        picModalCurrentPic:null,
    },
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload;    
        },
        setCurrentLang(state, action){
            state.currentLang = action.payload;        
        },
        toggleIsModal(state){
            state.isModal = !state.isModal;
        },
        togglePicModal(state){
            state.isPicModal = !state.isPicModal;
        },
        setPicModal(state, action){
            state.picModalCurrentPic = action.payload;
        },
    }
})

export const {
    setIsLoading,
    setCurrentLang,
    toggleIsModal,
    togglePicModal,
    setPicModal,
} = appSlice.actions;

export default appSlice.reducer;