//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import { connect } from 'react-redux';
import {setFilter} from '../../../../actions';

//////////////////////////////////////////////////////////////
import CategoriesView from './CategoriesView';

//////////////////////////////////////////////////////////////
const mapStateToProps = (state) => {
    const { filter } = state;
    return {
        activeCategory: filter,
        categories:  [{ _id: 'all', label: 'all', title: 'Все' }]
    };
};


const mapDispatchToProps = dispatch => { 
    return {
        onSetFilter: filter => dispatch(setFilter(filter))
    };
};

//////////////////////////////////////////////////////////////
const Categories = connect(mapStateToProps, mapDispatchToProps)(CategoriesView);

//////////////////////////////////////////////////////////////
export default Categories;

//////////////////////////////////////////////////////////////