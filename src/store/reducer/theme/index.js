import { createSlice } from "@reduxjs/toolkit";
import * as theme from '../../../theme/attribute'

const initialState = {
    baseTheme: theme,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {}
})

export default {themeSlice: themeSlice.reducer}