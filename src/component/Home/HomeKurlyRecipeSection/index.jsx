import React, { useState } from 'react';
import { HomeKurlyRecipeBox } from './styles';

const HomeKurlyRecipeSection = ({ info, items }) => {
    const { title } = info;

    const slideWidth = 356;
    const [index, setIndex] = useState(0);

    let count = 0;



    const onClickPrev = () => {
        const item_box = document.querySelector(".kurlyItemBox");

        if (index > 0 && index <= 3) {
            item_box.style.transform = "translate3d(0px, 0px, 0px)";
            setIndex(0);
        }
        else if (index > 3) {
            item_box.style.transform = "translate3d(-" + (slideWidth * (index - 3)) + "px, 0px, 0px)";
            setIndex(index - 3);
        }
    };

    const onClickNext = () => {
        const item_box = document.querySelector(".kurlyItemBox");

        console.log("item_box", item_box);
        if (items.length - index > 0 && items.length - index <= 6) {
            item_box.style.transform = "translate3d(-" + (slideWidth * (items.length - 3)) + "px, 0px, 0px)";
            setIndex(items.length - 3);
        }
        else if (items.length - index > 0 && items.length - index > 6) {
            item_box.style.transform = "translate3d(-" + (slideWidth * (3 + index)) + "px, 0px, 0px)";
            setIndex(index + 3);
        }
    };


    return (
        <>
            <HomeKurlyRecipeBox>
                <div className="title">
                    {title}
                </div>
                <div className="items_list">
                    <div className="kurlyItemBox">
                        {
                            items.map(item => (
                                <div className="item">
                                    <img alt="" src={item.imgURL} />
                                    <div className="item_title">{item.item_title}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="item_ctrl_btn">
                        {
                            (index > 0) && <div className="item_btn prev" onClick={onClickPrev}>&#60;</div>
                        }
                        {
                            (index + 3 !== items.length) && <div className="item_btn next" onClick={onClickNext}>&#62;</div>
                        }
                    </div>
                </div>
            </HomeKurlyRecipeBox>
        </>
    );
};

export default HomeKurlyRecipeSection;