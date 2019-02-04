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

import Main from './components/pages/Main/Main';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';
import News from './components/pages/News/News';
import NotFound from './components/pages/NotFound/NotFound';

const history = createBrowserHistory();

//////////////////////////////////////////////////////////////

// todo maps store categories for router exact

const routes = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Router history={history}>
                <Application>
                    <Switch component={Application}>
                        <Route exact path="/" component={Main} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/:category" component={Category} />
                        <Route path="/:category/:news" component={News} />
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