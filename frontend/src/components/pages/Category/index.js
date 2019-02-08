//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import _ from 'lodash';
import { compose, mapProps } from 'recompose';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Category from './Category';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({ news, categories }, { match }) => {
    if(news.length === 0) return { news: [] };

    const { params } = match;
    const category = _.find(categories, item => item.label === params.category);
    if(!category) return { news: null, categoryName: '' };

    let newsByCategories = _.map(news, item => {
        if(item.category === category._id) return item;
    });

    newsByCategories = _.compact(newsByCategories);

    return {
        news: newsByCategories,
        categoryName: category.title
    };
};

//////////////////////////////////////////////////////////////
export default compose(
    withRouter,
    connect(mapStateToProps),
    mapProps(
        ({ news, categoryName }) =>  ({ news, categoryName })
    )
)(Category);

//////////////////////////////////////////////////////////////