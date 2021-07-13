import React from 'react';
import HeaderContainer from '../../container/HeaderContainer';
import Footer from '../common/Footer/index';
import { LoginBox } from './styles';

const Login = ({ onChange, loginInfo }) => {
    const { id, password } = loginInfo;


    return (
        <LoginBox>
            <HeaderContainer />
            <section className="loginForm">
                <div className="login_tit">로그인</div>
                <div className="form_box">
                    <form className="write_form">
                        <input onChange={onChange} value={id} name="id" placeholder="아이디를 입력해주세요" />
                        <input onChange={onChange} value={password} name="password" placeholder="비밀번호를 입력해주세요" />
                        <div className="login_subInfo">
                            <div className="checkbox_save">
                                <div className="clickBox">
                                    <img alt="" src="/images/icons/unchecked_bx.png" />
                                    <div>보안접속</div>
                                </div>
                                <div className="off clickBox">
                                    <img alt="" src="/images/icons/checked_box.png" />
                                    <div>보안접속</div>
                                </div>
                            </div>
                            <div className="login_search">
                                <a href="/shop/member/login/find_id">
                                    <span>아이디 찾기</span>
                                </a>
                                <span className="bar" />
                                <a href="/shop/member/login/find_pwd">
                                    <span>비밀번호 찾기</span>
                                </a>
                            </div>
                        </div>
                        <div className=" btnBox">
                            <a href>
                                <span className="loginBtn">로그인</span>
                            </a>
                            <a href="/shop/member/join">
                                <span className="registerBtn">회원가입</span>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </LoginBox>

    );
}

export default Login;