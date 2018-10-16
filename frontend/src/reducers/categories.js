//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

const initialCategories = [
    {
        _id: '0',
        label: 'sport',
        title: 'Спорт'
    },
    {
        _id: '1',
        label: 'politics',
        title: 'Политика'
    }
];

const reducer = (state = initialCategories, action) => {
    switch(action.type) {
    default:
        return state;
    }
};

//////////////////////////////////////////////////////////////
export default reducer;

//////////////////////////////////////////////////////////////