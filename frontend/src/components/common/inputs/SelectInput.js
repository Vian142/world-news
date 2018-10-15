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
const SelectItem = ({ _id, title, onClick }) => (
    <div className={styles.selectListItem} onClick={() => onClick(_id)} >
        <span className={styles.selectListItemText}>
            {title}
        </span>
    </div>
);

//////////////////////////////////////////////////////////////
const SelectList = ({ show, items, onClickItem }) => {
    if(!show) return <div />;
    return (
        <div className={styles.selectListWrapper}>
            <div className={styles.selectList}>
                {
                    _.map(items, (item, index) => <SelectItem key={index} {...item} onClick={onClickItem} />)
                }
            </div>
        </div>
    );
};


//////////////////////////////////////////////////////////////
class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    toggleShow = () => this.setState({ show: !this.state.show });

    onClose = () => this.setState({ show: false });

    onClickItem = value => {
        if(this.props.onChange) {
            this.props.onChange(value);
            this.onClose();
        } else {
            this.onClose();
        }
    }

    render() {
        const { show } = this.state;
        const { selected, placeholder, error, items } = this.props;

        const selectedItem = _.find(items, { _id: selected });
        const selectedTitle = _.get(selectedItem, 'title');

        return (
            <div className={classnames(styles.inputContainer, error && styles.error)}>
                <div className={
                    classnames(styles.selectInputContainer, show && styles.active, selectedItem && styles.selected)
                }
                onClick={this.toggleShow}>
                    <span className={
                        classnames(styles.selectedText, show && styles.active, selectedItem && styles.selected)
                    }>
                        {selectedTitle || placeholder || ''}
                    </span>
                </div>
                <SelectList items={items} show={show} onClickItem={this.onClickItem} />
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default SelectInput;

//////////////////////////////////////////////////////////////