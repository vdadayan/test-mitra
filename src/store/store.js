import galleryReducer from "./reducers/galleryReducer";
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";
import {detailPhotoReducer} from "./reducers/detailPhotoReducer";
import { composeWithDevTools } from 'redux-devtools-extension'


const sagaMiddleware = createSagaMiddleware()
const rooReducer = combineReducers({
    galleryReducer,
    detailPhotoReducer
})
const composedEnhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
)

export const store = createStore(rooReducer, composedEnhancer)

sagaMiddleware.run(rootWatcher)
