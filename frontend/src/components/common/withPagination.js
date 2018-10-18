//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import Pagination from './Pagination/Pagination';
import hoistNonReactStatics from 'hoist-non-react-statics';

//////////////////////////////////////////////////////////////
const withPagination = (Component, options) => {
    const { field, pageLimit = 3 } = options;
    class paginationView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                allObjects: [],
                objects: [],
                totalObjects: null,
                currentPage: null,
                pages: null
            };
        }

        componentDidMount() {
            const allObjects = _.get(this.props, field);
            const totalObjects = allObjects.length || 0;
            const pages = Math.floor(totalObjects / pageLimit);
            this.setState({
                allObjects,
                totalObjects,
                pages
            });
        }

        onPageChanged = data => {
            const { allObjects } = this.state;
            const { currentPage } = data;

            const offset = (currentPage - 1) * pageLimit;
            const objects = allObjects.slice(offset, offset + pageLimit);

            this.setState({ currentPage, objects });
        }

        render() {
            const {
                objects,
                currentPage,
                pages,
                totalObjects
            } = this.state;

            if(totalObjects === 0) return <div />;

            return (
                <div className='paginationView'>
                    <div>currentPage: {currentPage}</div>
                    <div>totalPages: {pages}</div>
                    <div>totalObjects: {totalObjects}</div>
                    <Component {...this.props}
                        objects={objects}
                        currentPage={currentPage}
                        totalPages={pages} />


                    <div>
                        <Pagination
                            pages={pages}
                            limit={pageLimit}
                            onPageChanged={this.onPageChanged} />
                    </div>
                </div>
            );
        }
    }

    return hoistNonReactStatics(paginationView, Component);
};

//////////////////////////////////////////////////////////////
export default withPagination;

//////////////////////////////////////////////////////////////