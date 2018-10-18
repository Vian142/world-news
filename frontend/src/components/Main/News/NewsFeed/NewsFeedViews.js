//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import Preview from '../Preview/Preview';
// import Pagination from '../../../common/Pagination/Pagination';
import withPagination from '../../../common/withPagination';
import styles from './newsfeed.css';

//////////////////////////////////////////////////////////////
const MoreNews = () => (
    <div className={styles.moreBlock}>
        <span className={styles.moreButton}>Больше новостей</span>
    </div>
);

//////////////////////////////////////////////////////////////
const NewsFeed = (props) => {
    console.log(props);
    const { news } = props;
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
                        {false && <MoreNews />}
                    </div>
                </div>
            </div>
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default withPagination(NewsFeed,
    {
        field: 'news',
        limit: 10
    }
);

//////////////////////////////////////////////////////////////