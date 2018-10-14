//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import Preview from '../Preview/Preview';
import Pagination from '../../../common/Pagination/Pagination';
import styles from './newsfeed.css';

import Image0 from '../image0.jpg';

//////////////////////////////////////////////////////////////
const news = [
    {
        _id: 'ljh9h-ad4d5as-hcv-asd13qw',
        title: 'Найдены виновные в обвале рубля',
        date: '01:50, 11 сентября 2018',
        thumbnail: Image0,
        category: 'Спорт',
        social: '/',
        views: 320
    },
    {
        _id: '0ksd9d-ad4d5as-asdwe4a-asd13qw',
        title: 'НАСА отреагировало на обвинения в продырявливании "Союза"',
        date: '01:50, 11 сентября 2018',
        thumbnail: Image0,
        category: 'Спорт',
        social: '/',
        views: 320
    },
    {
        _id: '102s5w-plk54-ds6-asd13qw',
        title: 'НАСА отреагировало на обвинения в продырявливании "Союза"',
        date: '01:50, 11 сентября 2018',
        thumbnail: Image0,
        category: 'Спорт',
        social: '/',
        views: 320
    },
];

const MoreNews = () => (
    <div className={styles.moreBlock}>
        <span className={styles.moreButton}>Больше новостей</span>
    </div>
);

//////////////////////////////////////////////////////////////
const NewsFeed = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.newsFeed}>
                    {
                        _.map(news, (item, index) => (
                            <div key={index} className={styles.newsFeedItem}>
                                <Preview {...item} />
                            </div>
                        ))
                    }
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomLeft}>
                        <MoreNews/>
                    </div>
                    <div className={styles.bottomRight}>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default NewsFeed;

//////////////////////////////////////////////////////////////