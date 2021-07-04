import React from 'react';
import { HomeKurlyRecipeBox } from './styles';

const HomeKurlyRecipeSection = ({ title, items }) => {
    return (
        <>
            <HomeKurlyRecipeBox>
                <div className="title">
                    {title}
                </div>
                <div className="items_list">
                    <div className="item">
                        <img alt="" src={items[0].imgURL} />
                        <div className="item_title">{items[0].item_title}</div>
                    </div>
                    <div className="item">
                        <img alt="" src={items[1].imgURL} />
                        <div className="item_title">{items[1].item_title}</div>
                    </div>
                    <div className="item">
                        <img alt="" src={items[2].imgURL} />
                        <div className="item_title">{items[2].item_title}</div>
                    </div>
                </div>
            </HomeKurlyRecipeBox>
        </>
    );
};

export default HomeKurlyRecipeSection;