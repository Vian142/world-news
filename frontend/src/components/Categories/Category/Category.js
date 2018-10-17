//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import { connect } from 'react-redux';
import _ from 'lodash';
import CategoryView from './CategoryView';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({ categories, news }, props) => {
    const categoryLabel = _.get(props, 'match.params.category');
    const category = _.find(categories, { label: categoryLabel });
    const filterNews = _.filter(news, item => item.category == category._id);
    return {
        news: filterNews,
        category
    };
};

//////////////////////////////////////////////////////////////
const Category = connect(mapStateToProps)(CategoryView);

//////////////////////////////////////////////////////////////
export default Category;

//////////////////////////////////////////////////////////////