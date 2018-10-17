//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import hoistNonReactStatics from 'hoist-non-react-statics';

//////////////////////////////////////////////////////////////
const withPagination = (Component, options) => {
    const { field, pageLimit } = options;
    class paginationView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                allObjects: [],
                objects: [],
                currentObjects: [],
                currentPage: null,
                totalPages: null
            };
        }

        componentDidMount() {
            const allObjects = _.get(this.props, field);
            this.setState({
                allObjects
            });
        }

        onPageChanged = data => {
            const { allObjects } = this.state;
            const { currentPage, totalPages } = data;

            const offset = (currentPage - 1) * pageLimit;
            const objects = allObjects.slice(offset, offset + pageLimit);

            this.setState({ currentPage, objects, totalPages });
        }

        render() {
            const {
                objects,
                currentPage,
                totalPages
            } = this.state;
            return (
                <div className='paginationView'>
                    <Component {...this.props}
                        objects={objects}
                        currentPage={currentPage}
                        totalPages={totalPages}/>
                </div>
            );
        }
    }

    return hoistNonReactStatics(paginationView, Component);
};

//////////////////////////////////////////////////////////////
export default withPagination;

//////////////////////////////////////////////////////////////