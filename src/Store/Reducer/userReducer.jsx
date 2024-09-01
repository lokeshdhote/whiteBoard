import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  loading:false,
  auth:false,
  error:null
};
export const  userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  }
})
export default  userSlice.reducers
export const {} = userSlice.actions