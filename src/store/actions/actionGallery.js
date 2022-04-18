import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../api/api";

export const actionGallery = createAsyncThunk(
    'gallery',
    async (_, thunkAPI) => {
        try {
            const response = await API.get(`/photos?_limit=5`,)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')

        }
    }
)
