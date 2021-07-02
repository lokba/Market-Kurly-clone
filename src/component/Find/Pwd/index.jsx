import React from 'react';
import Footer from '../../common/Footer/index';
import Header from '../../common/Header/index';
import SideMenu from '../../common/SideMenu/index';
import './pw_search.css';

const Pwd = () => {
    return (

        <div id="wrap">
            <Header />
            <SideMenu />
            <section className="loginForm">
                <div className="login_tit">비밀번호 찾기</div>
                <div className="form_box">
                    <form className="write_form">
                        <div className="form_tit">이름</div>
                        <input />
                        <div className="form_tit upper">아이디</div>
                        <input />
                        <div className="form_tit upper">이메일</div>
                        <input />
                        <div className=" btnBox">
                            <a href>
                                <span className="loginBtn">찾기</span>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}


export default Pwd;