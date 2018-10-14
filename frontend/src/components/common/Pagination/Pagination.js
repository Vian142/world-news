//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import styles from './pagination.css';

//////////////////////////////////////////////////////////////
class Pagination extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.pagination}>
                    <div className={styles.paginationItem}>1</div>
                    <div className={styles.paginationItem}>2</div>
                    <div className={styles.paginationItem}>3</div>
                </div>
            </div>
        );
    }
}
//////////////////////////////////////////////////////////////
export default Pagination;

//////////////////////////////////////////////////////////////