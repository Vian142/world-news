//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './menu.css';

//////////////////////////////////////////////////////////////
const menu = [
    {title: 'Главная', url: '/'},
    {title: 'Категори', url: '/categories'}
];

//////////////////////////////////////////////////////////////
const MenuItem = ({ url, title }) => (
    <li className={styles.menuItem}>
        <Link to={url} className={styles.menuLink}>{title}</Link>
    </li>
);

//////////////////////////////////////////////////////////////
const Menu = () => (
    <div className={styles.menuBlock}>
        <ul className={styles.menuList}>
            {
                _.map(menu, (item, index) => <MenuItem key={index} {...item}/>)
            }
        </ul>
    </div>
);

//////////////////////////////////////////////////////////////
export default Menu;

//////////////////////////////////////////////////////////////