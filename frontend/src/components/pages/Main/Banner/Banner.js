//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import { CSSTransition } from 'react-transition-group';
import Form from './Form';
import styles from './banner.css';

//////////////////////////////////////////////////////////////
const BannerCard = ({ onShowForm }) => (
    <div className={classnames(styles.bannerCard, styles.frontCard)}>
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerTitle}>Мировые новости</div>
                <div className={styles.bannerDate}>
                    {moment().locale('ru').format('DD MMMM YYYY, dddd')}
                </div>
            </div>

            <div className={styles.bannerBottom}>
                <span className={styles.addNewsButton} onClick={onShowForm}>
                    Добавить новость
                </span>
            </div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
const BannerFormCard = ({ onClose }) => (
    <div className={classnames(styles.bannerCard, styles.backCard)}>
        <Form onClose={onClose} />
    </div>
);

//////////////////////////////////////////////////////////////
const Banner = (props) => {
    console.log('asd', props);
    return (
        <div className={styles.bannerWrapper}>
            <CSSTransition timeout={1000} in={props.showForm}
                classNames={{
                    enter: styles.show,
                    enterDone: styles.show,
                    exit: styles.hide,
                    exitDone: styles.hide
                }}
            >
                <div className={classnames(styles.bannerCardWrapper)}>
                    <BannerCard onShowForm={props.onShowForm} />
                    <BannerFormCard onClose={props.onCloseForm} />
                </div>
            </CSSTransition>
        </div>
    );
};

//////////////////////////////////////////////////////////////
export default Banner;

//////////////////////////////////////////////////////////////
