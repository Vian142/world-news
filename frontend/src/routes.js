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
import Application from './components/Application';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

const history = createBrowserHistory();

//////////////////////////////////////////////////////////////
const routes = () => (
    <BrowserRouter>
        <Router history={history}>
            <Application>
                <Switch component={Application}>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/*" component={NotFound} />
                </Switch>
            </Application>
        </Router>
    </BrowserRouter>
);

//////////////////////////////////////////////////////////////
export default routes;

//////////////////////////////////////////////////////////////