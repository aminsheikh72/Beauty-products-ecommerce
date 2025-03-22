import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../service/authService";
const userExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExist || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : (builder)=>{
builder
.addCase(userRegister.pending,(state,action)=>{
    state.isLoading = true
    state.isSuccess = false
    state.isError = false
})
.addCase(userRegister.fulfilled,(state,action)=>{
    state.isLoading = false
    state.isSuccess = true
    state.user = action.payload
    state.isError = false
})
.addCase(userRegister.rejected,(state,action)=>{
    state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.message = action.payload
})
.addCase(loginUser.pending,(state,action)=>{
    state.isLoading = true
    state.isSuccess = false
    state.isError = false
})
.addCase(loginUser.fulfilled,(state,action)=>{
    state.isLoading = false
    state.isSuccess = true
    state.user = action.payload
    state.isError = false
})
.addCase(loginUser.rejected,(state,action)=>{
    state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.message = action.payload
})
.addCase(logoutUser.fulfilled,(state,action)=>{
    state.isLoading = false
    state.user = null
    state.isError = false
    state.message = action.payload
})
    }
})

export const  {user} = authSlice.actions

export default authSlice.reducer

export const userRegister= createAsyncThunk("REG/USER",async(formData,thunkAPI)=>{
     try {
    return await register(formData)
        
     } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Something went wrong!");
     }
})
export const loginUser= createAsyncThunk("LOGIN/USER",async(formData,thunkAPI)=>{
    try {
   return await login(formData)
       
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response?.data?.message || "Something went wrong!");
    }
})

export const logoutUser= createAsyncThunk("LOGOUT/USER",async(formData,thunkAPI)=>{
   localStorage.removeItem('user')
})