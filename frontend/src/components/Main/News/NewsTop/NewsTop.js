//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import _ from 'lodash';
import { connect } from 'react-redux';

//////////////////////////////////////////////////////////////
import NewsTopView from './NewsTopView';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({ news }) => {
    const sortedNews = _.sortBy(news, ['views']);
    return {
        news: sortedNews
    };
};

//////////////////////////////////////////////////////////////
const NewsTop = connect(mapStateToProps)(NewsTopView);

//////////////////////////////////////////////////////////////
export default NewsTop;

//////////////////////////////////////////////////////////////