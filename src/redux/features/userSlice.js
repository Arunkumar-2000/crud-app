import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

 export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(`${BASE_URL}/api/users/`)
        return response.data
})

export const addUser = createAsyncThunk('users/addUser',  async (user) => {
    const response = await axios.post(`${BASE_URL}/api/users/`,user)
    return response.data
})

const userSlice = createSlice({
    name: "users",
    initialState:{
        list:[],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
              . addCase(fetchUsers.pending, ( state) => {
                state.loading = true
              })
              .addCase(fetchUsers.fulfilled, ( state, action ) => {
                state.loading = false
                state.list = action.payload
              })
              . addCase(addUser.pending, ( state) => {
                state.loading = true
              })
              .addCase(addUser.fulfilled, ( state, action ) => {
                state.loading = false
                state.list.push(action.payload)
              })
    }
})

export default userSlice.reducer;