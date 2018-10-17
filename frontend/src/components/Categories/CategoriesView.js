//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Header from '../Header/Header';
import styles from './categories.css';

//////////////////////////////////////////////////////////////
const CategoryItem = ({ label, title }) => (
    <div className={styles.categoryItem}>
        <div className={styles.categoryTitle}>
            <Link to={`/${label}`} className={styles.categoryTitleLink}>{title}</Link>
        </div>
    </div>
);

//////////////////////////////////////////////////////////////
const CategoriesList = ({ categories }) => {
    return (
        <div className={styles.categoriesList}>
            {
                _.map(categories, (category, index) => <CategoryItem key={index} {...category} />)
            }
        </div>
    );
};

//////////////////////////////////////////////////////////////
class CategoriesView extends React.PureComponent {
    render() {
        const { categories } = this.props;
        return (
            <div className={styles.wrapper} >
                <Header />
                <div className={styles.contentWrapper}>
                    <div className={styles.mainTitle}>Список категорий новостей</div>
                    <CategoriesList categories={categories} />
                </div>
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default CategoriesView;

//////////////////////////////////////////////////////////////