//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import _ from 'lodash';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import News from './News';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({news}, {match}) => {
    const { params } = match;
    const newsData = _.find(news, item => item._id === params.news);
    if(news.length === 0 || !newsData) {
        return {
            news: null
        };
    }

    return {
        news: newsData
    };
};

//////////////////////////////////////////////////////////////

export default compose(
    withRouter,
    connect(mapStateToProps)
)(News);

//////////////////////////////////////////////////////////////