//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import { compose, withState, withHandlers } from 'recompose';
import Banner from './Banner';

//////////////////////////////////////////////////////////////

export default compose(
    withState('showForm', 'setShowForm', false),
    withHandlers({
        onShowForm: props => () => props.setShowForm(true),
        onCloseForm: props => () => props.setShowForm(false)
    }),
)(Banner);

//////////////////////////////////////////////////////////////