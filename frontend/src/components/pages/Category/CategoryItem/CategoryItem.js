//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import styles from './styles.css';

//////////////////////////////////////////////////////////////
const CategoryItem = (props) => {
    const { thumbnail, title, date, views } = props;
    return (
        <div className={styles.categoryItem}>
            <div className={styles.thumbnail}
                style={{backgroundImage: `url(${thumbnail.data})`}}
            />
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>Short description</div>
                <div className={styles.bottom}>
                    <span className={styles.item}>
                        {date}
                    </span>
                    <span className={styles.item}>
                        {views}
                    </span>
                </div>
            </div>
        </div>
    );
};


//////////////////////////////////////////////////////////////
export default CategoryItem;

//////////////////////////////////////////////////////////////
