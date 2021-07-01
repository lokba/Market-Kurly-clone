import React from 'react';
import './register.css'

const Register = () => {
    return (


        <div>
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
                {/* -------------------------------start------------------------------------ */}
                <section className="registerForm">
                    <div className="register_tit">회원가입</div>
                    <div className="necessary"><span className="must_input">*</span>필수입력사항</div>
                    <div className="form_box">
                        <form className="write_form">
                            <div className="form_list">
                                <div className="form_list_title">아이디<span className="must_input">*</span></div>
                                <input placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
                                <div className="overlap_btn">중복확인</div>
                            </div>
                            <div className="form_list">
                                <div className="form_list_title">비밀번호<span className="must_input">*</span></div>
                                <input placeholder="비밀번호를 입력해주세요" />
                            </div>
                            <div className="form_list">
                                <div className="form_list_title">비밀번호확인<span className="must_input">*</span></div>
                                <input placeholder="비밀번호를 한번 더 입력해주세요" />
                            </div>
                            <div className="form_list">
                                <div className="form_list_title">이름<span className="must_input">*</span></div>
                                <input placeholder="이름을 입력해주세요" />
                            </div>
                            <div className="form_list">
                                <div className="form_list_title">이메일<span className="must_input">*</span></div>
                                <input placeholder="예:marketkurly@kurly.com" />
                                <div className="overlap_btn">중복확인</div>
                            </div>
                            <div className="form_list">
                                <div className="form_list_title">휴대폰<span className="must_input">*</span></div>
                                <input placeholder="숫자만 입력해주세요" />
                                <div id="verify" className="overlap_btn">인증번호 받기</div>
                            </div>
                            <div id="addrInfo" className="form_list">
                                <div className="form_list_title">주소<span className="must_input">*</span></div>
                                <div className="addr_search">
                                    <div className="addr">
                                        <img src="images/icons/register_search.svg" />
                                        <div>주소 검색</div>
                                    </div>
                                    <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
                                </div>
                            </div>
                            <div className="form_list">
                                <div className="form_list_title">성별</div>
                                <div className="gender_list">
                                    <ul className="gender_item">
                                        <li>
                                            <span className="choiceBox" />
                                            <span>남자</span>
                                        </li>
                                        <li>
                                            <span className="choiceBox" />
                                            <span>여자</span>
                                        </li>
                                        <li>
                                            <span className="choiceBox checked" />
                                            <span>선택안함</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form_list">
                                <div className="form_list_title">생년월일</div>
                                <div className="birth_date">
                                    <input placeholder="YYYY" />
                                    <span className="bend_bar">/</span>
                                    <input placeholder="MM" />
                                    <span className="bend_bar">/</span>
                                    <input placeholder="DD" />
                                </div>
                            </div>
                            <div id="hidden_open" className="form_list last_list">
                                <div className="form_list_title">추가입력 사항</div>
                                <div className="addInfo_list">
                                    <ul className="addInfo_item">
                                        <li>
                                            <span className="choiceBox checked" />
                                            <span>추천인 아이디</span>
                                        </li>
                                        <li>
                                            <span className="choiceBox" />
                                            <span>참여 이벤트명</span>
                                        </li>
                                    </ul>
                                    <div className="addInfo_hidden">
                                        <input placeholder="추천인 아이디를 입력해주세요." />
                                        <div>추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.</div>
                                        <div>가입 이후, 수정이 불가합니다.</div>
                                        <div>대소문자 및 띄어쓰기에 유의해주세요.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="agreeBox">
                                <div className="agree_list">
                                    <div className="agree_list_title">이용약관동의<span className="must_input">*</span></div>
                                    <ul className="agree_item">
                                        <li>
                                            <img src="images/icons/circle_unchecked.svg" />
                                            <div className="agree_all">
                                                <div className="agreeAll">전체 동의합니다.</div>
                                                <div className="agreeAll_sub">선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</div>
                                            </div>
                                        </li>
                                        <li className="viewTerm">
                                            <img src="images/icons/circle_unchecked.svg" />
                                            <div className="viewTermItem">
                                                <div>이용약관 동의<span className="agreeItem_stress"> (필수)</span></div>
                                                <div className="link_term">약관 보기 &gt;</div>
                                            </div>
                                        </li>
                                        <li className="viewTerm">
                                            <img src="images/icons/circle_unchecked.svg" />
                                            <div className="viewTermItem">
                                                <div>개인정보 수집·이용 동의 <span className="agreeItem_stress"> (필수)</span></div>
                                                <div className="link_term">약관 보기 &gt;</div>
                                            </div>
                                        </li>
                                        <li className="viewTerm">
                                            <img src="images/icons/circle_unchecked.svg" />
                                            <div className="viewTermItem">
                                                <div>개인정보 수집·이용 동의<span className="agreeItem_stress"> (선택)</span></div>
                                                <div className="link_term">약관 보기 &gt;</div>
                                            </div>
                                        </li>
                                        <li className="benefit_item">
                                            <div className="benefit_topItem">
                                                <img src="images/icons/circle_unchecked.svg" />
                                                {/* <div class="benefitItem"> */}
                                                <div>무료배송, 할인쿠폰 등 혜택/정보 수신 동의<span className="agreeItem_stress"> (선택)</span>
                                                </div>
                                                {/* </div> */}
                                            </div>
                                            <div className="agreeType">
                                                <img src="images/icons/circle_unchecked.svg" />
                                                <span>SMS</span>
                                                <img src="images/icons/circle_unchecked.svg" />
                                                <span>이메일</span>
                                            </div>
                                            <div className="agreeType_sub">
                                                <img src="images/icons/register_sub_ico.svg" />
                                                <div>동의 시 한달 간[5%적립]+[무제한 무료배송]<span className="agreeItem_stress">(첫 주문 후
                                        적용)</span></div>
                                            </div>
                                        </li>
                                        <li className="viewTerm">
                                            <img src="images/icons/circle_unchecked.svg" />
                                            <div className="viewTermItem">
                                                <div>본인은 만 14세 이상입니다.<span className="viewTerm_stress"> (필수)</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form></div>
                    <div className=" btnBox">
                        <a href>
                            <span className="registerBtn">가입하기</span>
                        </a>
                    </div>
                </section></div>
            {/* -------------------------------end------------------------------------ */}
            <section className=" type11">
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
                    <div>법인명(상호):주식회사 컬리 | 사업자등록번호:261-81-23567 <span className="stress">사업자정보 확인</span>
                    </div>
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


export default Register;