import React from 'react';
import { shallow } from 'enzyme';
import Film from '../index';
import styles from '../index.module.scss';

const data = {
    id: 1,
    title: 'test',
    img: '',
    clickHandler: jest.fn(),
    styles,
    buttonTxt: 'Add',
};

test('Film Component', () => {
    const component = shallow(
        <Film {...data} />
    );
    expect(component.find('.film__container')).toHaveLength(1);
    expect(Film.defaultProps.clickHandler()).toBe(undefined);

})