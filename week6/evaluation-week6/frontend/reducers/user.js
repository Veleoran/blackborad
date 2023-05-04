import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {
		username: null,
		token: null,
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUserInfosToStore: (state, action) => {
			state.username = action.payload.username;
			state.token = action.payload.token;
			// Write your code here
		},
	},
});

export const { addUserInfosToStore } = userSlice.actions;
export default userSlice.reducer;
