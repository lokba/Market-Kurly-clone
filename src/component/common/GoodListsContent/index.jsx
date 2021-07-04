import React from 'react';
import Sticker from '../Sticker/index';
import { GoodListsContentBox } from './styles';

const GoodListsContent = ({ items }) => {
    return (
        <>
            <GoodListsContentBox>
                {
                    items.map(item =>
                    (
                        <div className="item">
                            <img alt="" className="good" src={item.imgURL} />
                            {item.sticker && <Sticker />}
                            <div className="cart_box">
                                <div className="cart" />
                            </div>
                            <div className="item_title">{item.item_title}</div>
                            <div className="discount">
                                {
                                    item.rate && <span className="rate">{item.rate}</span>
                                }
                                <span className="after_price">{item.after_price}</span>
                            </div>
                            {
                                item.before_price && <div className="before_price">{item.before_price}</div>
                            }
                            <div className="item_txt">{item.item_txt}</div>
                        </div>

                    )
                    )
                }
            </GoodListsContentBox>
        </>
    );
};

export default GoodListsContent;