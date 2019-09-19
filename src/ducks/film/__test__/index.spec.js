import { ADD_FILM, REMOVE_FILM, FETCH_FILM_SUCCESS } from '../../../ducks/actionTypes';
import reducer from '../index';

describe('filmReducer', () => {
    const mockInitData = {
        myList: [
            {
                id: 1,
            },
            {
                id: 2,
            },
        ],
        recommendations: [
            {
                id: 3,
            },
        ],
    };

    it('should return right data when calling fetchFilm', () => {
        const mockData = {
            type: FETCH_FILM_SUCCESS,
            list: {
                myList: [],
                recommendations: [],
            },
        };
        expect(reducer(mockInitData, mockData).myList.length).toBe(0);
    });

    it('should return right data when calling addFilm', () => {
        const mockData = {
            type: ADD_FILM,
            film: {
                id: 3,
            },
        };
        expect(reducer(mockInitData, mockData).myList.length).toBe(3);
    });

    it('should return right data when calling removeFilm', () => {
        const mockData = {
            type: REMOVE_FILM,
            film: {
                id: 1,
            },
        };
        expect(reducer(mockInitData, mockData).myList.length).toBe(1);
    });
});