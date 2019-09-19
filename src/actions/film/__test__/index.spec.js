import {ADD_FILM, REMOVE_FILM, FETCH_FILM_SUCCESS, FETCH_RECOMMEND_SUCCESS} from '../../../ducks/actionTypes';
import * as action from '../index';
import axios from "axios";

jest.mock('axios');

describe('FetchFilmData', () => {
    it('should return right data when calling fetchFilmData', done => {
        axios.get.mockImplementation(() => Promise.resolve({data: {myList: [], recommendations: []}}));
        let dispatched = [];
        const mockDispatch = ({type}) => dispatched.push(type);
        action.fetchFilmData()(mockDispatch).then(
            (res) => {
                done();
                expect(dispatched).toEqual([
                    FETCH_FILM_SUCCESS,
                    FETCH_RECOMMEND_SUCCESS
                ])
            }
        )
    });

    it('should return right data when calling fetchFilmData', done => {
        axios.get.mockImplementation(() => Promise.reject({error: 'test'}));
        const mockDispatch = () => {};
        action.fetchFilmData()(mockDispatch).catch(
            (err) => {
                done();
                expect(err.error).toEqual('test');
            }
        )
    });
});

describe('filmAction', () => {
    const mockData = {
        id: 1,
        img: '',
        title: '',
    };

    it('should return right data when calling addFilm', () => {
        expect(action.addFilm(mockData).type).toBe(ADD_FILM);
    });

    it('should return right data when calling removeFilm', () => {
        expect(action.removeFilm(mockData).type).toBe(REMOVE_FILM);
    });

    it('should return right data when calling fetchFilm', () => {
        expect(action.fetchFilmSuccess().type).toBe(FETCH_FILM_SUCCESS);
    });
});