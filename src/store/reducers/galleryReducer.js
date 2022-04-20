export const GALLERY = 'GALLERY'
export const FETCH_GALLERY = 'FETCH_GALLERY'

const initialState = {
    gallery: [],
    isLoading: false,
    error: ''
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GALLERY :
            return {
                ...state,
                isLoading: true,
                gallery: action.payload
            }
        default :
            return {...state, isLoading: false}
    }
}

export const galleryAction = (payload) => ({type: GALLERY, payload})
export const fetchGalleryAction = (id = 1) => ({type: FETCH_GALLERY, id})

export default galleryReducer


