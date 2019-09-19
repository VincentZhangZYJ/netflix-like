import {
    ADD_FILM,
    REMOVE_FILM,
    FETCH_FILM_SUCCESS,
} from '../actionTypes';

const initialState = {
    myList: [],
    recommendations: [],
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILM_SUCCESS: {
            return Object.assign({}, state, {myList: action.list.myList, recommendations: action.list.recommendations});
        }
        case ADD_FILM: {
            return {
                ...state,
                myList: [...state.myList, action.film],
                recommendations: state.recommendations.filter(film => film.id !== action.film.id),
            };
        }
        case REMOVE_FILM: {
            return {
                ...state,
                myList: state.myList.filter(film => film.id !== action.film.id),
                recommendations: [...state.recommendations, action.film],
            };
        }
        default:
            return state;
    }
}

export default filmReducer;