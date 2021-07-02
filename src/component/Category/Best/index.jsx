import React from 'react';
import Footer from '../../common/Footer/index';
import Header from '../../common/Header/index';
import SideMenu from '../../common/SideMenu/index';
import './best.css';

const Best = () => {
    return (

        <div id="wrap">

            <Header />
            <SideMenu />

            <section className="content">
                <div className="content_wrap">
                    <div className="tit">베스트</div>
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
                        <img className="good" src=" images/goods/best/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[남햔푸드또띠아] 간편 간식 브리또 10종</div>
                        <div className="discount">
                            <span className="after_price">2,900원</span>
                        </div>
                        <div className="item_txt">가볍고 든든한 멕시칸 푸드</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 콩두부 300g </div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">1,615원</span>
                        </div>
                        <div className="before_price">1,900원</div>
                        <div className="item_txt">1등급 국산콩의 진한 고소함</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] DOLE 실속 바나나 1.1kg(필리핀) </div>
                        <div className="discount">
                            <span className="after_price">2,690원</span>
                        </div>
                        <div className="item_txt">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img4.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[하림] 냉장 닭가슴살 4종</div>
                        <div className="discount">
                            <span className="after_price">1,700원</span>
                        </div>
                        <div className="item_txt">간편하게 꺼내먹는 냉장 닭가슴살!</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[커피빈] 헤이즐넛 라떼 파우치</div>
                        <div className="discount">
                            <span className="after_price">1,400원</span>
                        </div>
                        <div className="item_txt">커피빈 라떼를 어디서나 간편하게</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[연세우유 X 마켓컬리] 전용목장우유</div>
                        <div className="discount">
                            <span className="after_price">1,850원</span>
                        </div>
                        <div className="item_txt">가격,퀼리티 모두 만족스러운 1A등급 우유</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] 아보카도 1개</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">1,890원</span>
                        </div>
                        <div className="before_price">2,100원</div>
                        <div className="item_txt">부드럽고 상큼한 과육,숲속의 버터(1개)</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 동물복지 우유 900ml</div>
                        <div className="discount">
                            <span className="after_price">2,950원</span>
                        </div>
                        <div className="item_txt">좋은 우유의 기준을 찾아 설계한</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[푸드렐라] 통통살 가라아게</div>
                        <div className="discount">
                            <span className="rate">48%</span>
                            <span className="after_price">2,496원</span>
                        </div>
                        <div className="before_price">4,800원</div>
                        <div className="item_txt">육즙이 가득한 풍성한 맛</div>
                    </div>
                    <div className="item">
                        <img className="good" src=" images/goods/best/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[남햔푸드또띠아] 간편 간식 브리또 10종</div>
                        <div className="discount">
                            <span className="after_price">2,900원</span>
                        </div>
                        <div className="item_txt">가볍고 든든한 멕시칸 푸드</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 콩두부 300g </div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">1,615원</span>
                        </div>
                        <div className="before_price">1,900원</div>
                        <div className="item_txt">1등급 국산콩의 진한 고소함</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] DOLE 실속 바나나 1.1kg(필리핀) </div>
                        <div className="discount">
                            <span className="after_price">2,690원</span>
                        </div>
                        <div className="item_txt">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img4.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[하림] 냉장 닭가슴살 4종</div>
                        <div className="discount">
                            <span className="after_price">1,700원</span>
                        </div>
                        <div className="item_txt">간편하게 꺼내먹는 냉장 닭가슴살!</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[커피빈] 헤이즐넛 라떼 파우치</div>
                        <div className="discount">
                            <span className="after_price">1,400원</span>
                        </div>
                        <div className="item_txt">커피빈 라떼를 어디서나 간편하게</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[연세우유 X 마켓컬리] 전용목장우유</div>
                        <div className="discount">
                            <span className="after_price">1,850원</span>
                        </div>
                        <div className="item_txt">가격,퀼리티 모두 만족스러운 1A등급 우유</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] 아보카도 1개</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">1,890원</span>
                        </div>
                        <div className="before_price">2,100원</div>
                        <div className="item_txt">부드럽고 상큼한 과육,숲속의 버터(1개)</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 동물복지 우유 900ml</div>
                        <div className="discount">
                            <span className="after_price">2,950원</span>
                        </div>
                        <div className="item_txt">좋은 우유의 기준을 찾아 설계한</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[푸드렐라] 통통살 가라아게</div>
                        <div className="discount">
                            <span className="rate">48%</span>
                            <span className="after_price">2,496원</span>
                        </div>
                        <div className="before_price">4,800원</div>
                        <div className="item_txt">육즙이 가득한 풍성한 맛</div>
                    </div>
                    <div className="item">
                        <img className="good" src=" images/goods/best/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[남햔푸드또띠아] 간편 간식 브리또 10종</div>
                        <div className="discount">
                            <span className="after_price">2,900원</span>
                        </div>
                        <div className="item_txt">가볍고 든든한 멕시칸 푸드</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 콩두부 300g </div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">1,615원</span>
                        </div>
                        <div className="before_price">1,900원</div>
                        <div className="item_txt">1등급 국산콩의 진한 고소함</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] DOLE 실속 바나나 1.1kg(필리핀) </div>
                        <div className="discount">
                            <span className="after_price">2,690원</span>
                        </div>
                        <div className="item_txt">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img4.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[하림] 냉장 닭가슴살 4종</div>
                        <div className="discount">
                            <span className="after_price">1,700원</span>
                        </div>
                        <div className="item_txt">간편하게 꺼내먹는 냉장 닭가슴살!</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[커피빈] 헤이즐넛 라떼 파우치</div>
                        <div className="discount">
                            <span className="after_price">1,400원</span>
                        </div>
                        <div className="item_txt">커피빈 라떼를 어디서나 간편하게</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[연세우유 X 마켓컬리] 전용목장우유</div>
                        <div className="discount">
                            <span className="after_price">1,850원</span>
                        </div>
                        <div className="item_txt">가격,퀼리티 모두 만족스러운 1A등급 우유</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] 아보카도 1개</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">1,890원</span>
                        </div>
                        <div className="before_price">2,100원</div>
                        <div className="item_txt">부드럽고 상큼한 과육,숲속의 버터(1개)</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 동물복지 우유 900ml</div>
                        <div className="discount">
                            <span className="after_price">2,950원</span>
                        </div>
                        <div className="item_txt">좋은 우유의 기준을 찾아 설계한</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[푸드렐라] 통통살 가라아게</div>
                        <div className="discount">
                            <span className="rate">48%</span>
                            <span className="after_price">2,496원</span>
                        </div>
                        <div className="before_price">4,800원</div>
                        <div className="item_txt">육즙이 가득한 풍성한 맛</div>
                    </div>
                    <div className="item">
                        <img className="good" src=" images/goods/best/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[남햔푸드또띠아] 간편 간식 브리또 10종</div>
                        <div className="discount">
                            <span className="after_price">2,900원</span>
                        </div>
                        <div className="item_txt">가볍고 든든한 멕시칸 푸드</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 콩두부 300g </div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">1,615원</span>
                        </div>
                        <div className="before_price">1,900원</div>
                        <div className="item_txt">1등급 국산콩의 진한 고소함</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] DOLE 실속 바나나 1.1kg(필리핀) </div>
                        <div className="discount">
                            <span className="after_price">2,690원</span>
                        </div>
                        <div className="item_txt">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img4.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[하림] 냉장 닭가슴살 4종</div>
                        <div className="discount">
                            <span className="after_price">1,700원</span>
                        </div>
                        <div className="item_txt">간편하게 꺼내먹는 냉장 닭가슴살!</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[커피빈] 헤이즐넛 라떼 파우치</div>
                        <div className="discount">
                            <span className="after_price">1,400원</span>
                        </div>
                        <div className="item_txt">커피빈 라떼를 어디서나 간편하게</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[연세우유 X 마켓컬리] 전용목장우유</div>
                        <div className="discount">
                            <span className="after_price">1,850원</span>
                        </div>
                        <div className="item_txt">가격,퀼리티 모두 만족스러운 1A등급 우유</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] 아보카도 1개</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">1,890원</span>
                        </div>
                        <div className="before_price">2,100원</div>
                        <div className="item_txt">부드럽고 상큼한 과육,숲속의 버터(1개)</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 동물복지 우유 900ml</div>
                        <div className="discount">
                            <span className="after_price">2,950원</span>
                        </div>
                        <div className="item_txt">좋은 우유의 기준을 찾아 설계한</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[푸드렐라] 통통살 가라아게</div>
                        <div className="discount">
                            <span className="rate">48%</span>
                            <span className="after_price">2,496원</span>
                        </div>
                        <div className="before_price">4,800원</div>
                        <div className="item_txt">육즙이 가득한 풍성한 맛</div>
                    </div>
                    <div className="item">
                        <img className="good" src=" images/goods/best/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[남햔푸드또띠아] 간편 간식 브리또 10종</div>
                        <div className="discount">
                            <span className="after_price">2,900원</span>
                        </div>
                        <div className="item_txt">가볍고 든든한 멕시칸 푸드</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 콩두부 300g </div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">1,615원</span>
                        </div>
                        <div className="before_price">1,900원</div>
                        <div className="item_txt">1등급 국산콩의 진한 고소함</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] DOLE 실속 바나나 1.1kg(필리핀) </div>
                        <div className="discount">
                            <span className="after_price">2,690원</span>
                        </div>
                        <div className="item_txt">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img4.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[하림] 냉장 닭가슴살 4종</div>
                        <div className="discount">
                            <span className="after_price">1,700원</span>
                        </div>
                        <div className="item_txt">간편하게 꺼내먹는 냉장 닭가슴살!</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[커피빈] 헤이즐넛 라떼 파우치</div>
                        <div className="discount">
                            <span className="after_price">1,400원</span>
                        </div>
                        <div className="item_txt">커피빈 라떼를 어디서나 간편하게</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[연세우유 X 마켓컬리] 전용목장우유</div>
                        <div className="discount">
                            <span className="after_price">1,850원</span>
                        </div>
                        <div className="item_txt">가격,퀼리티 모두 만족스러운 1A등급 우유</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] 아보카도 1개</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">1,890원</span>
                        </div>
                        <div className="before_price">2,100원</div>
                        <div className="item_txt">부드럽고 상큼한 과육,숲속의 버터(1개)</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 동물복지 우유 900ml</div>
                        <div className="discount">
                            <span className="after_price">2,950원</span>
                        </div>
                        <div className="item_txt">좋은 우유의 기준을 찾아 설계한</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[푸드렐라] 통통살 가라아게</div>
                        <div className="discount">
                            <span className="rate">48%</span>
                            <span className="after_price">2,496원</span>
                        </div>
                        <div className="before_price">4,800원</div>
                        <div className="item_txt">육즙이 가득한 풍성한 맛</div>
                    </div>
                    <div className="item">
                        <img className="good" src=" images/goods/best/img1.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[남햔푸드또띠아] 간편 간식 브리또 10종</div>
                        <div className="discount">
                            <span className="after_price">2,900원</span>
                        </div>
                        <div className="item_txt">가볍고 든든한 멕시칸 푸드</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img2.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 콩두부 300g </div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">1,615원</span>
                        </div>
                        <div className="before_price">1,900원</div>
                        <div className="item_txt">1등급 국산콩의 진한 고소함</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img3.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] DOLE 실속 바나나 1.1kg(필리핀) </div>
                        <div className="discount">
                            <span className="after_price">2,690원</span>
                        </div>
                        <div className="item_txt">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img4.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[하림] 냉장 닭가슴살 4종</div>
                        <div className="discount">
                            <span className="after_price">1,700원</span>
                        </div>
                        <div className="item_txt">간편하게 꺼내먹는 냉장 닭가슴살!</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img5.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[커피빈] 헤이즐넛 라떼 파우치</div>
                        <div className="discount">
                            <span className="after_price">1,400원</span>
                        </div>
                        <div className="item_txt">커피빈 라떼를 어디서나 간편하게</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img6.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[연세우유 X 마켓컬리] 전용목장우유</div>
                        <div className="discount">
                            <span className="after_price">1,850원</span>
                        </div>
                        <div className="item_txt">가격,퀼리티 모두 만족스러운 1A등급 우유</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img7.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[KF365] 아보카도 1개</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">1,890원</span>
                        </div>
                        <div className="before_price">2,100원</div>
                        <div className="item_txt">부드럽고 상큼한 과육,숲속의 버터(1개)</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img8.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[Kurly's] 동물복지 우유 900ml</div>
                        <div className="discount">
                            <span className="after_price">2,950원</span>
                        </div>
                        <div className="item_txt">좋은 우유의 기준을 찾아 설계한</div>
                    </div>
                    <div className="item">
                        <img className="good" src="images/goods/best/img9.jpeg" />
                        <div className="cart_box">
                            <div className="cart" />
                        </div>
                        <div className="item_title">[푸드렐라] 통통살 가라아게</div>
                        <div className="discount">
                            <span className="rate">48%</span>
                            <span className="after_price">2,496원</span>
                        </div>
                        <div className="before_price">4,800원</div>
                        <div className="item_txt">육즙이 가득한 풍성한 맛</div>
                    </div>
                </div>
                <div className="pageBtn">
                    <div><img src="/images/goods/special/icon_beforebefore.png" /></div>
                    <div><img src="/images/goods/special/icon_before.png" /></div>
                    <div className="btntxt pageBtnOn">1</div>
                    <div className="btntxt">2</div>
                    <div><img src="/images/goods/special/icon_after.png" /></div>
                    <div><img src="/images/goods/special/icon_afterafter.png" /></div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Best;