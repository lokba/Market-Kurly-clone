import React from 'react';
import { HomeInstaReviewBox } from './styles';

const HomeInstaReviewSection = ({ title, items }) => {
    return (
        <>
            <HomeInstaReviewBox>
                <div className="title">
                    {title}
                </div>
                <div className="t10_items_list">
                    <div className="t10_item">
                        <img alt="" src={items[0].imgURL} />
                    </div>
                    <div className="t10_item">
                        <img alt="" src={items[1].imgURL} />
                    </div>
                    <div className="t10_item">
                        <img alt="" src={items[2].imgURL} />
                    </div>
                    <div className="t10_item">
                        <img alt="" src={items[3].imgURL} />
                    </div>
                    <div className="t10_item">
                        <img alt="" src={items[4].imgURL} />
                    </div>
                    <div className="t10_item">
                        <img alt="" src={items[5].imgURL} />
                    </div>
                </div>
                <div className="t10_subinfo">
                    <div className="question">더 많은 고객 후기가 궁금하다면?</div>
                    <div className="comment">@marketkurly_regram</div>
                </div>
            </HomeInstaReviewBox>
        </>
    );
};

export default HomeInstaReviewSection;