//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import Form from './Form/Form';
import styles from './banner.css';

//////////////////////////////////////////////////////////////
const Content = () => (
    <div className={styles.bannerCard}>
        <div className={styles.bannerContent}>
            <div className={styles.bannerTitle}>Мировые новости</div>
            <div className={styles.bannerDate}>12 сентября 2018, среда, 17:07</div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
const Banner = () => (
    <div className={styles.bannerWrapper}>
        {false && <div className={styles.bannerContainer}>
            <Content />

            <div className={styles.bannerBottom}>
                <span className={styles.addNewsButton}>Добавить новость</span>
            </div>
        </div>}
        {true && <div className={styles.bannerContainer}>
            <div className={styles.bannerCard}>
                <Form />
            </div>
        </div>}
    </div>
);

//////////////////////////////////////////////////////////////
export default Banner;

//////////////////////////////////////////////////////////////
