//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import styles from './datenow.css';

//////////////////////////////////////////////////////////////
class DateNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment()
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: moment()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { date } = this.state;
        const { locale = 'ru', className } = this.props;
        return (
            <div className={classnames(styles.date, className)}>
                {moment(date).locale(locale).format('DD MMMM YYYY, dddd, hh:mm:ss')}
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default DateNow;

//////////////////////////////////////////////////////////////