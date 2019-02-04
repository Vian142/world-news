//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import { ADD_NEWS, DELETE_NEWS } from '../actions';
import initialState from '../store/state';

//////////////////////////////////////////////////////////////
const newsReducer = (state = {}, action) => {
    switch(action.type) {
    case ADD_NEWS:
        return {
            _id: action._id,
            title: action.title,
            date: action.date,
            category: action.category,
            thumbnail: action.thumbnail
        };
    default: return state;
    }
};

const reducer = (state = initialState.news, action) => {
    switch(action.type) {
    case ADD_NEWS:
        return [...state, newsReducer(undefined, action)];
    case DELETE_NEWS: {
        const index = state.findIndex(news => news._id === action._id);
        return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
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