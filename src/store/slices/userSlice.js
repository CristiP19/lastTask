import { createSlice } from "@reduxjs/toolkit";
import AppUser from "api/core/AppUser";

const initialState = {
  roles: null,
  token: localStorage.getItem("token"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { roles, token } = action.payload;
      state.roles = roles;
      state.token = token;
      localStorage.setItem('user', JSON.stringify(action.payload));
      AppUser.getInstance().setUser(action.payload);
    },
    removeUser(state) {
      state.roles = null;
      state.token = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
