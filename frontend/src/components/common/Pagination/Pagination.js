//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import styles from './pagination.css';

//////////////////////////////////////////////////////////////

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { pages } = this.props;
        return (
            <div className={styles.wrapper}>
                {
                    _.map(_.times(pages, Number), (item, i) => {
                        return <li key={i}>{item + 1}</li>;
                    })
                }
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default Pagination;

//////////////////////////////////////////////////////////////