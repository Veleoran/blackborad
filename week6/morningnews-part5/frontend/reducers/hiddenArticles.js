import { createSlice } from '@reduxjs/toolkit';

export const hiddenArticlesSlice = createSlice({
  name: 'hiddenArticles',
  initialState: {
    value: [],
  },
  reducers: {
    hideArticle: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { hideArticle } = hiddenArticlesSlice.actions;

export default hiddenArticlesSlice.reducer;
