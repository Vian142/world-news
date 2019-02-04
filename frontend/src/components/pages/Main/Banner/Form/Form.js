//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////

import React from 'react';
import _ from 'lodash';
import { TextInput, DateInput, SelectInput, FileInput } from '../../../../common/inputs';
import styles from './form.css';

//////////////////////////////////////////////////////////////
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: '',
            values: {
                title: '',
                date: '',
                category: '',
                thumbnail: null
            },
            errors: []
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

    addThumbnail = file => {
        if(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const dataUri = event.target.result;
                this.setState(({ values }) => ({
                    preview: dataUri,
                    values: {
                        ...values,
                        thumbnail: {
                            name: file.name,
                            data: dataUri
                        },
                    }
                }));
            };
        }
    }

    clearForm = (callback) => {
        this.setState(
            {
                preview: '',
                values: {
                    title: '',
                    date: '',
                    category: '',
                    thumbnail: null
                },
                errors: []
            },
            () => { if(callback) callback(); }
        );
    }

    clearThumbnail = () => {
        this.setState(({ values }) => {
            return {
                preview: null,
                values: {
                    ...values,
                    thumbnail: null
                }
            };
        });
    }

    validation = () => {
        const { values } = this.state;
        let errors = {};

        for(let key in values) {
            if(key !== 'thumbnail') {
                if(_.isEmpty(_.trim(values[key]))) {
                    errors[key] = 'Поле пустое';
                }
            } else if(_.isEmpty(values.thumbnail)) {
                errors.thumbnail = 'Файл не загружен';
            }
        }
        return errors;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validation();

        if(!_.isEmpty(errors)) {
            this.setState({ errors });
        } else if(this.props.onAdd) {
            const news = this.state.values;
            this.props.onAdd(news);
            this.clearForm(
                this.props.onClose
            );
        }
    }

    onClose = () => {
        if(this.props.onClose) this.props.onClose();
    }

    render() {
        const { values, errors } = this.state;
        const { categories } = this.props;
        const { title = '', date, category, thumbnail } = values;
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <span className={styles.closeButton} onClick={this.onClose} />
                    <div className={styles.title}>Добавить новость</div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <div className={styles.inputBlock}>
                            <TextInput placeholder='Название'
                                name='title'
                                value={title}
                                onChange={title => this.onChange(title, 'title')}
                                error={_.get(errors, 'title')} />
                        </div>
                        <div className={styles.inputBlock}>
                            <DateInput placeholder='Дата'
                                value={date}
                                onChange={date => this.onChange(date, 'date')}
                                error={_.get(errors, 'date')} />
                        </div>
                        <div className={styles.inputBlock}>
                            <SelectInput
                                selected={category}
                                placeholder='Категория'
                                items={categories}
                                onChange={_id => this.onChange(_id, 'category')}
                                error={_.get(errors, 'category')} />
                        </div>
                        <div className={styles.inputBlock}>
                            <FileInput
                                file={thumbnail}
                                name='image-news'
                                placeholder='Добавить файл'
                                onChange={file => this.addThumbnail(file)}
                                error={_.get(errors, 'thumbnail')}
                                clear={this.clearThumbnail} />
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
export default Form;

//////////////////////////////////////////////////////////////