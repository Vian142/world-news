//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux'
// import { Switch, Route, browserHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import routers from './routes';

// import reducers from './redux/reducers';

// Add the reducer to your store on the `routing` key
// const store = createStore(
//     combineReducers({
//         ...reducers,
//         routing: routerReducer
//     })
// )

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    routers(history),
    document.getElementById('root')
);