import React from 'react';
import Footer from '../../common/Footer/index';
import GoodListsContent from '../../common/GoodListsContent/index';
import GoodListsHeader from '../../common/GoodListsHeader/index';
import Header from '../../common/Header/index';
import Pagination from '../../common/Pagination/index';
import SideMenu from '../../common/SideMenu/index';
import { SaleBox } from './styles';

const Sale = () => {
    const items = [
        {
            imgURL: "/images/goods/cheap/img1.jpeg",
            item_title: "[라운드랩] 1025 독도 아이스크림 30ml ",
            rate: "80%",
            after_price: "7,000원",
            before_price: "35,000원",
            item_txt: "산뜻 촉촉하게 관리하는 눈가 피부",
        },
        {
            imgURL: "/images/goods/cheap/img2.jpeg",
            item_title: "[에이토솔루션] 비피도락 프리바이오틱스 (30일) ",
            rate: "70%",
            after_price: "6,600원",
            before_price: "22,000원",
            item_txt: "장내 유익균 증식에 도움을 주는",
        },
        {
            imgURL: "/images/goods/cheap/img3.jpeg",
            item_title: "[배드스킨] 콜라겐 밤 하이리프팅 크림 ",
            rate: "65%",
            after_price: "9,800원",
            before_price: "28,000원",
            item_txt: "고함량 콜라겐으로 탄력과 수분 충전",
        },
        {
            imgURL: "/images/goods/cheap/img4.png",
            item_title: "[에어퀸] 생리대 4종",
            rate: "65%",
            after_price: "3,920원",
            before_price: "11,200원",
            item_txt: "지금껏 경험해보지 못한 통기성",
        },
        {
            imgURL: "/images/goods/cheap/img5.jpeg",
            item_title: "[간만세] 발효 건강화 세트",
            rate: "65%",
            after_price: "17,500원",
            before_price: "50,000원",
            item_txt: "밀크씨슬 추출물을 함유한",
        },
        {
            imgURL: "/images/goods/cheap/img6.jpeg",
            item_title: "[아토엔오투] 바른 손소독제 2종",
            rate: "64%",
            after_price: "6,980원",
            before_price: "19,800원",
            item_txt: "언제 어디서나 즐기는 손 위생",
        },
        {
            imgURL: "/images/goods/cheap/img7.jpeg",
            item_title: "[네오랩] 릴렉스케어 (15일)",
            rate: "60%",
            after_price: "9,600원",
            before_price: "24,000원",
            item_txt: "편안한 하루를 위한 한 포",
        },
        {
            imgURL: "/images/goods/cheap/img8.jpeg",
            item_title: "100% 미국 응모랑시 NFC 타트체리주스",
            rate: "60%",
            after_price: "15,000원",
            before_price: "37,500원",
            item_txt: "미국 몽모랑시 품종으로 새큼하게 스며드는 붉은 빛 영양!",
        },
        {
            imgURL: "/images/goods/cheap/img9.jpeg",
            item_title: "[소버스] 장건강:신바이오틱스",
            rate: "60%",
            after_price: "20,000원",
            before_price: "50,000원",
            item_txt: "보장균수 100억 CFU의 유산균",
        },
    ]
    return (
        <SaleBox>
            <Header />
            <SideMenu />
            <section className="main_bnr">
                <a className="main_bnr_link">
                    <img alt="" src="/images/goods/cheap/banner.png" />
                </a>
            </section>
            <section className="content">
                <GoodListsHeader title="알뜰쇼핑" />
                <GoodListsContent items={items} />
                <Pagination />
            </section>
            <Footer />
        </SaleBox>

    );
}


export default Sale;