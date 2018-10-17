//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Application from './components/Application';
import Main from './components/Main/Main';
import Category from './components/Categories/Category/Category';
import NewsPage from './components/News/NewsPage/NewsPage';
import NotFound from './components/NotFound/NotFound';

const history = createBrowserHistory();

//////////////////////////////////////////////////////////////

// todo maps store categories for router exact

const routes = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Router history={history}>
                <Application>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/:category" component={Category} />
                        <Route exact path="/:category/:news" component={NewsPage} />
                        <Route path="/*" component={NotFound} />
                    </Switch>
                </Application>
            </Router>
        </BrowserRouter>
    </Provider>
);

//////////////////////////////////////////////////////////////
export default routes;

//////////////////////////////////////////////////////////////