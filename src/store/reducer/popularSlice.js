import { createSlice } from "@reduxjs/toolkit";

export const popularSlice = createSlice({
    name: 'popularData',
    initialState: {
        popular_data: null,
    },
    reducers: {
        setPopularData: (state, action) => {
            // console.log('action', action)

            state.popular_data = action.payload.data
        }
    }
})

export const { setPopularData } = popularSlice.actions

export default popularSlice.reducer