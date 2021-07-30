import React from 'react';
import { withRouter } from 'react-router';
import { HomeRotateBannerBox } from './styles';

const HomeRotateBannerSection = ({ match, rotateImgs }) => {
    let index = 0;

    const onMovePrev = () => {
        let imgItems = document.querySelectorAll(".imgItem");
        let items = Array.from(imgItems);

        resetImgItem();

        if (index === 0) {
            index = items.length - 1;
        }
        else {
            index--;
        }
        items[index].classList.remove("imgDelete");
    }


    const onMoveNext = () => {
        let imgItems = document.querySelectorAll(".imgItem");
        let items = Array.from(imgItems);

        resetImgItem();

        if (index === items.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        items[index].classList.remove("imgDelete");
    }

    const resetImgItem = () => {
        let imgItems = document.querySelectorAll(".imgItem");
        let items = Array.from(imgItems);

        for (let item of items) {
            item.classList.add("imgDelete");
        }
    }


    // // 수정 보완 필요
    // let interval = setInterval(() => {
    //     onMoveNext();
    // }, 4000);

    const imgBoxMouseOver = () => {
        // clearInterval(interval);

        const ctrl_btn = document.querySelectorAll(".bnr_btn");
        const ctrlBtn = Array.from(ctrl_btn);

        for (let btn of ctrlBtn) {
            btn.style.opacity = "0.6";
        }
    };

    const imgBoxMouseOut = () => {
        // interval = setInterval(() => {
        //     onMoveNext()
        // }, 4000);

        const ctrl_btn = document.querySelectorAll(".bnr_btn");
        const ctrlBtn = Array.from(ctrl_btn);

        for (let btn of ctrlBtn) {
            btn.style.opacity = "0.2";
        }
    };

    return (
        <HomeRotateBannerBox>
            <div className="imgBox" onMouseOver={imgBoxMouseOver} onMouseOut={imgBoxMouseOut}>
                {
                    rotateImgs.map((item, index) => (
                        <div key={index} className={index === 0 ? "imgItem" : "imgItem imgDelete"}>
                            <img alt="" src={item.imgURL} />
                        </div>
                    ))
                }
                <div className="bnr_ctrl">
                    <div className="bnr_btn prev" onClick={onMovePrev}>	&#60;</div>
                    <div className="bnr_btn next" onClick={onMoveNext}>	&#62;</div>
                </div>
            </div>
        </HomeRotateBannerBox >
    );
};

export default withRouter(HomeRotateBannerSection);

