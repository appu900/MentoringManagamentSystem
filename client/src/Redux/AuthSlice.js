import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        addId:(state,action)=>{
            state.push(action.payload);
        }
    }
});

export const { addId } = authSlice.actions;
export default authSlice.reducer;
