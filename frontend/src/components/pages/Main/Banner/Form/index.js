//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import { connect } from 'react-redux';
import { addNews } from '../../../../../actions';

//////////////////////////////////////////////////////////////
import Form from './Form';

//////////////////////////////////////////////////////////////
const mapStateToProps = ({ categories }) => (
    {
        categories
    }
);

const mapDispatchToProps = dispatch => {
    return {
        onAdd: news => dispatch(addNews(news))
    };
};

//////////////////////////////////////////////////////////////
export default connect(mapStateToProps,mapDispatchToProps)(Form);

//////////////////////////////////////////////////////////////