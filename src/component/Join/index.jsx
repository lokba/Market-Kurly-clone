import React from 'react';
import Footer from '../common/Footer/index';
import Header from '../common/Header/index';
import SideMenu from '../common/SideMenu/index';
import { JoinBox } from './styles';

const Join = () => {
    return (
        <JoinBox>
            <Header />
            <SideMenu />
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
                                    <img alt="" src="/images/icons/register_search.svg" />
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
                                        <img alt="" src="/images/icons/circle_unchecked.svg" />
                                        <div className="agree_all">
                                            <div className="agreeAll">전체 동의합니다.</div>
                                            <div className="agreeAll_sub">선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</div>
                                        </div>
                                    </li>
                                    <li className="viewTerm">
                                        <img alt="" src="/images/icons/circle_unchecked.svg" />
                                        <div className="viewTermItem">
                                            <div>이용약관 동의<span className="agreeItem_stress"> (필수)</span></div>
                                            <div className="link_term">약관 보기 &gt;</div>
                                        </div>
                                    </li>
                                    <li className="viewTerm">
                                        <img alt="" src="/images/icons/circle_unchecked.svg" />
                                        <div className="viewTermItem">
                                            <div>개인정보 수집·이용 동의 <span className="agreeItem_stress"> (필수)</span></div>
                                            <div className="link_term">약관 보기 &gt;</div>
                                        </div>
                                    </li>
                                    <li className="viewTerm">
                                        <img alt="" src="/images/icons/circle_unchecked.svg" />
                                        <div className="viewTermItem">
                                            <div>개인정보 수집·이용 동의<span className="agreeItem_stress"> (선택)</span></div>
                                            <div className="link_term">약관 보기 &gt;</div>
                                        </div>
                                    </li>
                                    <li className="benefit_item">
                                        <div className="benefit_topItem">
                                            <img alt="" src="/images/icons/circle_unchecked.svg" />
                                            {/* <div class="benefitItem"> */}
                                            <div>무료배송, 할인쿠폰 등 혜택/정보 수신 동의<span className="agreeItem_stress"> (선택)</span>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                        <div className="agreeType">
                                            <img alt="" src="/images/icons/circle_unchecked.svg" />
                                            <span>SMS</span>
                                            <img alt="" src="/images/icons/circle_unchecked.svg" />
                                            <span>이메일</span>
                                        </div>
                                        <div className="agreeType_sub">
                                            <img alt="" src="/images/icons/register_sub_ico.svg" />
                                            <div>동의 시 한달 간[5%적립]+[무제한 무료배송]<span className="agreeItem_stress">(첫 주문 후
                                        적용)</span></div>
                                        </div>
                                    </li>
                                    <li className="viewTerm">
                                        <img alt="" src="/images/icons/circle_unchecked.svg" />
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
            </section>
            <Footer />
        </JoinBox>
    );
}


export default Join;