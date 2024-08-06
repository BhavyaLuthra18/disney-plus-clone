import { createSlice } from "@reduxjs/toolkit";

// initial state when the app starts
const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // storing login data when user's logged in
    setUserLoginDetails: (state, action) => {
      console.log("Payload received:", action.payload);
      console.log("Photo URL received:", action.payload.photo);
      state.name = action.payload.name;
      state.email = action.payload.email;
      if(action.payload.photo){
        state.photo = action.payload.photo; 
      }else{
        state.photo = "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";
      }

      console.log("User Photo URL:", action.payload.photo);
    },
    // putting all data to null when user's signout
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
// selector for name , email , Photo  for other components to get access to this.
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;