import React from 'react';
import Footer from '../common/Footer/index';
import Header from '../common/Header/index';
import SideMenu from '../common/SideMenu/index';
import { FindBox } from './styles';


const Find = ({ param }) => {
    return (
        <FindBox>
            <Header />
            <SideMenu />
            <section className="findForm">
                {
                    param === "find_id" &&
                    (
                        <>
                            <div className="find_tit">아이디 찾기</div>
                            <div className="form_box">
                                <form className="write_form">
                                    <div className="form_tit">이름</div>
                                    <input placeholder="고객님의 이름을 입력해주세요" />
                                    <div className="form_tit upper">이메일</div>
                                    <input placeholder="가입 시 등록하신 이메일 주소를 입력해주세요" />
                                    <div className=" btnBox">
                                        <a href>
                                            <span className="loginBtn">확인</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }
                {
                    param === "find_pwd" &&
                    (
                        <>
                            <div className="find_tit">비밀번호 찾기</div>
                            <div className="form_box">
                                <form className="write_form">
                                    <div className="form_tit">이름</div>
                                    <input />
                                    <div className="form_tit upper">아이디</div>
                                    <input />
                                    <div className="form_tit upper">이메일</div>
                                    <input />
                                    <div className="btnBox">
                                        <a href>
                                            <span className="loginBtn">찾기</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }
            </section>
            <Footer />
        </FindBox>
    );
}


export default Find;