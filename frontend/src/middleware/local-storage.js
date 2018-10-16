//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

const defaultKeyStorage = 'wn-state';

//////////////////////////////////////////////////////////////
const loadState = () => {
    try { 
        const serializedState = localStorage.getItem(defaultKeyStorage);
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err) {
        return undefined;
    }
};

const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        console.log('serializedState', serializedState);
        localStorage.setItem(defaultKeyStorage, serializedState);
    } catch(err) {
        //
    }
};


export {
    loadState,
    saveState
};

//////////////////////////////////////////////////////////////