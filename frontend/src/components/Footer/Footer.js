//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import Links from './Links/Links';
import styles from './footer.css';

//////////////////////////////////////////////////////////////
const menu = [
    { title: 'Редакция', url: '/' },
    { title: 'Реклама', url: '/' },
    { title: 'Пресс-релизы', url: '/' },
    { title: 'Техподдержка', url: '/' },
    { title: 'Спецпроекты', url: '/' },
    { title: 'Вакансии', url: '/' },
    { title: 'RSS', url: '/' },
];

//////////////////////////////////////////////////////////////
const FooterMenu = () => (
    <div className={styles.footerMenu}>
        <ul className={styles.menuList}>
            {
                _.map(menu, ({ title, url }, index) => (
                    <li key={index} className={styles.menuItem}>
                        <Link to={url} className={styles.menuLink}>{title}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

//////////////////////////////////////////////////////////////
const Footer = () => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.footerRow}>
                    <div className={styles.left}>
                        <Search />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.linksWrapper}>
                            <Links/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.footerRow}>
                    <div className={styles.left}>
                        <FooterMenu />
                    </div>
                    <div className={styles.right}>
                        <div className={classnames(styles.copyright, styles.right)}>
                            <span className={styles.copyrightText}>
                                &copy; 1999–2018 ООО &laquo;Мировые новости&raquo;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
export default Footer;

//////////////////////////////////////////////////////////////