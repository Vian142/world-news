//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import classnames from 'classnames';
import styles from './preview.css';

const Social = () => (
    <div className={styles.socialList}>
        <a href='/' className={styles.socialLink}>
            <span className={classnames(styles.icon, styles.share)} />
        </a>
    </div>
);

const Preview = ({ thumbnail, title, date, category }) => (
    <div className={styles.preview}>
        <a href='/' className={styles.previewLink}>
            <span className={styles.previewImage}
                style={{ backgroundImage: `url(${thumbnail})` }}
            />
            <span className={styles.previewInfo}>
                <span className={styles.date}>{date}</span>
                <span className={styles.title}>{title}</span>
            </span>
        </a>
        <div className={styles.previewCategory}>
            <a href='/sport' className={styles.previewCategoryLink}>{category}</a>
        </div>
        <div className={styles.previewSocial}>
            <Social />
        </div>
    </div>
);

export default Preview;