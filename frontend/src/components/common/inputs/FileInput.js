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
        if(this.props.onChange) this.props.onChange(null);
    }

    render() {
        const { file, name = '', placeholder, stylesInput, stylesContainer } = this.props;

        const fileName = _.get(file, 'name');

        const properties = {
            id: `fileInput${name}`,
            type: 'file',
            name: 'fileInput',
            onChange: this.fileSelectedHandler,
            className: classnames(styles.inputFile, stylesInput)
        };

        return (
            <div className={classnames(styles.inputContainer, stylesContainer)}>
                <label htmlFor={`fileInput${name}`} className={styles.inputFileLabel}>
                    {fileName || placeholder || 'Upload file'}
                </label>
                {fileName && <span className={styles.inputFileClear} onClick={this.clearFile}/>}
                <input {...properties} />
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default FileInput;

//////////////////////////////////////////////////////////////