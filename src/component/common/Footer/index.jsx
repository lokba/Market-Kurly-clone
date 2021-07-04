import React from 'react';
import { FooterBox } from './styles';
// import './footer.css';


const Footer = () => {
    return (
        <FooterBox>
            <section className="type">
                <div className="call">
                    <div className="title">고객행복센터</div>
                    <div className="call_info">
                        <div className="phone">1644-1107</div>
                        <div className="list">
                            <div className="place">365고객센터</div>
                            <div className="time">오전 7시 ~ 오후 7시</div>
                        </div>
                    </div>
                    <div className="call_info">
                        <div className="box">카카오톡 문의</div>
                        <div className="list">
                            <div className="place">365고객센터</div>
                            <div className="time">오전 7시 ~ 오후 7시</div>
                        </div>
                    </div>
                    <div className="call_info">
                        <div className="box">1:1 문의</div>
                        <div className="list">
                            <div className="place">24시간 접수 가능</div>
                            <div className="time">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="menu">
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
                        <a href="/">
                            <img alt="" src="/images/icons/ico_instagram.png" />
                        </a>
                        <a href="/">
                            <img alt="" src="/images/icons/ico_fb.png" />
                        </a>
                        <a href="/">
                            <img alt="" src="/images/icons/ico_blog.png" />
                        </a>
                        <a href="/">
                            <img alt="" src="/images/icons/ico_naverpost.png" />
                        </a>
                        <a href="/">
                            <img alt="" src="/images/icons/ico_youtube.png" />
                        </a>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer_link">
                    <a href="/" className="link_img">
                        <img alt="" src="/images/icons/footer_img1.png" />
                    </a>
                    <div className="txt">
                        <div>[인증범위]마켓컬리 쇼핑몰 서비스 개발 · 운영</div>
                        <div>[유효기간]2019.04.01~2022.03.31</div>
                    </div>
                </div>
                <div className="footer_link">
                    <a href="/" className="link_img">
                        <img alt="" src="/images/icons/footer_img2.png" />
                    </a>
                    <div className="txt">
                        <div>개인정보보호 우수 웹사이트 ·</div>
                        <div>개인정보처리시스템 인증(ePRIVACY PLUS)</div>
                    </div>
                </div>
                <div className="footer_link">
                    <a href="/" className="payments">
                        <img alt="" src="/images/icons/footer_img3.png" />
                    </a>
                    <div className="txt">
                        <div>고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한</div>
                        <div>토스 페이먼츠 구매안전(에스트로)서비스를 이용하실 수 있습니다.</div>
                    </div>
                </div>
            </footer>
        </FooterBox>
    );
};

export default Footer;