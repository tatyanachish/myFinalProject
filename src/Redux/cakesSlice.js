import { createSlice } from '@reduxjs/toolkit'

export const cakesSlice = createSlice({
    name: 'cakes',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {
        filterCategory:(state,action) => {
            state.selectedCategory = action.payload
        }
    }
})
export const { filterCategory} = cakesSlice.actions;
export const getSelectedCategory = state => state.cakes.selectedCategory;
export default cakesSlice.reducer;