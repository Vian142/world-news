//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import styles from './styles.css';

//////////////////////////////////////////////////////////////
class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onChange = (event) => {
        const value = _.get(event, 'target.value');
        if(this.props.onChange) this.props.onChange(value);
    }

    render() {
        const { value, name, placeholder, stylesInput, stylesContainer} = this.props;
        const properties = {
            type: 'text',
            name,
            value,
            placeholder: placeholder || '...',
            onChange: this.onChange,
            className: classnames(styles.input, stylesInput)
        };

        return (
            <div className={classnames(styles.inputContainer, stylesContainer)}>
                <input {...properties}/>
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default DateInput;

//////////////////////////////////////////////////////////////