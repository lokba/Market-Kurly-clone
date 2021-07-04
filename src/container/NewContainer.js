import React from 'react';
import New from '../component/Category/New/index';

const NewContainer = () => {
    const items = [
        {
            imgURL: "/images/goods/special/img1.jpeg",
            item_title: "[상하목장] 유기농 베이비 요구르트 3종",
            rate: "",
            after_price: "3,500원",
            before_price: "",
            item_txt: "우리 아이를 위한 요거트",
        },
        {
            imgURL: "/images/goods/special/img2.jpeg",
            item_title: "글로벌] 나이프 7종",
            rate: "",
            after_price: "73,600원",
            before_price: "",
            item_txt: "요리 대가들의 이유 있는 선택",
        },
        {
            imgURL: "/images/goods/special/img3.jpeg",
            item_title: "친환경 햇 향파 350g",
            rate: "",
            after_price: "1,690원",
            before_price: "",
            item_txt: "남길 걱정 없는 만능 채소",
        },
        {
            imgURL: "/images/goods/special/img4.jpeg",
            item_title: "친환경 브로콜리 1개",
            rate: "",
            after_price: "2,990원",
            before_price: "",
            item_txt: "풍부한 영양인 담긴 초록 꽃송이",
        },
        {
            imgURL: "/images/goods/special/img5.jpeg",
            item_title: "친환경 햇 양파 1kg",
            rate: "24%",
            after_price: "2,272원",
            before_price: "2,990원",
            item_txt: "단단하고 아삭한 필수 채소",
        },
        {
            imgURL: "/images/goods/special/img6.jpeg",
            item_title: "친환경 조각 브로콜리 150g",
            rate: "",
            after_price: "2,490원",
            before_price: "",
            item_txt: "간편하게 즐기는 초록 꽃송이",
        },
        {
            imgURL: "/images/goods/special/img7.jpeg",
            item_title: "Kurly's] 에브리빈 아메리카노 파우치 2종",
            rate: "",
            after_price: "990원",
            before_price: "",
            item_txt: "간편하게 누리는 깊고 부드러운 풍미",
        },
        {
            imgURL: "/images/goods/special/img8.jpeg",
            item_title: "[스텔라엔츄이스] DOG 동결건조 밀믹서 치킨",
            rate: "",
            after_price: "38,000원",
            before_price: "",
            item_txt: "다양하게 활용하는 닭고기 주식",
        },
        {
            imgURL: "/images/goods/special/img9.jpeg",
            item_title: "[모노치킨] 타코야키",
            rate: "",
            after_price: "3,800원",
            before_price: "",
            item_txt: "소스,가쓰오부시까지 알찬 구성",
        },
    ];

    return (
        <New items={items} title="신상품" />
    );
};

export default NewContainer;