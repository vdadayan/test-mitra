import {all} from 'redux-saga/effects'
import {galleryWatcher} from "./gallerySaga";
import {galleryPhotoWatcher} from "./detailPhotoSaga";

export function* rootWatcher() {
    yield  all([galleryWatcher(), galleryPhotoWatcher()])
}


export const delay = (ms) => new Promise(res => setTimeout(res, ms))
