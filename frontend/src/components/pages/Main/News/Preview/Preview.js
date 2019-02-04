//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import Placeholder from './placeholder-image.jpg';
import styles from './preview.css';

//////////////////////////////////////////////////////////////
const Social = () => (
    <div className={styles.socialList}>
        <a href='/' className={styles.socialLink}>
            <span className={classnames(styles.icon, styles.share)} />
        </a>
    </div>
);

//////////////////////////////////////////////////////////////
const Preview = ({ _id, thumbnail, title, date, category, categories }) => {

    const thumbnailIamge = _.get(thumbnail, 'data');
    const categoryNews = _.find(categories, { _id: category });
    
    const categoryTitle = _.get(categoryNews, 'title');
    const categoryLabel = _.get(categoryNews, 'label');

    return (
        <div className={styles.preview}>
            <a href='/' className={styles.previewLink}>
                <span className={styles.previewImage}
                    style={{ backgroundImage: `url(${thumbnailIamge || Placeholder})` }}
                />
                <span className={styles.previewInfo}>
                    <span className={classnames(styles.date, !thumbnailIamge && styles.black)}>{date}</span>
                    <span className={classnames(styles.title, !thumbnailIamge && styles.black)}>{title}</span>
                </span>
            </a>
            <div className={styles.previewCategory}>
                <a href={`/${categoryLabel}/${_id}`} className={styles.previewCategoryLink}>
                    {categoryTitle}
                </a>
            </div>
            <div className={styles.previewSocial}>
                <Social />
            </div>
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default Preview;

//////////////////////////////////////////////////////////////