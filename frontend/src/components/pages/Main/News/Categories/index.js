//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import { connect } from 'react-redux';
import {setFilter} from '../../../../../actions';

//////////////////////////////////////////////////////////////
import Categories from './Categories';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({ filter, categories, news}) => {
    return {
        activeCategory: filter,
        categories: [{ _id: 'all', label: 'all', title: 'Все' }, ...categories],
        hasNews: news.length > 0
    };
};


const mapDispatchToProps = dispatch => { 
    return {
        onSetFilter: filter => dispatch(setFilter(filter))
    };
};

//////////////////////////////////////////////////////////////
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

//////////////////////////////////////////////////////////////