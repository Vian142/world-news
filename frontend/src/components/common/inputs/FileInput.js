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
class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    fileSelectedHandler = event => {
        const value = _.get(event, 'target.files[0]');
        if(this.props.onChange) this.props.onChange(value);
    }

    clearFile = () => {
        if(this.props.clear) this.props.clear(null);
    }

    render() {
        const { file, name = '', placeholder, error } = this.props;

        const fileName = _.get(file, 'name');

        const properties = {
            id: `fileInput${name}`,
            type: 'file',
            name: 'fileInput',
            onChange: this.fileSelectedHandler,
            className: classnames(styles.inputFile)
        };

        return (
            <div className={classnames(styles.inputContainer, file && styles.noEmpty, error && styles.error)}>
                <label htmlFor={`fileInput${name}`}
                    className={classnames(styles.inputFileLabel, file && styles.noEmpty)}>
                    {fileName || placeholder || 'Upload file'}
                </label>
                {fileName && <span className={styles.inputFileClear} onClick={this.clearFile} title='Удалить'/>}
                <input {...properties} />
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default FileInput;

//////////////////////////////////////////////////////////////