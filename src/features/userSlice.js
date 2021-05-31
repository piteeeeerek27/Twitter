import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		userState: null,
	},
	reducers: {
		login: (state, { payload }) => {
			state.userState = payload;
		},
		logout: state => {
			state.userState = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.userState;

export default userSlice.reducer;
