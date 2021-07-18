import React, { useState } from 'react';
import Sticker from '../Sticker/index';
import { HomeFourItemsBox } from './styles';

const HomeFourItems = ({ items, info, count }) => {
    const { title, subTitle } = { ...info };

    const slideWidth = 267;

    const [index, setIndex] = useState(0);

    const onClickPrev = () => {
        const item_box = document.querySelectorAll(".itemBox");
        const itemBox = Array.from(item_box);

        if (index > 0 && index <= 4) {
            itemBox[count].style.transform = "translate3d(0px, 0px, 0px)";
            setIndex(0);
        }
        else if (index > 4) {
            itemBox[count].style.transform = "translate3d(-" + (slideWidth * (index - 4)) + "px, 0px, 0px)";
            setIndex(index - 4);
        }
    };

    const onClickNext = () => {
        const item_box = document.querySelectorAll(".itemBox");
        const itemBox = Array.from(item_box);

        if (items.length - index > 0 && items.length - index <= 8) {
            itemBox[count].style.transform = "translate3d(-" + (slideWidth * (items.length - 4)) + "px, 0px, 0px)";
            setIndex(items.length - 4);
        }
        else if (items.length - index > 0 && items.length - index > 8) {
            itemBox[count].style.transform = "translate3d(-" + (slideWidth * (4 + index)) + "px, 0px, 0px)";
            setIndex(index + 4);
        }
    };

    return (
        <HomeFourItemsBox>
            {
                title &&
                (
                    <div className="title">
                        {title}
                    </div>
                )
            }
            {
                subTitle &&
                (
                    <div className="sub">{subTitle}</div>
                )
            }

            <div className="items_list">
                <div className="itemBox">
                    {
                        items.map(item => (
                            <div className="item">
                                <img alt="" src={item.imgURL} />
                                {item.sticker && <Sticker />}
                                <div className="item_title">{item.item_title}</div>
                                <div className="discount">
                                    {item.rate && <span className="rate">{item.rate}</span>}
                                    <span className="after_price">{item.after_price}</span>
                                </div>
                                <div className="before_price">{item.before_price}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="item_ctrl_btn">
                    {
                        (index > 0) && <div className="item_btn prev" onClick={onClickPrev}>&#60;</div>
                    }
                    {
                        (index + 4 !== items.length) && <div className="item_btn next" onClick={onClickNext}>&#62;</div>
                    }

                </div>

            </div>

        </HomeFourItemsBox >
    );
};

export default HomeFourItems;