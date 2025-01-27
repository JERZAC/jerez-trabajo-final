import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    module: "React Mod7",
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    setFormData: (state, action) => {
      const { username, email, password } = action.payload;
      state.username = username;
      state.email = email;
      state.password = password;
    },
    clearForm: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { setFormData, clearForm } = formSlice.actions;
export default formSlice.reducer;
