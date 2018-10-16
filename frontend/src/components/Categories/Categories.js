//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import { connect } from 'react-redux';

import CategoriesView from './CategoriesView';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({ categories }) => {
    const listCategories = categories;
    return {
        categories: listCategories
    };
};

//////////////////////////////////////////////////////////////
const Categories = connect(mapStateToProps)(CategoriesView);

//////////////////////////////////////////////////////////////
export default Categories;

//////////////////////////////////////////////////////////////

