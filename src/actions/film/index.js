import {ADD_FILM, FETCH_FILM_SUCCESS, REMOVE_FILM} from '../../ducks/actionTypes';
import axios from "axios";

export const addFilm = (film) => ({
    type: ADD_FILM,
    film,
});

export const removeFilm = (film) => ({
    type: REMOVE_FILM,
    film,
});

export const fetchFilmSuccess = (list) => ({
    type: FETCH_FILM_SUCCESS,
    list,
});

export const fetchFilmData = () => {
    return (dispatch) => {
        return axios.get(`./mockData.json`, {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then(response => {
                dispatch(fetchFilmSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};