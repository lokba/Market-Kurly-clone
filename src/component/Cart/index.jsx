import React from 'react';
import Footer from '../common/Footer/index';
import Header from '../common/Header/index';
import './cart.css';
import { CartBox } from './styles';

const Cart = () => {
    return (
        <CartBox>
            <Header />
            <section className="cartBox">
                <div className="cartBox_tit">장바구니</div>
                <div className="cartContentBox">
                    <div className="cartItemContent">
                        <div className="select_ctrl">
                            <img alt="" src="/images/icons/circle_unchecked.svg" />
                            <div className="ctrl_txt">전체선택(0/0)</div>
                            <div className="bar" />
                            <div className="ctrl_txt">선택삭제</div>
                        </div>
                        <div className="show_cart_list applyBorder">
                            장바구니에 담긴 상품이 없습니다.
                        </div>
                        <div className="select_ctrl">
                            <img alt="" src="/images/icons/circle_unchecked.svg" />
                            <div>전체선택(0/0)</div>
                            <div className="bar" />
                            <div>선택삭제</div>
                        </div>
                        <div className="show_cart_list">
                        </div>
                    </div>
                    <div className="cartInfoContent">
                        <div className="cartInfoBox">
                            <div className="cartInfo_tit">
                                <img alt="" src="/images/icons/ico_location.svg" />
                                <div>배송지</div>
                            </div>
                            <div className="cartInfo_sub">
                                <div><span className="stress">배송지를 입력</span>하고</div>
                                <div>배송유형을 확인해 보세요!</div>
                                <div className="addr">
                                    <img alt="" src="/images/icons/register_search.svg" />
                                    <div>주소 검색</div>
                                </div>
                            </div>
                        </div>
                        <div className="price_lists_box">
                            <div className="price_lists">
                                <div className="price_item">
                                    <div>상품금액</div>
                                    <div>0원</div>
                                </div>
                                <div className="price_item">
                                    <div>상품할인금액</div>
                                    <div>0원</div>
                                </div>
                                <div className="price_item">
                                    <div>배송비</div>
                                    <div>0원</div>
                                </div>
                                <div className="total_price_item">
                                    <div>결제예정금액</div>
                                    <div><span>0</span>원</div>
                                </div>
                            </div>
                        </div>
                        <div className="storeBtn">상품을 담아주세요</div>
                        <ul className="guide">
                            <li>
                                <span>·</span>
                                <div>'입금확인'상태일 때는, 주문 내역 상세에서 직접 주문취소가 가능합니다.</div>
                            </li>
                            <li>
                                <span>·</span>
                                <div>'입금확인'이후 상태에는 고객센터로 문의해주세요.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </CartBox>
    );
}


export default Cart;