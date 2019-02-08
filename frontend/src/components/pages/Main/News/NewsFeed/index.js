//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import { compose} from 'recompose';
import { connect } from 'react-redux';
import { addViews } from '../../../../../actions';
import { getFilteredNews } from '../../../../../reducers';
import NewsFeed from './NewsFeed';

//////////////////////////////////////////////////////////////
const mapStateToProps = (state) => (
    {
        news: getFilteredNews(state)
    }
);

const mapDispatchToProps = dispatch => (
    {
        onAddViews: _id => dispatch(addViews(_id))
    }
);

//////////////////////////////////////////////////////////////
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(NewsFeed);




//////////////////////////////////////////////////////////////