import React from 'react';
import { useState } from 'react';
import Login from '../component/Login/index';

const LoginContainer = () => {
    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    }

    return (
        <Login
            onChange={onChange}
            loginInfo={loginInfo}
        />
    );
};

export default LoginContainer;