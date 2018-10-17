//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './newsblock.css';

//////////////////////////////////////////////////////////////
const NewsBlock = ({ thumbnail, title, views, date }) => {
    const newsImage = _.get(thumbnail, 'data');
    return (
        <div className={styles.news}>
            <div className={styles.newsContainer}>
                <div className={styles.thumbnail}>
                    <div className={styles.thumbnailImage}
                        style={{ backgroundImage: `url(${newsImage})` }}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Link to='/' className={styles.titleLink}>{title}</Link>
                    </div>
                    <div className={styles.information}>
                        <span className={styles.views}>{views}</span>
                        <span className={styles.date}>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default NewsBlock;

//////////////////////////////////////////////////////////////