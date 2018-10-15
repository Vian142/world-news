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
const BannerText = () => (
    <div className={styles.bannerCard}>
        <div className={styles.bannerContent}>
            <div className={styles.bannerTitle}>Мировые новости</div>
            <div className={styles.bannerDate}>12 сентября 2018, среда, 17:07</div>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
    }

    onShowForm = () => this.setState({ showForm: true })
    
    onCloseForm = () => this.setState({showForm: false})

    render() {
        const { showForm } = this.state;
        return (
            <div className={styles.bannerWrapper}>
                {!showForm && <div className={styles.bannerContainer}>
                    <BannerText />

                    <div className={styles.bannerBottom}>
                        <span className={styles.addNewsButton} onClick={this.onShowForm}>
                            Добавить новость
                        </span>
                    </div>
                </div>}
                {showForm && <div className={styles.bannerContainer}>
                    <div className={styles.bannerCard}>
                        <Form onClose={this.onCloseForm}/>
                    </div>
                </div>}
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default Banner;

//////////////////////////////////////////////////////////////
