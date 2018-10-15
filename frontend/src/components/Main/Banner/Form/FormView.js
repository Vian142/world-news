//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import { TextInput, DateInput, SelectInput, FileInput } from '../../../common/inputs';
import styles from './form.css';

//////////////////////////////////////////////////////////////
function getBase64Image(file) {
    if(file) {
        let reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException('Problem parsing input file.'));
            };

            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsText(file);
        }).then(data => data);
    }
    return '';
}

//////////////////////////////////////////////////////////////
class FormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                title: '',
                date: '',
                category: '',
                thumbnail: null
            }
        };
    }
    onChange = (value, field) => {
        this.setState(({ values }) => ({
            values: {
                ...values,
                [field]: value
            }
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.onAdd) {
            const news = this.state.values;
            this.props.onAdd(news);
        }
    }

    render() {
        const { values } = this.state;
        const { categories } = this.props;
        const { title = '', date, category, thumbnail } = values;

        const preview = getBase64Image(thumbnail);
        console.log(preview);

        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <span className={styles.closeButton} />
                    <div className={styles.title}>Добавить новость</div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <div className={styles.inputBlock}>
                            <TextInput placeholder='Название'
                                name='title'
                                value={title}
                                onChange={title => this.onChange(title, 'title')} />
                        </div>
                        <div className={styles.inputBlock}>
                            <DateInput placeholder='Дата'
                                value={date}
                                onChange={date => this.onChange(date, 'date')} />
                        </div>
                        <div className={styles.inputBlock}>
                            <SelectInput
                                selected={category}
                                placeholder='Категория'
                                items={categories}
                                onChange={_id => this.onChange(_id, 'category')} />
                        </div>
                        <div className={styles.inputBlock}>
                            <FileInput
                                file={thumbnail}
                                name='image-news'
                                placeholder='Добавить файл'
                                onChange={file => this.onChange(file, 'thumbnail')} />
                        </div>
                        <div>
                            <img src={preview} width='150px' height='80px' />
                        </div>
                        <div className={styles.submitWrapper}>
                            <button type='submit' className={styles.submitButton}>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////
export default FormView;

//////////////////////////////////////////////////////////////