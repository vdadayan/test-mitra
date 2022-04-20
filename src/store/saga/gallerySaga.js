import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_GALLERY, galleryAction} from "../reducers/galleryReducer";
import {API} from "../../api/api";
import {delay} from "./index";

export const fetchGallery = (props) => API.get(`albums/${props.id}/photos?_limit=6`)

function* galleryWorker(props) {
    yield delay(500)
    const data = yield call(() => fetchGallery(props))
    const json = yield call(() => new Promise(res => res(data.data)))
    yield put(galleryAction(json))
}


export function* galleryWatcher() {
    yield takeEvery(FETCH_GALLERY, galleryWorker)
}
