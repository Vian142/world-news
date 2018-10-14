//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import { TextInput, DateInput, SelectInput, FileInput} from '../../../common/inputs';
import styles from './form.css';

//////////////////////////////////////////////////////////////
const selectList = [
    { _id: 'asd51w1d', label: 'Происшествия'},
    { _id: 'dj13jaosdi', label: 'Политика'},
    { _id: 'ad56-o455', label: 'Новости'},
    { _id: '1dasd54', label: 'Технологии'},
    { _id: '0asd5423d', label: 'Спорт'},
    { _id: '4dq3ee123d', label: 'Спорт'},
    { _id: '95lpz1a3e5t4g', label: 'Спорт'},
    { _id: 'd4li1483', label: 'Спорт'},
];

//////////////////////////////////////////////////////////////
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                category: 'dj13jaosdi',
                previewImage: null
            }
        };
    }
    onChange = (value, field) => this.setState({
        values: {
            [field]: value
        }
    })
    render() {
        const { values } = this.state;
        const { category, previewImage } = values;

        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <span className={styles.closeButton}/>
                    <div className={styles.title}>Добавить новость</div>
                    <form className={styles.form}>
                        <div className={styles.inputBlock}>
                            <TextInput placeholder='Название'/>
                        </div>
                        <div className={styles.inputBlock}>
                            <DateInput placeholder='Текст'/>
                        </div>
                        <div className={styles.inputBlock}>
                            <SelectInput
                                selected={category}
                                placeholder='Категория'
                                items={selectList}
                                onChange={(_id) => this.onChange(_id, 'category')}/>
                        </div>
                        <div className={styles.inputBlock}>
                            <FileInput
                                file={previewImage}
                                placeholder='Добавить файл'
                                onChange={(file) => this.onChange(file, 'previewImage')} />
                        </div>
                        <div className={styles.submitWrapper}>
                            <button className={styles.submitButton}>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default Form;

//////////////////////////////////////////////////////////////