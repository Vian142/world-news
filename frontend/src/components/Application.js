//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import {withRouter} from 'react-router-dom';
import 'normalize.css';
import '../styles/css/styles.css';
import Footer from './Footer/Footer';

//////////////////////////////////////////////////////////////
class Application extends React.PureComponent {
    render() {
        return (
            <div>
                <div style={{padding: '0 0 15px'}}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default withRouter(Application);

//////////////////////////////////////////////////////////////