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
			// Write your code here
		},
	},
});

export const { addUserInfosToStore } = userSlice.actions;
export default userSlice.reducer;
