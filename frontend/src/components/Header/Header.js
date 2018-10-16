//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';
import styles from './header.css';

//////////////////////////////////////////////////////////////
const Header = () => (
    <div className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <Link to='/' className={styles.logoLink}>
                    Мировые новости
                </Link>
            </div>
            
            <div className={styles.menu}>
                <Menu/>
            </div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
export default Header;

//////////////////////////////////////////////////////////////