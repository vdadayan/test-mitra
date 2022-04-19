import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_GALLERY, galleryAction} from "../reducers/galleryReducer";
import {API} from "../../api/api";

export const fetchGallery = () => API.get('/photos?_limit=5')

function* galleryWorker() {
    const data = yield call(fetchGallery)
    const json = yield call(() => new Promise(res => res(data.data)))
    yield put(galleryAction(json))
}


export function* galleryWatcher() {
    yield takeEvery(FETCH_GALLERY, galleryWorker)
}
