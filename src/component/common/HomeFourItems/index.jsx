import React from 'react';
import Sticker from '../Sticker/index';
import { HomeFourItemsBox } from './styles';


// subTitle에 대한 css 수정 필요
const HomeFourItems = ({ title, items, subTitle }) => {
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
                <div className="item">
                    <img alt="" src={items[0].imgURL} />
                    {items[0].sticker && <Sticker />}
                    <div className="item_title">{items[0].item_title}</div>
                    <div className="discount">
                        {items[0].rate && <span className="rate">{items[0].rate}</span>}
                        <span className="after_price">{items[0].after_price}</span>
                    </div>
                    <div className="before_price">{items[0].before_price}</div>
                </div>
                <div className="item">
                    <img alt="" src={items[1].imgURL} />
                    {items[1].sticker && <Sticker />}
                    <div className="item_title">{items[1].item_title}</div>
                    <div className="discount">
                        {items[1].rate && <span className="rate">{items[1].rate}</span>}
                        <span className="after_price">{items[1].after_price}</span>
                    </div>
                    <div className="before_price">{items[1].before_price}</div>
                </div>
                <div className="item">
                    <img alt="" src={items[2].imgURL} />
                    {items[2].sticker && <Sticker />}
                    <div className="item_title">{items[2].item_title}</div>
                    <div className="discount">
                        {items[2].rate && <span className="rate">{items[2].rate}</span>}
                        <span className="after_price">{items[2].after_price}</span>
                    </div>
                    <div className="before_price">{items[2].before_price}</div>
                </div>
                <div className="item">
                    <img alt="" src={items[3].imgURL} />
                    {items[3].sticker && <Sticker />}
                    <div className="item_title">{items[3].item_title}</div>
                    <div className="discount">
                        {items[3].rate && <span className="rate">{items[3].rate}</span>}
                        <span className="after_price">{items[3].after_price}</span>
                    </div>
                    <div className="before_price">{items[3].before_price}</div>
                </div>
            </div>
        </HomeFourItemsBox>
    );
};

export default HomeFourItems;