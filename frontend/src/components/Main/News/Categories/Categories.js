//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import styles from './categories.css';

//////////////////////////////////////////////////////////////
const CategoriesItem = ({ title, active }) => (
    <div className={classnames(styles.categoriesItem, (active && styles.active))}>
        {title}
    </div>
);

//////////////////////////////////////////////////////////////
const Categories = ({ categories }) => {
    if(_.isEmpty(categories)) return <div className={styles.categoriesContainer} />;
    categories.unshift({ _id: 'all', title: 'Все' });
    return (
        <div className={styles.categoriesContainer}>
            <div className={styles.categoriesList}>
                {
                    _.map(
                        categories,
                        (category, index) => <CategoriesItem
                            key={index}
                            {...category}
                            active={index == 0} />
                    )
                }
            </div>
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default Categories;

//////////////////////////////////////////////////////////////