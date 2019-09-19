import React from 'react';
import DefaultFilmStyle from './index.module.scss';
import PropTypes from 'prop-types';

const MyLists = ({
                     title,
                     id,
                     img,
                     buttonTxt,
                     clickHandler,
                     styles,
                 }) => {
    return (
        <div className={styles.film__container}>
            <div className={styles.film__img}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.film__button} onClick={clickHandler}>
                <div className={styles.button__txt}>
                    {buttonTxt}
                </div>
            </div>
        </div>
    );
};

MyLists.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    clickHandler: PropTypes.func,
    styles: PropTypes.object,
    buttonTxt: PropTypes.string,
};

MyLists.defaultProps = {
    styles: DefaultFilmStyle,
    id: 0,
    title: '',
    img: '',
    buttonTxt: '',
    clickHandler: () => {},
};

export default MyLists;