//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import styles from './search.css';

//////////////////////////////////////////////////////////////
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onChange = event => this.setState({ value: event.target.value })

    render() {
        const { value } = this.state;
        return (
            <div className={styles.search}>
                <div className={styles.searchContainer}>
                    <input type='text'
                        onChange={this.onChange}
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