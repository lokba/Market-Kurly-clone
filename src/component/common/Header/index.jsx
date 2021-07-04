import React from 'react';
import { HeaderBox, NavBox } from './styles';

const Header = ({ lists }) => {

    return (
        <>
            <HeaderBox>
                <div id="userMenu">
                    <a href="/">
                        <img alt="" src="/images/icons/delivery.png" />
                    </a>
                    <div id="menu_lists">
                        <div id="register">
                            <a href="/shop/member/join">
                                <li className="register_link">회원가입</li>
                            </a>
                        </div>
                        <div id="login">
                            <a href="/shop/member/login">
                                <li>로그인</li>
                            </a>
                        </div>
                        <div id="info">
                            <li>고객센터</li>
                            <img alt="" src="/images/icons/ico_down.png" />
                            <ul className="subinfo">
                                <li>공지사항</li>
                                <li>자주하는 질문</li>
                                <li>1:1 문의</li>
                                <li>상품 제안</li>
                                <li>에코포장 피드백</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="logoArea">
                    <a href="/" id="logo">
                        <img alt="" src="/images/icons/logo_x2.png" />
                    </a>
                </div>
            </HeaderBox>
            <NavBox>
                <div id="category">
                    <div className="category_info">
                        <img alt="" id="categoryAll_img" src="/images/icons/ico_all.png" />
                        <li className="category_tit">전체 카테고리</li>
                    </div>
                    <div className="gnb_menu">
                        <ul>
                            {
                                lists.map(
                                    list => (
                                        <li className="gnb_menu_list">
                                            <div className="inner_menu">
                                                <img alt="" className="i_menu_img" src={list.imgURL} />
                                                <div className="i_menu_txt">{list.menu_txt}</div>
                                            </div>
                                            <ul className="sub_menu">
                                                {
                                                    list.sub_menu.map(menu =>
                                                    (
                                                        <li>{menu}</li>
                                                    )
                                                    )
                                                }
                                            </ul>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
                <a href="/shop/goods/goods_list/new">
                    <li id="new" className="menu">신상품</li>
                </a>
                <a href="/shop/goods/goods_list/best">
                    <li id="best" className="menu">베스트</li>
                </a>
                <a href="/shop/goods/goods_list/sale">
                    <li id="cheap" className="menu">알뜰쇼핑</li>
                </a>
                <a href="/shop/goods/event">
                    <li id="special" className="menu">특가/혜택</li>
                </a>
                <div id="search">
                    <input />
                    <img alt="" src="/images/icons/ico_search.png" />
                </div>
                <div id="location">
                    <img alt="" id="location_img" src="/images/icons/ico_location.svg" />
                    <div className="location_subinfo">
                        <div><span>배송지를 등록</span>하고</div>
                        <div>구매 가능한 상품을 확인하세요!</div>
                        <div className="location_btn_box">
                            <a href="login.html">
                                <div className="location_loginBtn locationBtn">로그인</div>
                            </a>
                            <div className="location_addressBtn locationBtn">
                                <img alt="" src="/images/icons/ico_search_white.png" />
                                <div>주소검색</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/shop/goods/goods_cart" id="cart">
                    <img alt="" id="cart_img" src="/images/icons/ico_cart.svg" />
                </a>
            </NavBox>
        </>
    );
};

export default Header;