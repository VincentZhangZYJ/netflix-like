import React from 'react';
import { shallow } from 'enzyme';
import FilmLists from '../index';
import Film from '../../Film';
import styles from '../index.module.scss';

const data = {
    styles: styles,
    list: [
        {
            "title": "Futurama",
            "id": 1,
            "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
        },
        {
            "title": "The Interview",
            "id": 2,
            "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
        },
    ],
    title: 'My Lists',
    buttonTxt: 'Remove',
    clickHandler: jest.fn(),
};

describe('FilmLists Component', () => {
    const component = shallow(
        <FilmLists {...data} />
    );

    it('MyLists render properly', () => {
        expect(component.find('.list__container')).toHaveLength(1);
        expect(component.find(Film)).toHaveLength(2);
    });

    it('MyLists render properly', () => {
        expect(FilmLists.defaultProps.clickHandler()).toBe(undefined);
        expect(component.find(Film).at(0).props().clickHandler).not.toThrow();
    });

})