import React from 'react';


// subTitle에 대한 css 수정 필요
const ThreeItems = ({ title, items, subTitle }) => {
    return (
        <>
            <div className="title">
                {title}
            </div>
            <div className="t7_sub">{subTitle}</div>

            <div className="items_list">
                <div className="item">
                    <img alt="" src={items[0].imgURL} />
                    {items[0].sticker && <div className="sticker">기획특가</div>}
                    <div className="item_title">{items[0].item_title}</div>
                    <div className="discount">
                        <span className="rate">{items[0].rate}</span>
                        <span className="after_price">{items[0].after_price}</span>
                    </div>
                    <div className="before_price">{items[0].before_price}</div>
                </div>
                <div className="item">
                    <img alt="" src={items[1].imgURL} />
                    {items[1].sticker && <div className="sticker">기획특가</div>}
                    <div className="item_title">{items[1].item_title}</div>
                    <div className="discount">
                        <span className="rate">{items[1].rate}</span>
                        <span className="after_price">{items[1].after_price}</span>
                    </div>
                    <div className="before_price">{items[1].before_price}</div>
                </div>
                <div className="item">
                    <img alt="" src={items[2].imgURL} />
                    {items[2].sticker && <div className="sticker">기획특가</div>}
                    <div className="item_title">{items[2].item_title}</div>
                    <div className="discount">
                        <span className="rate">{items[2].rate}</span>
                        <span className="after_price">{items[2].after_price}</span>
                    </div>
                    <div className="before_price">{items[2].before_price}</div>
                </div>
                <div className="item">
                    <img alt="" src={items[3].imgURL} />
                    {items[3].sticker && <div className="sticker">기획특가</div>}
                    <div className="item_title">{items[3].item_title}</div>
                    <div className="discount">
                        <span className="rate">{items[3].rate}</span>
                        <span className="after_price">{items[3].after_price}</span>
                    </div>
                    <div className="before_price">{items[3].before_price}</div>
                </div>
            </div>
        </>
    );
};

export default ThreeItems;