import React from 'react';
import './default.css';

const main = () => {

    return (
        <div id="wrap">
            <header>
                <div id="userMenu">
                    <a>
                        <img src="images/icons/delivery.png" />
                    </a>
                    <div id="menu_lists">
                        <div id="register">
                            <a href="register.html">
                                <li className="register_link">회원가입</li>
                            </a>
                        </div>
                        <div id="login">
                            <a href="login.html">
                                <li>로그인</li>
                            </a>
                        </div>
                        <div id="info">
                            <li>고객센터</li>
                            <img src="images/icons/ico_down.png" />
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
                    <a href="index.html" id="logo">
                        <img src="images/icons/logo_x2.png" />
                    </a>
                </div>
            </header>
            <nav>
                <div id="category">
                    <div className="category_info">
                        <img id="categoryAll_img" src="images/icons/ico_all.png" />
                        <li className="category_tit">전체 카테고리</li>
                    </div>
                    <div className="gnb_menu">
                        <ul>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">채소</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>친환경</li>
                                    <li>고구마·감자·당근</li>
                                    <li>시금치·쌈채소·나물</li>
                                    <li>브로콜리·파프리카·양배추</li>
                                    <li>양파·대파·마늘·배추</li>
                                    <li>오이·호박·고추</li>
                                    <li>냉동·이색·간편채소</li>
                                    <li>콩나물·버섯</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">과일·견과·쌀</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>친환경</li>
                                    <li>제철과일</li>
                                    <li>국산과일</li>
                                    <li>수입과일</li>
                                    <li>간편과일</li>
                                    <li>냉동·건과일</li>
                                    <li>견과류</li>
                                    <li>쌀·잡곡</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">수산·해산·건어물</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>제철수산</li>
                                    <li>생선류</li>
                                    <li>굴비·반건류</li>
                                    <li>오징어·낙지·문어</li>
                                    <li>새우·게·랍스터</li>
                                    <li>해산물·조개류</li>
                                    <li>수산가공품</li>
                                    <li>김·미·해조류</li>
                                    <li>건어물·다시팩</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">정육·계란</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>국내산 소고기</li>
                                    <li>수입산 소고기</li>
                                    <li>돼지고기</li>
                                    <li>계란류</li>
                                    <li>닭·오리고기</li>
                                    <li>양념육·돈까스</li>
                                    <li>양고기</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">국·반찬·메인요리</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>국·땅·찌개</li>
                                    <li>밀키트·메인요리</li>
                                    <li>밑반찬</li>
                                    <li>김치·젓갈·장류</li>
                                    <li>두부·어묵·부침개</li>
                                    <li>베이컨·햄·통조림</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">샐러드·간편식</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>샐러드·닭가슴살</li>
                                    <li>도시락·밥류</li>
                                    <li>파스타·면류</li>
                                    <li>떡볶이·튀김·순대</li>
                                    <li>피자·핫도그·만두</li>
                                    <li>폭립·떡갈비·안주</li>
                                    <li>죽·스프·카레</li>
                                    <li>선식·시리얼</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">면·양념·오일</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>파스타·면류</li>
                                    <li>식초·소스·드레싱</li>
                                    <li>양념·액젓·장류</li>
                                    <li>식용유·참기름·오일</li>
                                    <li>소금·설탕·향신료</li>
                                    <li>밀가루·가루·믹스</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">생수·음료·우유·커피</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>생수·탄산수</li>
                                    <li>음료·주스</li>
                                    <li>우유·두유·요거트</li>
                                    <li>커피</li>
                                    <li>차</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">간식·과자·떡</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>과자·스낵·쿠키</li>
                                    <li>초콜릿·젤리·캔디</li>
                                    <li>떡·한과</li>
                                    <li>아이스크림</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">베이커리·치즈·델리</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>식빵·빵류</li>
                                    <li>잼·버터·스프레드</li>
                                    <li>케이크·파이·디저트</li>
                                    <li>치즈</li>
                                    <li>델리</li>
                                    <li>올리브·피클</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">건강식품</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>영양제</li>
                                    <li>유산균</li>
                                    <li>홍삼·인삼·꿀</li>
                                    <li>건강즙·건강음료</li>
                                    <li>건강분말·건강환</li>
                                    <li>다이어트·이너뷰티</li>
                                    <li>유아동</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">생활용품·리빙</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>휴지·티슈</li>
                                    <li>여성·위생용품</li>
                                    <li>세제·청소용품</li>
                                    <li>화훼·인테리어소품</li>
                                    <li>의약외품·마스크</li>
                                    <li>생활잡화·문구</li>
                                    <li>캠핑용품</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">스킨케어·메이크업</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>스킨·미스트·패드</li>
                                    <li>에센스·엠플·로션</li>
                                    <li>크림·오일</li>
                                    <li>클렌징</li>
                                    <li>마스크팩</li>
                                    <li>선케어</li>
                                    <li>메이크업</li>
                                    <li>맨즈케어</li>
                                    <li>뷰티소품·기기</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">헤어·바디·구강</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>구강·면도</li>
                                    <li>샴푸·컨디셔너</li>
                                    <li>트리트먼트·팩</li>
                                    <li>헤어에센스·면모</li>
                                    <li>바디워시·스크럽</li>
                                    <li>바디로션·크림</li>
                                    <li>핸드·립·데오</li>
                                    <li>헤어·바디소품</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">주방용품</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>주방소모품·잡화</li>
                                    <li>주방·조리도구</li>
                                    <li>냄비·팬·솥</li>
                                    <li>보관용기·텀블러</li>
                                    <li>식기·테이블웨어</li>
                                    <li>컵·잔·커피도구</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">가전제품</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>주방가전</li>
                                    <li>생활가전</li>
                                    <li>계절가전</li>
                                    <li>디지턽·PC</li>
                                    <li>대형·설치가전</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">베이비·키즈</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>분유·간편·이유식</li>
                                    <li>이유식 재료</li>
                                    <li>간식·음식·음료</li>
                                    <li>건강식품</li>
                                    <li>이유·수유용품</li>
                                    <li>기저귀·물티슈</li>
                                    <li>세제·위생용품</li>
                                    <li>스킨·구강케어</li>
                                    <li>완구·잡화류</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">반려동물</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>강아지 간식</li>
                                    <li>강아지 주식</li>
                                    <li>고양이 간식</li>
                                    <li>고양이 주식</li>
                                    <li>반려동물 용품</li>
                                    <li>배변·위생</li>
                                    <li>소용량·샘플</li>
                                </ul>
                            </li>
                            <li className="gnb_menu_list">
                                <div className="inner_menu">
                                    <img className="i_menu_img" src="images/icons/icon_veggies_inactive_pc@2x.1586324570.png" />
                                    <div className="i_menu_txt">컬리의 추천</div>
                                </div>
                                <ul className="sub_menu">
                                    <li>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="new.html">
                    <li id="new" className="menu">신상품</li>
                </a>
                <a href="best.html">
                    <li id="best" className="menu">베스트</li>
                </a>
                <a href="cheap.html">
                    <li id="cheap" className="menu">알뜰쇼핑</li>
                </a>
                <a href="special.html">
                    <li id="special" className="menu">특가/혜택</li>
                </a>
                <div id="search">
                    <input />
                    <img src="images/icons/ico_search.png" />
                </div>
                <div id="location">
                    <img id="location_img" src="images/icons/ico_location.svg" />
                    <div className="location_subinfo">
                        <div><span>배송지를 등록</span>하고</div>
                        <div>구매 가능한 상품을 확인하세요!</div>
                        <div className="location_btn_box">
                            <a href="login.html">
                                <div className="location_loginBtn locationBtn">로그인</div>
                            </a>
                            <div className="location_addressBtn locationBtn">
                                <img src="images/icons/ico_search_white.png" />
                                <div>주소검색</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="cart.html" id="cart">
                    <img id="cart_img" src="images/icons/ico_cart.svg" />
                </a>
            </nav>
            <section className="main_banner">
                <div id="banner_img1">
                    <img src="images/banner/banner2.png" />
                </div>
            </section>
            <div className="side_menu">
                <div className="side_menu_img">
                    <img src="images/icons/side_btn.png" />
                </div>
                <div className="side_menu_box">등급별 혜택</div>
                <div className="side_menu_box">레시피</div>
                <div className="side_menu_box">베스트 후기</div>
                <div className="recent_good">
                    <div className="ico_side">
                        <img src="images/icons/ico_side_up.png" />
                    </div>
                    <div className="recent_good_txt">최근 본 상품</div>
                    <div className="recent_img">
                        <img src="images/icons/ico_center.jpeg" />
                    </div>
                    <div className="ico_side">
                        <img src="images/icons/ico_side_down.png" />
                    </div>
                    {/* <div class="ico_side">
                              <img src="images/icons/ico_side_down.png">
                          </div> */}
                </div>
            </div>
            <section className="goods type1">
                <div className="title">
                    이 상품 어때요?
                      </div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/how_about_this/bread.jpeg" />
                        <div className="item_title">MY FIRST 처음 만나는 진짜 식빵</div>
                        <div className="discount">
                            <span className="rate">5%</span>
                            <span className="after_price">4,655원</span>
                        </div>
                        <div className="before_price">4,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/how_about_this/cheese.jpeg" />
                        <div className="item_title">[그랑도르즈] 까망베르 2종</div>
                        <div className="discount">
                            <span className="rate">20%</span>
                            <span className="after_price">13,520원</span>
                        </div>
                        <div className="before_price">16,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/how_about_this/choco.jpeg" />
                        <div className="item_title">[돈마루] 한돈 앞다리살 2종 (냉장) </div>
                        <div className="discount">
                            <span className="after_price">5,300원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/how_about_this/meat.jpeg" />
                        <div className="item_title">[라메종드아모린] 살레위드 솔티드 버터 캐러멜 2종</div>
                        <div className="discount">
                            <span className="after_price">7,900원</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="goods type2">
                <div className="title cursor_tit">
                    특가/혜택 &gt;
                      </div>
                <div className="t2_items_list">
                    <div className="t2_item">
                        <img src="images/goods/special_benefit/tomato.jpeg" />
                        <div className="t2_title">금주의 과일 · 채소 최대 15% 할인</div>
                        <div className="t2_sub">
                            찰토마토부터 골드키위까지
                          </div>
                    </div>
                    <div className="t2_item">
                        <img src="images/goods/special_benefit/cheeseball.jpeg" />
                        <div className="t2_title">애슐리 인기메뉴 최대 10% 할인</div>
                        <div className="t2_sub">
                            치즈볼부터 양념치킨까지
                          </div>
                    </div>
                    <div className="t2_item">
                        <img src="images/goods/special_benefit/meat.jpeg" />
                        <div className="t2_title">제주도니 최대 15% 할인</div>
                        <div className="t2_sub">
                            제주양돈농협의 돈육 브랜드
                          </div>
                    </div>
                </div>
            </section>
            <section className="goods type3">
                <div className="title cursor_tit">
                    놓치면 후회할 가격 &gt;
                      </div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/miss_regret_price/chicken.jpeg" />
                        <div className="item_title">[하림] 버팔로 치킨 봉 스파이시</div>
                        <div className="discount">
                            <span className="rate">25%</span>
                            <span className="after_price">8,250원</span>
                        </div>
                        <div className="before_price">11,000원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/miss_regret_price/bagel.jpeg" />
                        <div className="item_title">[아침엔] 베이글 2종</div>
                        <div className="discount">
                            <span className="rate">30%</span>
                            <span className="after_price">4,130원</span>
                        </div>
                        <div className="before_price">5,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/miss_regret_price/sagol.jpeg" />
                        <div className="item_title">[엔쿡] 무항생제 어린이 한우 사골 곰국 </div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">13,515원</span>
                        </div>
                        <div className="before_price">15,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/miss_regret_price/rice.jpeg" />
                        <div className="item_title">[LOTS OF LOVE] 차돌듬뿍 묵은지 볶음밥</div>
                        <div className="discount">
                            <span className="rate">20%</span>
                            <span className="after_price">6,240원</span>
                        </div>
                        <div className="before_price">7,800원</div>
                    </div>
                </div>
            </section>
            <section className="main_bnr">
                <a className="main_bnr_link">
                    <img src="images/banner/icecream.png" />
                </a>
            </section>
            <section className="type4">
                <div className="title">
                    MD의 추천
                      </div>
                <div className="t4_category">
                    <ul className="list_category">
                        <li>
                            <a className="t4_menu ">채소</a>
                        </li>
                        <li>
                            <a className="t4_menu t4_menu_on">과일 · 견과 · 쌀</a>
                        </li>
                        <li>
                            <a className="t4_menu ">수산 · 해산 · 건어물</a>
                        </li>
                        <li>
                            <a className="t4_menu ">정육 · 계란</a>
                        </li>
                        <li>
                            <a className="t4_menu ">국 · 반찬 · 메인요리</a>
                        </li>
                        <li>
                            <a className="t4_menu ">샐러드 · 간편식</a>
                        </li>
                        <li>
                            <a className="t4_menu ">면 · 양념 · 오일</a>
                        </li>
                        <li>
                            <a className="t4_menu ">생수 · 음료 · 우유 · 커피</a>
                        </li>
                        <li>
                            <a className="t4_menu ">간식 · 과자 · 떡</a>
                        </li>
                        <li>
                            <a className="t4_menu ">베이커리 · 치즈 · 델리</a>
                        </li>
                        <li>
                            <a className="t4_menu ">건강식품</a>
                        </li>
                        <li>
                            <a className="t4_menu ">생활용품 · 리빙</a>
                        </li>
                        <li>
                            <a className="t4_menu ">스킨케어 · 메이크업</a>
                        </li>
                        <li>
                            <a className="t4_menu ">헤어 · 바디 · 구강</a>
                        </li>
                        <li>
                            <a className="t4_menu ">주방용품</a>
                        </li>
                        <li>
                            <a className="t4_menu ">가전제품</a>
                        </li>
                        <li>
                            <a className="t4_menu ">베이비 · 키즈</a>
                        </li>
                        <li>
                            <a className="t4_menu ">반려동물</a>
                        </li>
                    </ul>
                </div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/md_recommend/cherry.jpeg" />
                        <div className="item_title">미국산 워싱턴 생체리 500g 10row</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">13,410원</span>
                        </div>
                        <div className="before_price">14,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/md_recommend/blueberry.jpeg" />
                        <div className="item_title">국산 블루베리 100g(특)</div>
                        <div className="discount">
                            <span className="after_price">7,990원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/md_recommend/apple.jpeg" />
                        <div className="item_title">신비 복숭아 700g 5~6입 (특) </div>
                        <div className="discount">
                            <span className="after_price">16,900원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/md_recommend/melon.jpeg" />
                        <div className="item_title">실속 성주 참외 1.5kg</div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">12,665원</span>
                        </div>
                        <div className="before_price">14,900원</div>
                    </div>
                </div>
                <div className="btn">
                    <button>과일 · 견과 · 쌀 전체보기 &gt;</button>
                </div>
            </section>
            <section className="t4_bnr">
                <div className="t4_bnr_content">
                    <div className="t4_bnr_txt1">장바구니 자랑하면 5천원의 행운이 매일!</div>
                    <div className="t4_bnr_txt2">매일 20분께 드리는 적립금 혜택!</div>
                </div>
            </section>
            <section className="goods type5">
                <div className="title cursor_tit">
                    지금 가장 핫한 상품 &gt;
                      </div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/most_hot/corn.jpeg" />
                        <div className="item_title">초당 옥수수(알록이) 5입</div>
                        <div className="discount">
                            <span className="after_price">11,300원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/most_hot/noodle.jpeg" />
                        <div className="item_title">[소이연남] 태국 소고기 쌀국수</div>
                        <div className="discount">
                            <span className="after_price">7,500원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/most_hot/apple.jpeg" />
                        <div className="item_title">신비 복숭아 400g(3~5입)</div>
                        <div className="discount">
                            <span className="after_price">9,900원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/most_hot/meat.jpeg" />
                        <div className="item_title">[더플랜] 꿔바로우 찹쌀 탕수육</div>
                        <div className="discount">
                            <span className="rate">10%</span>
                            <span className="after_price">6,660원</span>
                        </div>
                        <div className="before_price">7,400원</div>
                    </div>
                </div>
            </section>
            <section className="goods type6">
                <div className="title cursor_tit">
                    컬리, 여름을 부탁해! &gt;
                      </div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/care_summer/air_clean.jpeg" />
                        <div className="item_title">[제니퍼룸] 제습기 7L JR-DH0001WH</div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">16,9000원</span>
                        </div>
                        <div className="before_price">199,000원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/care_summer/handy_fan.jpeg" />
                        <div className="item_title">[에비에어] 스마트 휴대용 핸디 선풍기 R5 2종</div>
                        <div className="discount">
                            <span className="rate">33%</span>
                            <span className="after_price">9,900원</span>
                        </div>
                        <div className="before_price">14,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/care_summer/mold_clean.jpeg" />
                        <div className="item_title">[생활공작소] 곰팡이 제거제</div>
                        <div className="discount">
                            <span className="rate">25%</span>
                            <span className="after_price">4,125원</span>
                        </div>
                        <div className="before_price">5,500원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/care_summer/fan.jpeg" />
                        <div className="item_title">[르젠] 앱연동 BLDC 리모컨 선풍기 LZEF-DCW20</div>
                        <div className="discount">
                            <span className="rate">7%</span>
                            <span className="after_price">64,800원</span>
                        </div>
                        <div className="before_price">69,800원</div>
                    </div>
                </div>
            </section>
            <section className="goods type7">
                <div className="t7_title cursor_tit">
                    365일 최저가 도전 &gt;
                      </div>
                <div className="t7_sub">최저가 도전, 365일 언제나 알뜰하게</div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/365_low_price/onion.jpeg" />
                        <div className="sticker">기획특가</div>
                        <div className="item_title">햇 양파 3kg</div>
                        <div className="discount">
                            <span className="rate">18%</span>
                            <span className="after_price">4,490원</span>
                        </div>
                        <div className="before_price">5,490원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/365_low_price/eggplant.jpeg" />
                        <div className="item_title">[KF365] 가지 2입</div>
                        <div className="discount">
                            <span className="after_price">1,500원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/365_low_price/sausage.jpeg" />
                        <div className="item_title">[오뗄블랙라벨] 추억의 비엔나 소시지 800g</div>
                        <div className="discount">
                            <span className="rate">15%</span>
                            <span className="after_price">5,865원</span>
                        </div>
                        <div className="before_price">6,900원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/365_low_price/water.jpeg" />
                        <div className="item_title">[KF365] 플레인 탄산수 2종</div>
                        <div className="discount">
                            <span className="after_price">3,500원</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="goods type8">
                <div className="t7_title cursor_tit">
                    식단 관리 &gt;
                      </div>
                <div className="t7_sub">실패 없는 식단 관리의 비결</div>
                <div className="items_list">
                    <div className="item">
                        <img src="images/goods/diet_manage/hollywood.jpeg" />
                        <div className="item_title">[그린몬스터] 헐리우드 48시간</div>
                        <div className="discount">
                            <span className="rate">25%</span>
                            <span className="after_price">21,000원</span>
                        </div>
                        <div className="before_price">28,000원</div>
                    </div>
                    <div className="item">
                        <img src="images/goods/diet_manage/salad.jpeg" />
                        <div className="item_title">[저스트 그린] 리코타 하비스트 샐러드 285g</div>
                        <div className="discount">
                            <span className="after_price">6,900원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/diet_manage/chicken.jpeg" />
                        <div className="item_title">[Better me] 냉동 닭가슴살 4종</div>
                        <div className="discount">
                            <span className="after_price">1,700원</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/goods/diet_manage/oat.jpeg" />
                        <div className="item_title">[심플잇] 오트면 충분해 2종</div>
                        <div className="discount">
                            <span className="after_price">1,500원</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="goods type9">
                <div className="t9_title cursor_tit">
                    컬리의 레시피 &gt;
                      </div>
                <div className="t9_items_list">
                    <div className="t9_item">
                        <img src="images/goods/kurly_recipe/noodle.png" />
                        <div className="item_title">해초면 냉채</div>
                    </div>
                    <div className="t9_item">
                        <img src="images/goods/kurly_recipe/lasagna.jpeg" />
                        <div className="item_title">포두부 라자냐</div>
                    </div>
                    <div className="t9_item">
                        <img src="images/goods/kurly_recipe/octopus.jpeg" />
                        <div className="item_title">문어 뽈뽀</div>
                    </div>
                </div>
            </section>
            <section className="goods type10">
                <div className="t9_title">
                    인스타그램 고객 후기
                      </div>
                <div className="t10_items_list">
                    <div className="t10_item">
                        <img src="images/goods/instagram_review/img1.jpeg" />
                    </div>
                    <div className="t10_item">
                        <img src="images/goods/instagram_review/img2.jpeg" />
                    </div>
                    <div className="t10_item">
                        <img src="images/goods/instagram_review/img3.jpeg" />
                    </div>
                    <div className="t10_item">
                        <img src="images/goods/instagram_review/img4.jpeg" />
                    </div>
                    <div className="t10_item">
                        <img src="images/goods/instagram_review/img5.jpeg" />
                    </div>
                    <div className="t10_item">
                        <img src="images/goods/instagram_review/img6.jpeg" />
                    </div>
                </div>
                <div className="t10_subinfo">
                    <div className="question">더 많은 고객 후기가 궁금하다면?</div>
                    <div className="comment">@marketkurly_regram</div>
                </div>
            </section>
            <section id="footer_bnr" className="main_bnr">
                <a className="main_bnr_link">
                    <img src="images/banner/shipping.png" />
                </a>
            </section>
            <section className="type11">
                <div className="t11_call">
                    <div className="t11_title">고객행복센터</div>
                    <div className="t11_call_info">
                        <div className="phone">1644-1107</div>
                        <div className="t11_list">
                            <div className="place">365고객센터</div>
                            <div className="time">오전 7시 ~ 오후 7시</div>
                        </div>
                    </div>
                    <div className="t11_call_info">
                        <div className="box">카카오톡 문의</div>
                        <div className="t11_list">
                            <div className="place">365고객센터</div>
                            <div className="time">오전 7시 ~ 오후 7시</div>
                        </div>
                    </div>
                    <div className="t11_call_info">
                        <div className="box">1:1 문의</div>
                        <div className="t11_list">
                            <div className="place">24시간 접수 가능</div>
                            <div className="time">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</div>
                        </div>
                    </div>
                </div>
                <div className="t11_info">
                    <div className="t11_menu">
                        <span>컬리소개</span>
                        <span>컬리소개영상</span>
                        <span>인재채용</span>
                        <span>이용약관</span>
                        <span>개인정보처리방침</span>
                        <span>이용안내</span>
                    </div>
                    <div>법인명(상호):주식회사 컬리 | 사업자등록번호:261-81-23567 <span className="stress">사업자정보 확인</span></div>
                    <div>통신판매업:제 2018-서울강남-01646호 | 개인정보보호책임자:이원준</div>
                    <div>주소:서울특별시 강남구 테헤란로 133,18층(역삼동) | 대표이사:김슬아</div>
                    <div>입점문의:<span className="stress">입점문의하기</span> | 제휴문의 : <span className="stress">business@kurlycorp.com</span>
                    </div>
                    <div>채용문의:<span className="stress">recruit@kurlycorp.com</span></div>
                    <div>팩스:070-7500-6098 | 이메일:<span className="stress">help@kurlycorp.com</span></div>
                    <div className="copyright">© KURLY CORP.ALL RIGHTS RESERVED</div>
                    <div className="sns">
                        <a>
                            <img src="images/icons/ico_instagram.png" />
                        </a>
                        <a>
                            <img src="images/icons/ico_fb.png" />
                        </a>
                        <a>
                            <img src="images/icons/ico_blog.png" />
                        </a>
                        <a>
                            <img src="images/icons/ico_naverpost.png" />
                        </a>
                        <a>
                            <img src="images/icons/ico_youtube.png" />
                        </a>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer_link">
                    <a className="link_img">
                        <img src="images/icons/footer_img1.png" />
                    </a>
                    <div className="txt">
                        <div>[인증범위]마켓컬리 쇼핑몰 서비스 개발 · 운영</div>
                        <div>[유효기간]2019.04.01~2022.03.31</div>
                    </div>
                </div>
                <div className="footer_link">
                    <a className="link_img">
                        <img src="images/icons/footer_img2.png" />
                    </a>
                    <div className="txt">
                        <div>개인정보보호 우수 웹사이트 ·</div>
                        <div>개인정보처리시스템 인증(ePRIVACY PLUS)</div>
                    </div>
                </div>
                <div className="footer_link">
                    <a className="payments">
                        <img src=" images/icons/footer_img3.png" />
                    </a>
                    <div className="txt">
                        <div>고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한</div>
                        <div>토스 페이먼츠 구매안전(에스트로)서비스를 이용하실 수 있습니다.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default main;