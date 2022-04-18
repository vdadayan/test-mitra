import { combineReducers, configureStore } from '@reduxjs/toolkit'
import galleryReducer from "./reducers/galleryReducer";


const rooReducer = combineReducers({
    galleryReducer,
})

export const store = configureStore({
    reducer: rooReducer
})
