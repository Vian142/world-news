//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
const initialCategories = [
    {
        _id: '0',
        label: 'politics',
        title: 'Политика'
    },
    {
        _id: '1',
        label: 'sport',
        title: 'Спорт'
    },
    {
        _id: '2',
        label: 'accidents',
        title: 'Происшествия'
    },
    {
        _id: '3',
        label: 'science',
        title: 'Наука'
    },
    {
        _id: '4',
        label: 'business',
        title: 'Бизнес'
    }
];

//////////////////////////////////////////////////////////////
const reducer = (state = initialCategories, action) => {
    switch(action.type) {
    default:
        return state;
    }
};

//////////////////////////////////////////////////////////////
export default reducer;

//////////////////////////////////////////////////////////////