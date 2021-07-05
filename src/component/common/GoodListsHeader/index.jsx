import React, { useEffect, useState } from 'react';
import { GoodListsHeaderBox } from './styles';

const GoodListsHeader = ({ title }) => {
    const categoryItems = ["추천순", "신상품순", "인기상품순", "혜택순", "낮은 가격순", "높은 가격순"];
    const [viewCtrl, setViewCtrl] = useState(false);
    const [ctrlTit, setCtrlTit] = useState("추천순");

    const onClickCategory = (e) => {
        setCtrlTit(e.target.innerHTML);
    }

    const onClickCtrl = (e) => {
        setViewCtrl(!viewCtrl);
    }

    return (
        <>
            <GoodListsHeaderBox>
                <div className="tit">{title}</div>
                <div className="inner_info">
                    <div className="inner_txt">
                        <span>전체보기</span>
                    </div>
                    <div className="ctrl" onClick={onClickCtrl}>
                        <div className={viewCtrl ? "ctrl_tit ctrl_tit_on" : "ctrl_tit"}>{ctrlTit}</div>
                        <div className="ctrl_img">
                            {
                                viewCtrl ?
                                    (
                                        <img alt="" src="/images/icons/ico_new_up.png" />
                                    )
                                    :
                                    (
                                        <img alt="" src="/images/icons/ico_new_down.png" />
                                    )
                            }
                        </div>
                        <div className={viewCtrl ? "onView category_box" : "offView category_box"}>
                            <ul className="ctrl_category">
                                {
                                    categoryItems.map((item, index) =>
                                        <li key={index} onClick={onClickCategory} > {item}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </GoodListsHeaderBox>
        </>
    );
};

export default GoodListsHeader;