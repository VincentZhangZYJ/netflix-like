import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as filmAction from '../../actions/film';
import FilmLists from "../../components/FilmLists";
import Logo from '../../components/logo';
import DefaultNetFlixStyle from './index.module.scss';

export const NetFlix = ({
    filmAction,
    myList,
    recommendations,
    styles,
}) => {
    useEffect(() => {
        filmAction.fetchFilmData();
    }, []);

    if(myList.length === 0 && recommendations.length ===0) {
        return <div />;
    }

    return (
        <div className={styles.page__container}>
            <div className={styles.page__content}>
                <div className={styles.page__header}>
                    <Logo />
                </div>
                <FilmLists
                    list={myList}
                    clickHandler={filmAction.removeFilm}
                    title='My List'
                    buttonTxt='Remove'
                    contentTxt='No film has been added to your list yet'
                />
                <FilmLists
                    list={recommendations}
                    clickHandler={filmAction.addFilm}
                    title='Recommendation List'
                    buttonTxt='Add'
                    contentTxt='All films have been added to your list'
                />
            </div>
        </div>
    );
}

NetFlix.propTypes = {
    myList: PropTypes.array,
    recommendations: PropTypes.array,
    filmAction: PropTypes.object,
    styles: PropTypes.object,
};

NetFlix.defaultProps = {
    myList: [],
    recommendations: [],
    filmAction: {},
    styles: DefaultNetFlixStyle,
};

const mapStateToProps = (state) => {
    const {
        filmData: {
            myList,
            recommendations,
        }
    } = state;

    return {
        myList,
        recommendations,
    };
};

const mapDispatchToProps = dispatch => ({
    filmAction: bindActionCreators(filmAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NetFlix);
