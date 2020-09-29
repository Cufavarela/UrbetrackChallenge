import { GET_PHOTOS } from './photosActions';

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
        default: return state
    }
}

export default Photos;