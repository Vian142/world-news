//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import Header from '../../Header/Header';
import NewsBlock from './NewsBlock/NewsBlock';
import styles from './category.css';

//////////////////////////////////////////////////////////////
class CategoryView extends React.PureComponent {
    render() {
        const { category, news } = this.props;
        const categoryTitle = _.get(category, 'title', '');
        return (
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.title}>Раздел: <b>{categoryTitle}</b></div>
                    <div className={styles.newsList}>
                        {
                            _.map(news, (item, index) => (
                                <div key={index} className={styles.newsListItem}>
                                    <NewsBlock {...item}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default CategoryView;

//////////////////////////////////////////////////////////////