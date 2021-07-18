import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Header from '../component/common/Header/index';
import { gnu_menu_lists } from '../dummy/index';

const HeaderContainer = ({ match, history }) => {
    const [onIcon, setOnIcon] = useState({
        onLocate: false,
        onCart: false,
        onAll: false,
    });

    const onLocateOver = () => {
        setOnIcon({
            onLocate: true
        });
        const location_subinfo = document.querySelector(".location_subinfo");
        location_subinfo.style.display = "block";
    }

    const onLocateOut = () => {
        setOnIcon({
            onLocate: false
        });
        const location_subinfo = document.querySelector(".location_subinfo");
        location_subinfo.style.display = "none";
    }

    const onCartOver = () => {
        setOnIcon({
            onCart: true
        });
    };

    const onCartOut = () => {
        setOnIcon({
            onCart: false
        });

    };

    const onAllOver = () => {
        setOnIcon({
            onAll: true
        });

        let gnb_menu = document.querySelector(".gnb_menu");
        let category_tit = document.querySelector(".category_tit");

        gnb_menu.style.display = "block";
        category_tit.style.color = "#5f0080";
        category_tit.style.fontWeight = "700";
    };

    const onAllOut = () => {
        setOnIcon({
            onAll: false
        });
        let gnb_menu = document.querySelector(".gnb_menu");
        let category_tit = document.querySelector(".category_tit");

        gnb_menu.style.display = "none";
        category_tit.style.color = "black";
        category_tit.style.fontWeight = "400";

    };

    const onMenuInfoOver = () => {
        let subinfo = document.querySelector(".subinfo");
        subinfo.style.display = "block";
    }

    const onMenuInfoOut = () => {
        let subinfo = document.querySelector(".subinfo");
        subinfo.style.display = "none";
    }

    const onCategoryInfoOver = () => {
        let gnb_menu = document.querySelector(".gnb_menu");
        gnb_menu.style.width = "440px";

    }
    const onCategoryInfoOut = () => {
        let gnb_menu = document.querySelector(".gnb_menu");
        gnb_menu.style.width = "219px";
    }

    let url = match.path;
    let urlProp;

    if (url.includes("best")) {
        urlProp = "best";
    }
    else if (url.includes("new")) {
        urlProp = "new";
    }
    else if (url.includes("sale")) {
        urlProp = "sale";
    }
    else if (url.includes("event")) {
        urlProp = "event";
    }

    const [inputValue, setInputValue] = useState(null);

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            history.push('/shop/goods/goods_search');
            window.location.reload();
        }
        console.log(inputValue);
    }


    return (
        <Header
            lists={gnu_menu_lists}
            urlProp={urlProp}
            onLocateOver={onLocateOver}
            onLocateOut={onLocateOut}
            onCartOver={onCartOver}
            onCartOut={onCartOut}
            onAllOver={onAllOver}
            onAllOut={onAllOut}
            onMenuInfoOver={onMenuInfoOver}
            onMenuInfoOut={onMenuInfoOut}
            onCategoryInfoOver={onCategoryInfoOver}
            onCategoryInfoOut={onCategoryInfoOut}
            onIcon={onIcon}
            onKeyPress={onKeyPress}
            setInputValue={setInputValue}
            inputValue={inputValue}
        />
    );
};

export default withRouter(HeaderContainer);