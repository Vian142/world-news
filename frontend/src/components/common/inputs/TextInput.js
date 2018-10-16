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
class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (event) => {
        const value = _.get(event, 'target.value');
        if(this.props.onChange) this.props.onChange(value);
    }

    render() {
        const { value, error, name, placeholder} = this.props;
        const properties = {
            type: 'text',
            name,
            value: value || '',
            placeholder: placeholder || '...',
            onChange: this.onChange,
            className: classnames(styles.input, value && styles.noEmpty)
        };

        return (
            <div className={
                classnames(styles.inputContainer, value && styles.noEmpty, error && styles.error)
            }>
                <input {...properties}/>
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default TextInput;

//////////////////////////////////////////////////////////////