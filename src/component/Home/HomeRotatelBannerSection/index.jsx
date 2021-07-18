import React from 'react';
import { HomeRotateBannerBox } from './styles';

const HomeRotateBannerSection = ({ rotateImgs }) => {
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

    let interval = setInterval(() => {
        onMoveNext();
    }, 3000);

    const imgBoxMouseOver = () => {
        clearInterval(interval);
    };

    const imgBoxMouseOut = () => {
        interval = setInterval(() => {
            onMoveNext()
        }, 3000);
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
                <div className="ctrl_btn">
                    <div className="btn prev" onClick={onMovePrev}>	&#60;</div>
                    <div className="btn next" onClick={onMoveNext}>	&#62;</div>
                </div>
            </div>
        </HomeRotateBannerBox >
    );
};

export default HomeRotateBannerSection;
