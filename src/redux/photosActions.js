import axios from 'axios';

export const GET_PHOTOS = "GET_PHOTOS";

export const getPhotos = ( limit = 7) => async (dispatch, getState) => {

    const { page } = getState().Photos;

    const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);

    dispatch ({ type: GET_PHOTOS, payload: data } )

}