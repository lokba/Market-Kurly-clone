import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import Find from '../component/Find/index';

const FindContainer = ({ match }) => {
    const { find: find_param } = match.params;

    const [findInfo, setFindInfo] = useState({
        username: "",
        email: "",
        userId: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFindInfo({
            ...findInfo,
            [name]: value,
        })
    }

    console.log("findInfo", findInfo);

    return (
        <Find
            param={find_param}
            onChange={onChange}
            findInfo={findInfo}
        />
    );
};

export default withRouter(FindContainer);