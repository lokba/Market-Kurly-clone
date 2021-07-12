import React from 'react';
import HeaderContainer from '../../container/HeaderContainer';
import Footer from '../common/Footer/index';
import SideMenu from '../common/SideMenu/index';
import { FindBox } from './styles';


const Find = ({ param }) => {
    return (
        <FindBox>
            <HeaderContainer />
            <SideMenu find />
            <section className="findForm">
                <div className="find_tit">
                    {param === "find_id" ? "아이디 찾기" : "비밀번호 찾기"}
                </div>
                <div className="form_box">
                    <form className="write_form">
                        <div className="form_tit">이름</div>
                        <input placeholder="고객님의 이름을 입력해주세요" />
                        {
                            param === "find_pwd" &&
                            (
                                <>
                                    <div className="form_tit upper">아이디</div>
                                    <input placeholder="고객님의 아이디를 입력해주세요" />
                                </>
                            )
                        }
                        <div className="form_tit upper">이메일</div>
                        <input placeholder="가입 시 등록하신 이메일 주소를 입력해주세요" />
                        <div className=" btnBox">
                            <a href>
                                <span className="loginBtn">
                                    {param === "find_id" ? "확인" : "찾기"}
                                </span>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </FindBox>
    );
}


export default Find;