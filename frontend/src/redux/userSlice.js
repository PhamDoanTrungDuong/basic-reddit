import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
     name: "user",
     initialState: {
          name: "Trung Duong",
          age: "20",
          about: "I'm a software engineer",
          theme: "#ff9051",
          avaUrl: "https://i.redd.it/rrz3hmsxcll71.png",
          pending: false.valueOf,
          error: false
     },
     reducers: {
          updateStart: (state) => {
               state.pending = true;
          },
          updateError: (state) => {
               state.pending = false;
               state.error = true;
          },
          updateSuccess: (state, action) => {
               state.pending = false;
               state.error = false;

               state.name = action.payload.name;
               state.age = action.payload.age;
               state.about = action.payload.about;
               state.theme = action.payload.theme;
               state.avaUrl = action.payload.avaUrl;
          }
     }
});

export const {updateStart, updateError, updateSuccess} = userSlice.actions;
export default userSlice.reducer;