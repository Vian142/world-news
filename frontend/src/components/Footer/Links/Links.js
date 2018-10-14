//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import styles from './links.css';

//////////////////////////////////////////////////////////////
const getIcon = (icon) => {
    switch(icon) {
    case 'appstore': return styles.appstore;
    default: '';
    }
};

//////////////////////////////////////////////////////////////
const links = [
    { type: 'appstore', url: '/' },
];

//////////////////////////////////////////////////////////////
const LinksItem = ({ type, url }) => (
    <li className={styles.linksItem}>
        <a href={url} target='_blank' rel='noopener noreferrer'
            className={styles.linksLink}>
            <span className={classnames(styles.icon, getIcon(type))} />
        </a>
    </li>
);

//////////////////////////////////////////////////////////////
const Links = () => (
    <div className={styles.linksContainer}>
        <ul className={classnames(styles.linksList, styles.right)}>
            {
                _.map(links, (item, index) => <LinksItem key={index} {...item} />)
            }
        </ul>
    </div>
);

//////////////////////////////////////////////////////////////
export default Links;

//////////////////////////////////////////////////////////////