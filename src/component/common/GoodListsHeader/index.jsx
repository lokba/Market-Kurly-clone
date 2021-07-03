import React from 'react';
import { GoodListsHeaderBox } from './styles';

const GoodListsHeader = ({ title }) => {
    return (
        <>
            <GoodListsHeaderBox>
                <div className="tit">{title}</div>
                <div className="inner_info">
                    <div className="inner_txt">
                        <span>전체보기</span>
                    </div>
                    <div className="ctrl">
                        <div className="ctrl_tit">추천순</div>
                        <div className="ctrl_img">
                            <img alt="" src="/images/icons/ico_new_down.png" />
                        </div>
                        <div className="ctrl_off ctrl_img">
                            <img alt="" src="/images/icons/ico_new_up.png" />
                        </div>
                        <div className="category_box">
                            <ul className="ctrl_category">
                                <li>추천순</li>
                                <li>신상품순</li>
                                <li>인기상품순</li>
                                <li>혜택순</li>
                                <li>낮은 가격순</li>
                                <li>높은 가격순</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </GoodListsHeaderBox>
        </>
    );
};

export default GoodListsHeader;