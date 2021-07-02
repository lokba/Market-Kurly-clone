import React from 'react';
import Footer from '../../common/Footer/index';
import Header from '../../common/Header/index';
import SideMenu from '../../common/SideMenu/index';

const Sale = () => {
    return (

        <div id="wrap">
            <Header />
            <SideMenu />
            <section className="main_bnr">
                <a className="main_bnr_link">
                    <img alt="" src="images/goods/cheap/banner.png" />
                </a>
            </section>
            <section className="content">
                <div className="content_wrap">
                    <div className="tit">알뜰쇼핑</div>
                    <div className="inner_info">
                        <div className="inner_txt">
                            <span>전체보기</span>
                        </div>
                        <div className="ctrl">
                            <div className="ctrl_tit">추천순</div>
                            <div className="ctrl_img">
                                <img alt="" src="/images/icons/ico_new_down.png" />
                            </div>
                            <div className="ctrl_off ctrl_img">
                                <img alt="" src="/images/icons/ico_new_up.png" />
                            </div>
                            <div className="category_box">
                                <ul className="ctrl_category">
                                    <li>추천순</li>
                                    <li>신상품순</li>
                                    <li>인기상품순</li>
                                    <li>혜택순</li>
                                    <li>낮은 가격순</li>
                                    <li>높은 가격순</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items_list">
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[라운드랩] 1025 독도 아이크림 30ml </div>
                        <div className="discount">
                            <span className="rate">80%</span>
                            <span className="after_price">7,000원</span>
                        </div>
                        <div className="before_price">35,000원</div>
                        <div className="item_txt">산뜻 촉촉하게 관리하는 눈가 피부</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[에이토솔루션] 비피도락 프리바이오틱스 (30일) </div>
                        <div className="discount">
                            <span className="rate">70%</span>
                            <span className="after_price">6,600원</span>
                        </div>
                        <div className="before_price">22,000원</div>
                        <div className="item_txt">장내 유익균 증식에 도움을 주는</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[배드스킨] 콜라겐 밤 하이리프팅 크림 </div>
                        <div className="discount">
                            <span className="rate">65%</span>
                            <span className="after_price">9,800원</span>
                        </div>
                        <div className="before_price">28,000원</div>
                        <div className="item_txt">고함량 콜라겐으로 탄력과 수분 충전</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img4.png" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[에어퀸] 생리대 4종 </div>
                        <div className="discount">
                            <span className="rate">65%</span>
                            <span className="after_price">3,920원</span>
                        </div>
                        <div className="before_price">11,200원</div>
                        <div className="item_txt">지금껏 경험해보지 못한 통기성</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[간만세] 발효 건강화 세트</div>
                        <div className="discount">
                            <span className="rate">65%</span>
                            <span className="after_price">17,500원</span>
                        </div>
                        <div className="before_price">50,000원</div>
                        <div className="item_txt">밀크씨슬 추출물을 함유한</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[아토엔오투] 바른 손소독제 2종 </div>
                        <div className="discount">
                            <span className="rate">64%</span>
                            <span className="after_price">6,980원</span>
                        </div>
                        <div className="before_price">19,800원</div>
                        <div className="item_txt">언제 어디서나 즐기는 손 위생</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[네오랩] 릴렉스케어 (15일)</div>
                        <div className="discount">
                            <span className="rate">60%</span>
                            <span className="after_price">9,600원</span>
                        </div>
                        <div className="before_price">24,000원</div>
                        <div className="item_txt">편안한 하루를 위한 한 포</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">100% 미국 몽모랑시 NFC 타트체리주스 </div>
                        <div className="discount">
                            <span className="rate">60%</span>
                            <span className="after_price">15,000원</span>
                        </div>
                        <div className="before_price">37,500원</div>
                        <div className="item_txt">미국 몽모랑시 품종으로 새큼하게 스며드는 붉은 빛 영양!</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/cheap/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[소버스] 장건강:신바이오틱스 </div>
                        <div className="discount">
                            <span className="rate">60%</span>
                            <span className="after_price">20,000원</span>
                        </div>
                        <div className="before_price">50,000원</div>
                        <div className="item_txt">보장균수 100억 CFU의 유산균</div>
                    </div>
                </div>
                <div className="pageBtn">
                    <div><img alt="" src="/images/goods/special/icon_beforebefore.png" /></div>
                    <div><img alt="" src="/images/goods/special/icon_before.png" /></div>
                    <div className="btntxt pageBtnOn">1</div>
                    <div className="btntxt">2</div>
                    <div className="btntxt">3</div>
                    <div className="btntxt">4</div>
                    <div className="btntxt">5</div>
                    <div className="btntxt">6</div>
                    <div className="btntxt">7</div>
                    <div className="btntxt">8</div>
                    <div className="btntxt">9</div>
                    <div className="btntxt">10</div>
                    <div><img alt="" src="/images/goods/special/icon_after.png" /></div>
                    <div><img alt="" src="/images/goods/special/icon_afterafter.png" /></div>
                </div>
            </section>
            <Footer />
        </div>

    );
}


export default Sale;