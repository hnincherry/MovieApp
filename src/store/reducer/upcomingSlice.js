import { createSlice } from "@reduxjs/toolkit";

export const upcomingSlice = createSlice({
    name: 'upcomingData',
    initialState: {
        upcoming_data: null,
    },
    reducers: {
        setUpcomingData: (state,action) => {
            // console.log('action ' , action)

            state.upcoming_data = action.payload.data
        }
    }

})
export const {setUpcomingData} = upcomingSlice.actions

export default upcomingSlice.reducer