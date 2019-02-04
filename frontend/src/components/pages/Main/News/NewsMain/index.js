//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import _ from 'lodash';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//////////////////////////////////////////////////////////////
import NewsMain from './NewsMain';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({ news }) => {
    const sortedNews = _.sortBy(news, ['views']);
    const mainNews = _.get(sortedNews, '0', []);
    return {
        news: mainNews
    };
};

//////////////////////////////////////////////////////////////
export default compose(
    withRouter,
    connect(mapStateToProps)
)(NewsMain);

//////////////////////////////////////////////////////////////
