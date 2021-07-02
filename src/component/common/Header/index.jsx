import React from 'react';

const Header = () => {
    const gnu_menu_lists = [
        {
            menu_txt: "채소",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "친환경",
                "고구마·감자·당근",
                "시금치·쌈채소·나물",
                "브로콜리·파프리카·양배추",
                "양파·대파·마늘·배추",
                "오이·호박·고추",
                "냉동·이색·간편채소",
                "콩나물·버섯",
            ]
        },
        {
            menu_txt: "과일·견과·쌀",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "친환경",
                "제철과일",
                "국산과일",
                "수입과일",
                "간편과일",
                "냉동·건과일",
                "견과류",
                "쌀·잡곡",
            ]
        },
        {
            menu_txt: "수산·해산·건어물",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "제철수산",
                "생선류",
                "굴비·반건류",
                "오징어·낙지·문어",
                "새우·게·랍스터",
                "해산물·조개류",
                "수산가공품",
                "김·미역·해조류",
                "건어물·다시팩",
            ]
        },
        {
            menu_txt: "정육·계란",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "국내산 소고기",
                "수입산 소고기",
                "돼지고기",
                "계란류",
                "닭·오리고기",
                "양념육·돈까스",
                "양고기",
            ]
        },
        {
            menu_txt: "국·반찬·메인요리",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "국·탕·찌개",
                "밀키트·메인요리",
                "밑반찬",
                "김치·젓갈·장류",
                "두부·어묵·부침개",
                "베이컨·햄·통조림",
            ]
        },
        {
            menu_txt: "샐러드·간편식",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "샐러드·닭가슴살",
                "도시락·밥류",
                "파스타·면류",
                "떡볶이·튀김·순대",
                "피자·핫도그·만두",
                "폭립·떡갈비·안주",
                "죽·스프·카레",
                "선식·시리얼",
            ]
        },
        {
            menu_txt: "면·양념·오일",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "파스타·면류",
                "식초·소스·드레싱",
                "양념·액젓·장류",
                "식용유·참기름·오일",
                "소금·설탕·향신료",
                "밀가루·가루·믹스",
            ]
        },
        {
            menu_txt: "생수·음료·우유·커피",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "생수·탄산수",
                "음료·주스",
                "우유·두유·요거트",
                "커피",
                "차",
            ]
        },
        {
            menu_txt: "간식·과자·떡",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "과자·스낵·쿠키",
                "초콜릿·젤리·캔디",
                "떡·한과",
                "아이스크림",
            ]
        },
        {
            menu_txt: "베이커리·치즈·델리",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "식빵·빵류",
                "잼·버터·스프레드",
                "케이크·파이·디저트",
                "치즈",
                "델리",
                "올리브·피클",
            ]
        },
        {
            menu_txt: "건강식품",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "영양제",
                "유산균",
                "홍삼·인삼·꿀",
                "건강즙·건강음료",
                "건강분말·건강한",
                "다이어트·이너뷰티",
                "유아동",
            ]
        },
        {
            menu_txt: "생활용품·리빙",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "휴지·티슈",
                "여성·위생용품",
                "세제·청소용품",
                "하훼·인테리어소품",
                "의약외품·마스크",
                "생활잡화·문구",
                "캠핑용품",
            ]
        },
        {
            menu_txt: "스킨케어·메이크업",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "스킨·미스트·패드",
                "에센스·엠플·로션",
                "크림·오일",
                "클렌징",
                "마스크팩",
                "선케어",
                "메이크업",
                "맨즈케어",
                "뷰티소품·기기",
            ]
        },
        {
            menu_txt: "헤어·바디·구강",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "구강·면도",
                "샴푸·컨디셔너",
                "트리트먼트·팩",
                "헤어에센스·면모",
                "바디워시·스크럽",
                "바디로션·크림",
                "핸드·립·데오",
                "헤어·바디소품",
            ]
        },
        {
            menu_txt: "주방용품",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "주방소모품·잡화",
                "주방·조리도구",
                "냄비·팬·솥",
                "보관용기·텀블러",
                "식기·테이블웨어",
                "컵·잔·커피도구",
            ]
        },
        {
            menu_txt: "가전제품",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "주방가전",
                "생활가전",
                "계절가전",
                "디지털·PC",
                "대형·설치가전",
            ]
        },
        {
            menu_txt: "베이비·키즈",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "분유·간편·이유식",
                "이유식 재료",
                "간식·음식·음료",
                "건강식품",
                "이유·수유용품",
                "기저귀·물티슈",
                "세제·위생용품",
                "스킨·구강케어",
                "완구·잡화류",
            ]
        },
        {
            menu_txt: "반려동물",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "강아지 간식",
                "강아지 주식",
                "고양이 간식",
                "고양이 주식",
                "반려동물 용품",
                "배변·위생",
                "소용량·샘플",
            ]
        },
        {
            menu_txt: "컬리의 추천",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
            ]
        },

    ];

    return (
        <>
            <header>
                <div id="userMenu">
                    <a href="/">
                        <img alt="" src="/images/icons/delivery.png" />
                    </a>
                    <div id="menu_lists">
                        <div id="register">
                            <a href="/shop/member/join">
                                <li className="register_link">회원가입</li>
                            </a>
                        </div>
                        <div id="login">
                            <a href="/shop/member/login">
                                <li>로그인</li>
                            </a>
                        </div>
                        <div id="info">
                            <li>고객센터</li>
                            <img alt="" src="/images/icons/ico_down.png" />
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
                    <a href="/" id="logo">
                        <img alt="" src="/images/icons/logo_x2.png" />
                    </a>
                </div>
            </header>
            <nav>
                <div id="category">
                    <div className="category_info">
                        <img alt="" id="categoryAll_img" src="/images/icons/ico_all.png" />
                        <li className="category_tit">전체 카테고리</li>
                    </div>
                    <div className="gnb_menu">
                        <ul>
                            {
                                gnu_menu_lists.map(
                                    list => (
                                        <li className="gnb_menu_list">
                                            <div className="inner_menu">
                                                <img alt="" className="i_menu_img" src={list.imgURL} />
                                                <div className="i_menu_txt">{list.menu_txt}</div>
                                            </div>
                                            <ul className="sub_menu">
                                                {
                                                    list.sub_menu.map(menu =>
                                                    (
                                                        <li>{menu}</li>
                                                    )
                                                    )
                                                }
                                            </ul>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
                <a href="/shop/goods/goods_list/new">
                    <li id="new" className="menu">신상품</li>
                </a>
                <a href="/shop/goods/goods_list/best">
                    <li id="best" className="menu">베스트</li>
                </a>
                <a href="/shop/goods/goods_list/sale">
                    <li id="cheap" className="menu">알뜰쇼핑</li>
                </a>
                <a href="/shop/goods/event">
                    <li id="special" className="menu">특가/혜택</li>
                </a>
                <div id="search">
                    <input />
                    <img alt="" src="/images/icons/ico_search.png" />
                </div>
                <div id="location">
                    <img alt="" id="location_img" src="/images/icons/ico_location.svg" />
                    <div className="location_subinfo">
                        <div><span>배송지를 등록</span>하고</div>
                        <div>구매 가능한 상품을 확인하세요!</div>
                        <div className="location_btn_box">
                            <a href="login.html">
                                <div className="location_loginBtn locationBtn">로그인</div>
                            </a>
                            <div className="location_addressBtn locationBtn">
                                <img alt="" src="/images/icons/ico_search_white.png" />
                                <div>주소검색</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/shop/goods/goods_cart" id="cart">
                    <img alt="" id="cart_img" src="/images/icons/ico_cart.svg" />
                </a>
            </nav>
        </>
    );
};

export default Header;