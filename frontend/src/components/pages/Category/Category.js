//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import _ from 'lodash';
import React from 'react';
import styles from './category.css';
import CategoryItem from './CategoryItem/CategoryItem';

//////////////////////////////////////////////////////////////
const NewsList = ({ news }) => (
    !_.isEmpty(news)
        ? <div className={styles.list}>
            {
                news.map(item => (
                    <CategoryItem key={item._id} {...item} />
                ))
            }
        </div>
        : 'Новостей нет'
);

//////////////////////////////////////////////////////////////
const Category = ({ news, categoryName }) => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.title}>
                Раздел {categoryName && `"${categoryName}"`}
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.content}>
                <NewsList news={news} />
            </div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
export default Category;

//////////////////////////////////////////////////////////////