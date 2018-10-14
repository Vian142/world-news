//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import styles from './newslist.css';

//////////////////////////////////////////////////////////////

const NewsItem = ({ _id, title, views, date }) => (
    <div className={styles.newsItem}>
        <div className={styles.title}>
            <a href={`/${_id}`} className={styles.titleLink}>{title}</a>
        </div>
        <div className={styles.info}>
            <div className={styles.infoViews}>
                <span className={styles.viewsBlock}>{views}</span>
            </div>
            <div className={styles.infoDate}>{date}</div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
const NewsList = ({news}) => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.newsList}>
                {
                    _.map(news, item => <NewsItem key={item._id} {...item}/>)
                }
            </div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
export default NewsList;

//////////////////////////////////////////////////////////////