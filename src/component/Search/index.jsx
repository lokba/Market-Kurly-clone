import React from 'react';
import HeaderContainer from '../../container/HeaderContainer';
import Footer from '../common/Footer/index';
import SideMenu from '../common/SideMenu/index';
import { SearchBox, SearchHeader } from './styles';

const Search = () => {
    return (
        <SearchBox>
            <HeaderContainer />
            <SideMenu sub />
            {/* ----------------------------------------------------------- */}
            <SearchHeader>
                <div className="search_tit">상품검색</div>
                <div className="search_bar">
                    <div className="search_bar_txt">검색 조건</div>
                    <input />
                    <div className="searchBtn">검색하기</div>
                </div>
                <div className="goodsList">
                    <div className="search_result">
                        <strong>총 0개</strong>의 상품이 검색되었습니다.
                    </div>
                    <div className="list_goods">
                        <div className="inner_listgoods">
                            <ul className="lists">
                                <li>검색된 상품이 없습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SearchHeader>
            {/* -----------------------------------------------------------*/}
            <Footer />
        </SearchBox>
    );
};

export default Search;