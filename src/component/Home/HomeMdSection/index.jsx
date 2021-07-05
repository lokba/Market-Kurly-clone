import HomeFourItems from '../../common/HomeFourItems/index';
import React, { useState } from 'react';
import { HomeMdBox } from './styles';

const HomeMdSection = ({ items, lists, title }) => {
    const [click, setClick] = useState(0);

    return (
        <HomeMdBox>
            <div className="title">
                {title}
            </div>
            <div className="category">
                <ul className="list_category">
                    {
                        lists.map((list, index) =>
                            <li key={index}>
                                <a className={click === index ? "menu menu_on" : "menu"} onClick={(e) => { e.target.classList.add("menu_on"); setClick(index); }} >{list}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
            <HomeFourItems title="" items={items} />
            <div className="btn">
                <button>{lists[click]} 전체보기 &gt;</button>
            </div>
        </HomeMdBox>
    );
};

export default HomeMdSection;