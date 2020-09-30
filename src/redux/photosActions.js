import axios from 'axios';

export const GET_PHOTOS = "GET_PHOTOS";
export const GET_PHOTOS_ERROR = "GET_PHOTOS";

export const getPhotos = ( limit = 7) => async (dispatch, getState) => {
    try {
        const { page } = getState().Photos;

        const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);

        dispatch({ type: GET_PHOTOS, payload: data } )
    } catch (error) {
        dispatch({ type: GET_PHOTOS_ERROR, payload: "Hubo un error cargando las fotos."})
    }
}

