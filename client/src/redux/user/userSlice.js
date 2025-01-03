import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    error : null,
    loading : false
}



const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signinStart : (state) => {
            state.loading = true
        },
        signInSuccess : (state,action) => {
            state.currentUser = action.payload,
            state.error = null,
            state.loading = false
        },
        signinFailure : (state,action) => {
            state.error = action.payload,
            state.loading = false
        }
    }
})



export const {signinStart,signInSuccess,signinFailure} = userSlice.actions;

export default  userSlice.reducer;