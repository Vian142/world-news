//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import classnames from 'classnames';
import DateNow from '../../../common/DateNow/DateNow';
import Categories from './Categories';
import NewsMain from './NewsMain';
import NewsTop from './NewsTop';
import NewsFeed from './NewsFeed';
import styles from './news.css';

//////////////////////////////////////////////////////////////
const News = () => (
    <div className={styles.wrapper}>
        <div className={styles.categoriesWrapper}>
            <Categories />
        </div>
        <div className={styles.middle}>
            <div className={styles.columns}>
                <div className={classnames(styles.column, styles.left)}>
                    <div className={styles.titleBlock}>
                        <div className={classnames(styles.date, styles.title)}>
                            <DateNow locale='ru' />
                        </div>
                    </div>
                    <div className={styles.mainNews}>
                        <NewsMain />
                    </div>
                </div>
                <div className={classnames(styles.column, styles.right)}>
                    <div className={styles.titleBlock}>
                        <div className={styles.title}>
                            Главные новости
                        </div>
                    </div>
                    <NewsTop />
                </div>
            </div>
        </div>
        <div>
            <NewsFeed />
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
export default News;

//////////////////////////////////////////////////////////////