import React from 'react';
import { shallow } from 'enzyme';
import FilmLists from "../../../components/FilmLists";
import { NetFlix } from '../index';
import styles from '../index.module.scss';

const mockAddFilm = jest.fn();
const mockRemoveFilm = jest.fn();

const data = {
    styles: styles,
    filmAction: {
        addFilm: mockAddFilm,
        removeFilm: mockRemoveFilm,
        fetchFilmData: jest.fn(),
    },
    myList: [],
    recommendations: [],
};

describe('NetFlix Component', () => {
    const component = shallow(
        <NetFlix {...data} />
    );

    it('NetFlix render properly', () => {
        expect(component.find('.page__container')).toHaveLength(1);
    });

    it('NetFlix function should run properly', () => {
        component.find(FilmLists).at(0).props().clickHandler({id: 1});
        component.find(FilmLists).at(1).props().clickHandler({id: 1});
        expect(mockAddFilm).toHaveBeenCalled();
        expect(mockRemoveFilm).toHaveBeenCalled();
    });

})