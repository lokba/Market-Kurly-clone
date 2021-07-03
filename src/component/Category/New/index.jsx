import React from 'react';
import Footer from '../../common/Footer/index';
import GoodListsHeader from '../../common/GoodListsHeader/index';
import Header from '../../common/Header/index';
import SideMenu from '../../common/SideMenu/index';
import './new.css';

const New = () => {
    return (
        <div id="wrap">
            <Header />
            <SideMenu />
            <section className="content">
                <GoodListsHeader title="신상품" />
                <div className="items_list">
                    <div className="item">
                        <img className="good" src=" /images/goods/special/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[상하목장] 유기농 베이비 요구르트 3종</div>
                        <div className="discount">
                            <span className="after_price">3,500원</span>
                        </div>
                        <div className="item_txt">우리 아이를 위한 요거트</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[글로벌] 나이프 7종</div>
                        <div className="discount">
                            <span className="after_price">73,600원</span>
                        </div>
                        <div className="item_txt">요리 대가들의 이유 있는 선택</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">친환경 햇 향파 350g </div>
                        <div className="discount">
                            <span className="after_price">1,690원</span>
                        </div>
                        <div className="item_txt">남길 걱정 없는 만능 채소</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img4.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">친환경 브로콜리 1개</div>
                        <div className="discount">
                            <span className="after_price">2,990원</span>
                        </div>
                        <div className="item_txt">풍부한 영양인 담긴 초록 꽃송이</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">친환경 햇 양파 1kg</div>
                        <div className="discount">
                            <span className="rate">24%</span>
                            <span className="after_price">2,272원</span>
                        </div>
                        <div className="before_price">2,990원</div>
                        <div className="item_txt">단단하고 아삭한 필수 채소</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">친환경 조각 브로콜리 150g</div>
                        <div className="discount">
                            <span className="after_price">2,490원</span>
                        </div>
                        <div className="item_txt">간편하게 즐기는 초록 꽃송이</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 에브리빈 아메리카노 파우치 2종</div>
                        <div className="discount">
                            <span className="after_price">990원</span>
                        </div>
                        <div className="item_txt">간편하게 누리는 깊고 부드러운 풍미</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[스텔라엔츄이스] DOG 동결건조 밀믹서 치킨</div>
                        <div className="discount">
                            <span className="after_price">38,000원</span>
                        </div>
                        <div className="item_txt">다양하게 활용하는 닭고기 주식</div>
                    </div>
                    <div className="item">
                        <img className="good" src="/images/goods/special/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[모노치킨] 타코야키</div>
                        <div className="discount">
                            <span className="after_price">3,800원</span>
                        </div>
                        <div className="item_txt">소스,가쓰오부시까지 알찬 구성</div>
                    </div>
                </div>
                <div className="pageBtn">
                    <div><img alt="" src="/images/goods/special/icon_beforebefore.png" /></div>
                    <div><img alt="" src="/images/goods/special/icon_before.png" /></div>
                    <div className="btntxt pageBtnOn">1</div>
                    <div className="btntxt">2</div>
                    <div className="btntxt">3</div>
                    <div className="btntxt">4</div>
                    <div><img alt="" src="/images/goods/special/icon_after.png" /></div>
                    <div><img alt="" src="/images/goods/special/icon_afterafter.png" /></div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default New;