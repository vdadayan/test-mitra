import { createSlice } from '@reduxjs/toolkit'
import {actionGallery} from "../actions/actionGallery";

const initialState = {
    gallery: [],
    isLoading: false,
    error: ''
}

const galleryReducer = createSlice({
    name: 'galery',
    initialState,
    reducers: {},
    extraReducers: {
        [actionGallery.pending.type]: (state) => {
            state.isLoading = true
        },
        [actionGallery.fulfilled.type]: (state, action) => {
            state.gallery = action.payload
            state.isLoading = false
        }
    }
})

export default galleryReducer.reducer


