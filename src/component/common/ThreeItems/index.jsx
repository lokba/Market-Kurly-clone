import React from 'react';

const ThreeItems = ({ title }) => {
    return (
        <>
            <section section className="goods type1" >
                <div className="title">
                    {title}
                </div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/how_about_this/bread.jpeg" />
                        <div className="item_title">MY FIRST 처음 만나는 진짜 식빵</div>
                        <div className="discount">
                            <span className="rate">5%</span>
                            <span className="after_price">4,655원</span>
                        </div>
                        <div className="before_price">4,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/how_about_this/cheese.jpeg" />
                        <div className="item_title">[그랑도르즈] 까망베르 2종</div>
                        <div className="discount">
                            <span className="rate">20%</span>
                            <span className="after_price">13,520원</span>
                        </div>
                        <div className="before_price">16,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/how_about_this/choco.jpeg" />
                        <div className="item_title">[돈마루] 한돈 앞다리살 2종 (냉장) </div>
                        <div className="discount">
                            <span className="after_price">5,300원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/how_about_this/meat.jpeg" />
                        <div className="item_title">[라메종드아모린] 살레위드 솔티드 버터 캐러멜 2종</div>
                        <div className="discount">
                            <span className="after_price">7,900원</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThreeItems;