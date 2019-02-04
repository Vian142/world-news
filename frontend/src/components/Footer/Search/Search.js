//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import classnames from 'classnames';
import styles from './search.css';

//////////////////////////////////////////////////////////////
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            onFocus: false
        };
    }

    onChange = event => this.setState({ value: event.target.value })

    onFocus = () => this.setState({ onFocus: true })
    
    onBlur = () => this.setState({onFocus: false})

    render() {
        const { value, onFocus } = this.state;
        return (
            <div className={styles.search}>
                <div className={classnames(styles.searchContainer, onFocus && styles.focus)}>
                    <input type='text'
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        value={value}
                        className={styles.searchInput}
                        placeholder='Поиск'
                    />
                </div>
            </div>
        );
    }

}

//////////////////////////////////////////////////////////////
export default Search;

//////////////////////////////////////////////////////////////