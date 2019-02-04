//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import Banner from './Banner';
import News from './News/News';
import styles from './main.css';

//////////////////////////////////////////////////////////////
// container = 924px
const Main = () => {
    return (
        <div className={styles.main}>
            <Banner/>
            <div className={styles.contentWrapper}>
                <div className={styles.contentContainer}>
                    <News />
                </div>
            </div>
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default Main;

//////////////////////////////////////////////////////////////