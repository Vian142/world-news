//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
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
const Preview = ({ _id, thumbnail, title, date, category, categories, views}) => {
    const thumbnailIamge = _.get(thumbnail, 'data');
    const categoryNews = _.find(categories, { _id: category });
    
    const categoryTitle = _.get(categoryNews, 'title');
    const categoryLabel = _.get(categoryNews, 'label');

    return (
        <div className={styles.preview}>
            <Link to={`/${categoryLabel}/${_id}`} className={styles.previewLink}>
                <span className={styles.previewImage}
                    style={{ backgroundImage: `url(${thumbnailIamge || Placeholder})` }}
                />
                <span className={styles.previewInfo}>
                    <span className={classnames(styles.date, !thumbnailIamge && styles.black)}>
                        {date}
                    </span>
                    <span className={classnames(styles.title, !thumbnailIamge && styles.black)}>
                        {title} {views}
                    </span>
                </span>
            </Link>
            <div className={styles.previewCategory}>
                <Link to={`/${categoryLabel}`} className={styles.previewCategoryLink}>
                    {categoryTitle}
                </Link>
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