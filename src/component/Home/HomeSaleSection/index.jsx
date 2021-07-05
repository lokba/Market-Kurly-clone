import React from 'react';
import { HomeSaleBox } from './styles';

const HomeSaleSection = ({ title, items }) => {
    return (
        <>
            <HomeSaleBox>
                <div className="title">
                    {title}
                </div>
                <div className="items_list">
                    <div className="item">
                        <img alt="" src={items[0].imgURL} />
                        <div className="item_title">{items[0].item_title}</div>
                        <div className="sub">
                            {items[0].sub_title}
                        </div>
                    </div>
                    <div className="item">
                        <img alt="" src={items[1].imgURL} />
                        <div className="item_title">{items[1].item_title}</div>
                        <div className="sub">
                            {items[1].sub_title}
                        </div>
                    </div>
                    <div className="item">
                        <img alt="" src={items[2].imgURL} />
                        <div className="item_title">{items[2].item_title}</div>
                        <div className="sub">
                            {items[2].sub_title}
                        </div>
                    </div>
                </div>
            </HomeSaleBox>
        </>
    );
};

export default HomeSaleSection;