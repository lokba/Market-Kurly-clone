import React from 'react';
import { withRouter } from 'react-router';
import Find from '../component/Find/index';

const FindContainer = ({ match }) => {
    const { find: find_param } = match.params;

    return (
        <Find param={find_param} />
    );
};

export default withRouter(FindContainer);