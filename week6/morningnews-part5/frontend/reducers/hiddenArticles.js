// import { createSlice } from '@reduxjs/toolkit';
//  const initialState =  {
//     value: [],
// };

// export const hiddenArticlesSlice = createSlice({
//    name: 'hiddenArticles',
//     initialState,
//   reducers: {

//     hideArticle: (state, action) => {
//       state.value.push(action.payload);
//     },
//   },
// });

// export const { hideArticle } = hiddenArticlesSlice.actions;

// export default hiddenArticlesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		hideArticle: (state, action) => {
			state.value.push(action.payload);
		},
		displayAllArticles: (state) => {
			state.value = [];
		},
	},
});

export const { hideArticle, displayAllArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;