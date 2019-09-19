import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film';
import DefaultListsStyle from './index.module.scss';

const FilmLists = ({
    styles,
    list,
    title,
    buttonTxt,
    clickHandler,
    contentTxt,
}) => {
    const filmList = list.map(
        (film) => (
            <Film {...film} key={film.id} buttonTxt={buttonTxt} clickHandler={() => clickHandler(film)} />
        ));
    return (
        <div className={styles.list__container}>
            <h3 className={styles.list__title}>
                {title}
            </h3>
            <div className={styles.list__content}>
                {
                    list.length === 0 &&
                    <h3>{contentTxt}</h3>
                }
                {filmList}
            </div>
        </div>
    );
};

FilmLists.propTypes = {
    styles: PropTypes.object,
    list: PropTypes.array,
    title: PropTypes.string,
    contentTxt: PropTypes.string,
    buttonTxt: PropTypes.string,
    clickHandler: PropTypes.func,
};

FilmLists.defaultProps = {
    styles: DefaultListsStyle,
    list: [],
    clickHandler: () => {},
    title: '',
    contentTxt: '',
    buttonTxt: '',
};

export default FilmLists;