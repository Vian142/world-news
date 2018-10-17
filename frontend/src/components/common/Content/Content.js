//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import styles from './content.css';

//////////////////////////////////////////////////////////////
const Content = ({ content, children}) => {
    const markup = _.isString(content)
    return (
        <div className={styles.content}>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: markup }} />
            {children}
        </div>;
    );
}

//////////////////////////////////////////////////////////////
export default Content;

//////////////////////////////////////////////////////////////