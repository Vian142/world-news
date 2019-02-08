//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import _ from 'lodash';
import { ADD_NEWS, DELETE_NEWS, ADD_VIEWS } from '../types';
import { news } from './state';

//////////////////////////////////////////////////////////////
const reducer = (state = news, { type, payload }) => {
    switch(type) {
    case ADD_NEWS: {
        return [...state, payload];
    }

    case DELETE_NEWS: {
        const index = state.findIndex(news => news._id === payload._id);
        return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
    }
    case ADD_VIEWS: {
        const newState = [...state];
        const newsIndex = _.findIndex(newState, item => item._id === payload._id);
        if(newsIndex) {
            newState[newsIndex].views += 1;
        }
        return newState;
    }
    default:
        return state;
    }
};

//////////////////////////////////////////////////////////////
const getFilteredNews = (state, filter) => {
    if(filter == 'all') return state;

    return state.filter(news => news.category == filter);
};

//////////////////////////////////////////////////////////////
export default reducer;

export {
    getFilteredNews
};

//////////////////////////////////////////////////////////////