import {API} from "../../api/api";
import {call, put, takeEvery} from "redux-saga/effects";
import {ASYNC_DETAIL, detailPhotoAction} from "../reducers/detailPhotoReducer";

export const fetchGalleryPhoto = (props) => {
    return  API.get(`/photos?id=${props.id}`)
}

function* detailPhotoWorker(props) {
    const data = yield call(()=> fetchGalleryPhoto(props))
    const json = yield call(() => new Promise(res => res(data.data)))
    yield put(detailPhotoAction(json))
}

export function* galleryPhotoWatcher() {
    yield takeEvery(ASYNC_DETAIL, detailPhotoWorker)
}

