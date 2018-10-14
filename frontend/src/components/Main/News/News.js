//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import classnames from 'classnames';
import Categories from './Categories/Categories';
import Preview from './Preview/Preview';
import NewsList from './NewsList/NewsList';
import NewsFeed from './NewsFeed/NewsFeed';
import styles from './news.css';

import Image0 from './image0.jpg';

//////////////////////////////////////////////////////////////
const news = {
    _id: 'd5s-ad4d5as-asdwe4a-asd13qw',
    title: 'Дзюба стал "человеком года" по версии GQ',
    date: '01:50, 11 сентября 2018',
    thumbnail: Image0,
    category: 'Спорт',
    social: '/',
    views: 320
};

//////////////////////////////////////////////////////////////
const categories = [
    { _id: '0', title: 'Политика' },
    { _id: '1', title: 'Спорт' },
    { _id: '2', title: 'Происшествия' },
    { _id: '3', title: 'Наука' },
    { _id: '4', title: 'Бизнес' },
];

//////////////////////////////////////////////////////////////
const mainNews = [
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
        _id: 'd5s-ad4d5as-asdwe4a-as498jw',
        title: 'Меркель допустила атаку Германии на Сирию',
        date: '01:50, 11 сентября 2018',
        category: 'Спорт',
        views: 320
    }
];

//////////////////////////////////////////////////////////////
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all',
            categories: []
        };
    }

    selectCategory = _id => this.setState({ category: _id });

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.categoriesWrapper}>
                    <Categories categories={categories} />
                </div>
                <div className={styles.middle}>
                    <div className={styles.columns}>
                        <div className={classnames(styles.column, styles.left)}>
                            <div className={styles.titleBlock}>
                                <div className={classnames(styles.date, styles.title)}>
                                    12 Сентября 2018, Среда, 17:07
                                </div>
                            </div>
                            <div className={styles.mainNews}>
                                <Preview {...news} />
                            </div>
                        </div>
                        <div className={classnames(styles.column, styles.right)}>
                            <div className={styles.titleBlock}>
                                <div className={styles.title}>
                                    Главные новости
                                </div>
                            </div>
                            <NewsList news={mainNews} />
                        </div>
                    </div>
                </div>
                <div>
                    <NewsFeed />
                </div>
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default News;

//////////////////////////////////////////////////////////////