import { GET_PHOTOS, GET_PHOTOS_ERROR } from './photosActions';

const Photos = (state = {}, action) => {

    switch(action.type){
        case GET_PHOTOS:
            const photos = [...state.photos, ...action.payload ];
        return {
            ...state,
            photos: photos,
            loading: false,
            page: state.page + 1
        }
        case GET_PHOTOS_ERROR:
            return {
                photos: {},
                loading: true,
            }
        default: return state
    }
}

export default Photos;