import React from 'react';
import Footer from '../common/Footer/index';
import Header from '../common/Header/index';
import SideMenu from '../common/SideMenu/index';
import ThreeItems from '../common/ThreeItems/index';
import InstaReviewSection from '../InstaReviewSection/index';
import KurlyRecipeSection from '../KurlyRecipeSection/index';
import SaleSection from '../SaleSection/index';
import './default.css';

const Main = () => {
    const items1 = [
        {
            item_title: "MY FIRST 처음 만나는 진짜 식빵",
            rate: "5%",
            after_price: "4,655원",
            before_price: "4,900원",
            imgURL: "/images/goods/how_about_this/bread.jpeg",
            sticker: false,
        },
        {
            item_title: "[그랑도르즈] 까망베르 2종",
            rate: "20%",
            after_price: "13,520원",
            before_price: "16,900원",
            imgURL: "/images/goods/how_about_this/cheese.jpeg",
            sticker: false,
        },
        {
            item_title: "[돈마루] 한돈 앞다리살 2종 (냉장)",
            rate: "",
            after_price: "5,300원",
            before_price: "",
            imgURL: "/images/goods/how_about_this/choco.jpeg",
            sticker: false,
        },
        {
            item_title: "[라메종드아모린] 살레위드 솔티드 버터 캐러멜 2종",
            rate: "",
            after_price: "7,900원",
            before_price: "",
            imgURL: "/images/goods/how_about_this/meat.jpeg",
            sticker: false,
        },
    ];
    const items2 = [
        {
            item_title: "[하림] 버팔로 치킨 봉 스파이시",
            rate: "25%",
            after_price: "8,250원",
            before_price: "11,000원",
            imgURL: "/images/goods/miss_regret_price/chicken.jpeg",
            sticker: false,
        },
        {
            item_title: "[아침엔] 베이글 2종",
            rate: "30%",
            after_price: "4,130원",
            before_price: "5,900원",
            imgURL: "/images/goods/miss_regret_price/bagel.jpeg",
            sticker: false,
        },
        {
            item_title: "[엔쿡] 무항생제 어린이 한우 사골 곰국 ",
            rate: "15%",
            after_price: "13,515원",
            before_price: "15,900원",
            imgURL: "/images/goods/miss_regret_price/sagol.jpeg",
            sticker: false,
        },
        {
            item_title: "[LOTS OF LOVE] 차돌듬뿍 묵은지 볶음밥",
            rate: "20%",
            after_price: "6,240원",
            before_price: "7,800원",
            imgURL: "/images/goods/miss_regret_price/rice.jpeg",
            sticker: false,
        },
    ];

    const items3 = [
        {
            item_title: "미국산 워싱턴 생체리 500g 10개",
            rate: "10%",
            after_price: "13,410원",
            before_price: "14,900원",
            imgURL: "/images/goods/md_recommend/cherry.jpeg",
            sticker: false,
        },
        {
            item_title: "국산 블루베리 100g(특)",
            rate: "",
            after_price: "7,990원",
            before_price: "",
            imgURL: "/images/goods/md_recommend/blueberry.jpeg",
            sticker: false,
        },
        {
            item_title: "신비 복숭아 700g 5~6입 (특)",
            rate: "",
            after_price: "16,900원",
            before_price: "",
            imgURL: "/images/goods/md_recommend/apple.jpeg",
            sticker: false,
        },
        {
            item_title: "실속 성주 참외 1.5kg",
            rate: "15%",
            after_price: "12,665원",
            before_price: "14,900원",
            imgURL: "/images/goods/md_recommend/melon.jpeg",
            sticker: false,
        },
    ];
    const items4 = [
        {
            item_title: "초당 옥수수(알록이) 5입",
            rate: "",
            after_price: "11,300원",
            before_price: "",
            imgURL: "/images/goods/most_hot/corn.jpeg",
            sticker: false,
        },
        {
            item_title: "[소이연남] 태국 소고기 쌀국수",
            rate: "",
            after_price: "7,500원",
            before_price: "",
            imgURL: "/images/goods/most_hot/noodle.jpeg",
            sticker: false,
        },
        {
            item_title: "신비 복숭아 400g(3~5입)",
            rate: "",
            after_price: "9,900원",
            before_price: "",
            imgURL: "/images/goods/most_hot/apple.jpeg",
            sticker: false,
        },
        {
            item_title: "[더플랜] 꿔바로우 찹쌀 탕수육",
            rate: "10%",
            after_price: "6,660원",
            before_price: "7,400원",
            imgURL: "/images/goods/most_hot/meat.jpeg",
            sticker: false,
        },
    ];
    const items5 = [
        {
            item_title: "[제니퍼룸] 제습기 7L JR-DH0001WH",
            rate: "15%",
            after_price: "16,9000원",
            before_price: "199,000원",
            imgURL: "/images/goods/care_summer/air_clean.jpeg",
            sticker: false,
        },
        {
            item_title: "[에비에어] 스마트 휴대용 핸디 선풍기 R5 2종",
            rate: "33%",
            after_price: "9,900원",
            before_price: "14,900원",
            imgURL: "/images/goods/care_summer/handy_fan.jpeg",
            sticker: false,
        },
        {
            item_title: "[생활공작소] 곰팡이 제거제",
            rate: "25%",
            after_price: "4,125원",
            before_price: "5,500원",
            imgURL: "/images/goods/care_summer/mold_clean.jpeg",
            sticker: false,
        },
        {
            item_title: "[르젠] 앱연동 BLDC 리모컨 선풍기 LZEF-DCW20",
            rate: "7%",
            after_price: "64,800원",
            before_price: "69,800원",
            imgURL: "/images/goods/care_summer/fan.jpeg",
            sticker: false,
        },
    ];
    const items6 = [
        {
            item_title: "햇 양파 3kg",
            rate: "18%",
            after_price: "4,490원",
            before_price: "5,490원",
            imgURL: "/images/goods/365_low_price/onion.jpeg",
            sticker: true,
        },
        {
            item_title: "[KF365] 가지 2입",
            rate: "",
            after_price: "1,500원",
            before_price: "",
            imgURL: "/images/goods/365_low_price/eggplant.jpeg",
            sticker: false,
        },
        {
            item_title: "[오뗄블랙라벨] 추억의 비엔나 소x시지 800g",
            rate: "15%",
            after_price: "5,865원",
            before_price: "6,900원",
            imgURL: "/images/goods/365_low_price/sausage.jpeg",
            sticker: false,
        },
        {
            item_title: "[KF365] 플레인 탄산수 2종",
            rate: "",
            after_price: "3,500원",
            before_price: "",
            imgURL: "/images/goods/365_low_price/water.jpeg",
            sticker: false,
        },
    ];
    const items7 = [
        {
            item_title: "[그린몬스터] 헐리우드 48시간",
            rate: "25%",
            after_price: "21,000원",
            before_price: "28,000원",
            imgURL: "/images/goods/diet_manage/hollywood.jpeg",
            sticker: false,
        },
        {
            item_title: "[저스트 그린] 리코타 하비스트 샐러드 285g",
            rate: "",
            after_price: "6,900원",
            before_price: "",
            imgURL: "/images/goods/diet_manage/salad.jpeg",
            sticker: false,
        },
        {
            item_title: "[Better me] 냉동 닭가슴살 4종",
            rate: "",
            after_price: "1,700원",
            before_price: "",
            imgURL: "/images/goods/diet_manage/chicken.jpeg",
            sticker: false,
        },
        {
            item_title: "[심플잇] 오트면 충분해 2종",
            rate: "",
            after_price: "1,500원",
            before_price: "",
            imgURL: "/images/goods/diet_manage/oat.jpeg",
            sticker: false,
        },
    ];
    const items8 = [
        {
            item_title: "해초면 냉채",
            imgURL: "/images/goods/kurly_recipe/noodle.png",
        },
        {
            item_title: "포두부 라자냐",
            imgURL: "/images/goods/kurly_recipe/lasagna.jpeg",
        },
        {
            item_title: "문어 뽈뽀",
            imgURL: "/images/goods/kurly_recipe/octopus.jpeg",
        },
    ];

    const items9 = [
        {
            imgURL: "/images/goods/instagram_review/img1.jpeg"
        },
        {
            imgURL: "/images/goods/instagram_review/img2.jpeg"
        },
        {
            imgURL: "/images/goods/instagram_review/img3.jpeg"
        },
        {
            imgURL: "/images/goods/instagram_review/img4.jpeg"
        },
        {
            imgURL: "/images/goods/instagram_review/img5.jpeg"
        },
        {
            imgURL: "/images/goods/instagram_review/img6.jpeg"
        },
    ];

    const saleItems = [
        {
            item_title: "금주의 과일 · 채소 최대 15% 할인",
            sub_title: "찰토마토부터 골드키위까지",
            imgURL: "/images/goods/special_benefit/tomato.jpeg",
        },
        {
            item_title: "애슐리 인기메뉴 최대 10% 할인",
            sub_title: "치즈볼부터 양념치킨까지",
            imgURL: "/images/goods/special_benefit/cheeseball.jpeg",
        },
        {
            item_title: "제주도니 최대 15% 할인",
            sub_title: "제주양돈농협의 돈육 브랜드",
            imgURL: "/images/goods/special_benefit/meat.jpeg",
        },
    ]

    return (
        <div id="wrap">
            <Header />
            <section className="main_banner">
                <div id="banner_img1">
                    <img src="images/banner/banner2.png" />
                </div>
            </section>

            <SideMenu />
            <ThreeItems title="이 상품 어때요?" items={items1} />
            <SaleSection title="특가/혜택 &gt;" items={saleItems} />
            <ThreeItems title="놓치면 후회할 가격 &gt;" items={items2} />

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

                <ThreeItems title="" items={items3} />
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

            <ThreeItems title="지금 가장 핫한 상품 &gt;" items={items4} />
            <ThreeItems title="컬리, 여름을 부탁해! &gt;" items={items5} />
            <ThreeItems title="365일 최저가 도전 &gt;" subTitle="최저가 도전, 365일 언제나 알뜰하게" items={items6} />
            <ThreeItems title="식단 관리 &gt;" subTitle="실패 없는 식단 관리의 비결" items={items7} />
            <KurlyRecipeSection title="컬리의 레시피 &gt;" items={items8} />
            <InstaReviewSection title="인스타그램 고객 후기" items={items9} />

            <section id="footer_bnr" className="main_bnr">
                <a className="main_bnr_link">
                    <img alt="" src="images/banner/shipping.png" />
                </a>
            </section>

            <Footer />
        </div >
    );
}

export default Main;