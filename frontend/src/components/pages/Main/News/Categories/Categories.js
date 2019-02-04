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
const CategoriesItem = ({ title, _id, activeCategory, onSetFilter }) => (
    <div className={
        classnames(styles.categoriesItem, (activeCategory == _id) && styles.active)
    }
    onClick={() => onSetFilter(_id)}
    >
        {title}
    </div>
);

//////////////////////////////////////////////////////////////
const Categories = ({ hasNews, activeCategory, categories, onSetFilter }) => {
    if(_.isEmpty(categories)) return <div className={styles.categoriesContainer} />;
    return (
        <div className={styles.categoriesContainer}>
            {hasNews && <div className={styles.categoriesList}>
                {
                    _.map(
                        categories,
                        (category, index) => <CategoriesItem
                            key={index}
                            onSetFilter={onSetFilter}
                            {...category}
                            activeCategory={activeCategory} />
                    )
                }
            </div>}
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default Categories;

//////////////////////////////////////////////////////////////