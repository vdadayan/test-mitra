
export const DETAIL= 'DETAIL'
export const ASYNC_DETAIL= 'ASYNC_DETAIL'

const initialState = {
    detailPhoto: {},
    isLoading: false,
    error: ''
}

export const detailPhotoReducer= (state = initialState, action) => {
    switch (action.type) {
        case DETAIL :
            return {
                ...state,
                isLoading: true,
                detailPhoto: action.payload
            }
        default :
            return {...state, isLoading: false}
    }
}

export const detailPhotoAction = (payload) => ({type: DETAIL, payload })
export const fetchDetailPhotoAction = (id) => ({type: ASYNC_DETAIL, id})
