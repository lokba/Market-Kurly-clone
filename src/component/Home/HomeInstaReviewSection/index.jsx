import React, { useState } from 'react';
import { HomeInstaReviewBox } from './styles';

const HomeInstaReviewSection = ({ info, items }) => {
    const { title } = info;

    const slideWidth = 175;
    const [index, setIndex] = useState(0);

    const onClickPrev = () => {
        const item_box = document.querySelector(".instaItemBox");

        if (index > 0 && index <= 6) {
            item_box.style.transform = "translate3d(0px, 0px, 0px)";
            setIndex(0);
        }
        else if (index > 6) {
            item_box.style.transform = "translate3d(-" + (slideWidth * (index - 6)) + "px, 0px, 0px)";
            setIndex(index - 6);
        }
    };

    const onClickNext = () => {
        const item_box = document.querySelector(".instaItemBox");

        if (items.length - index > 0 && items.length - index <= 12) {
            item_box.style.transform = "translate3d(-" + (slideWidth * (items.length - 6)) + "px, 0px, 0px)";
            setIndex(items.length - 6);
        }
        else if (items.length - index > 0 && items.length - index > 12) {
            item_box.style.transform = "translate3d(-" + (slideWidth * (6 + index)) + "px, 0px, 0px)";
            setIndex(index + 6);
        }
    };
    return (
        <>
            <HomeInstaReviewBox>
                <div className="title">
                    {title}
                </div>
                <div className="items_list">
                    <div className="instaItemBox">
                        {
                            items.map(item => (
                                <div className="item">
                                    <img alt="" src={item.imgURL} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="item_ctrl_btn">
                        {
                            (index > 0) && <div className="item_btn prev" onClick={onClickPrev}>&#60;</div>
                        }
                        {
                            (index + 6 !== items.length) && <div className="item_btn next" onClick={onClickNext}>&#62;</div>
                        }
                    </div>

                </div>
                <div className="subinfo">
                    <div className="question">더 많은 고객 후기가 궁금하다면?</div>
                    <div className="comment">@marketkurly_regram</div>
                </div>
            </HomeInstaReviewBox>
        </>
    );
};

export default HomeInstaReviewSection;