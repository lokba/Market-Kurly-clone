import HomeFourItems from '../../common/HomeFourItems/index';
import React from 'react';
import { HomeMdBox } from './styles';

const HomeMdSection = ({ items, lists, title }) => {
    return (
        <HomeMdBox>
            <div className="title">
                {title}
            </div>
            <div className="category">
                <ul className="list_category">
                    {
                        lists.map(list =>
                            <li>
                                {/* className="t4_menu_on" 일때 색깔 변경 */}
                                <a href="/" className="menu" >{list}</a>
                            </li>
                        )
                    }
                </ul>
            </div>

            <HomeFourItems title="" items={items} />
            <div className="btn">
                <button>과일 · 견과 · 쌀 전체보기 &gt;</button>
            </div>
        </HomeMdBox>
    );
};

export default HomeMdSection;