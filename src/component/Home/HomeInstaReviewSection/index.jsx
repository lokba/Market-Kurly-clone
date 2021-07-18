import React from 'react';
import { HomeInstaReviewBox } from './styles';

const HomeInstaReviewSection = ({ info, items }) => {
    const { title } = info;

    return (
        <>
            <HomeInstaReviewBox>
                <div className="title">
                    {title}
                </div>
                <div className="items_list">
                    <div className="item">
                        <img alt="" src={items[0].imgURL} />
                    </div>
                    <div className="item">
                        <img alt="" src={items[1].imgURL} />
                    </div>
                    <div className="item">
                        <img alt="" src={items[2].imgURL} />
                    </div>
                    <div className="item">
                        <img alt="" src={items[3].imgURL} />
                    </div>
                    <div className="item">
                        <img alt="" src={items[4].imgURL} />
                    </div>
                    <div className="item">
                        <img alt="" src={items[5].imgURL} />
                    </div>
                </div>
                <div className="subinfo">
                    <div className="question">더 많은 고객 후기가 궁금하다면?</div>
                    <div className="comment">@marketkurly_regram</div>
                </div>
            </HomeInstaReviewBox>
        </>
    );
};

export default HomeInstaReviewSection;