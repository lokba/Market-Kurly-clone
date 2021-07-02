import React from 'react';
import ThreeItems from '../common/ThreeItems/index';

const HomeMdSection = ({ items, lists, title }) => {
    return (
        <>
            <section className="type4">
                <div className="title">
                    {title}
                </div>
                <div className="t4_category">
                    <ul className="list_category">
                        {
                            lists.map(list =>
                                <li>
                                    {/* className="t4_menu_on" 일때 색깔 변경 */}
                                    <a href="/" className="t4_menu" >{list}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <ThreeItems title="" items={items} />
                <div className="btn">
                    <button>과일 · 견과 · 쌀 전체보기 &gt;</button>
                </div>
            </section>
        </>
    );
};

export default HomeMdSection;