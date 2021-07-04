import React from 'react';
import Best from '../component/Category/Best/index';

const BestContainer = () => {
    const items = [
        {
            imgURL: "/images/goods/best/img1.jpeg",
            item_title: "[남햔푸드또띠아] 간편 간식 브리또 10종",
            rate: "",
            after_price: "2,900원",
            before_price: "",
            item_txt: "가볍고 든든한 멕시칸 푸드",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img2.jpeg",
            item_title: "[Kurly's] 콩두부 300g ",
            rate: "15%",
            after_price: "1,615원",
            before_price: "1,900원",
            item_txt: "1등급 국산콩의 진한 고소함",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img3.jpeg",
            item_title: "[KF365] DOLE 실속 바나나 1.1kg(필리핀) ",
            rate: "",
            after_price: "2,690원",
            before_price: "",
            item_txt: "믿고 먹을 수 있는 상품을 합리적인 가격에, KF365",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img4.jpeg",
            item_title: "[하림] 냉장 닭가슴살 4종",
            rate: "",
            after_price: "1,700원",
            before_price: "",
            item_txt: "간편하게 꺼내먹는 냉장 닭가슴살!",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img5.jpeg",
            item_title: "[커피빈] 헤이즐넛 라떼 파우치",
            rate: "",
            after_price: "1,400원",
            before_price: "",
            item_txt: "커피빈 라떼를 어디서나 간편하게",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img6.jpeg",
            item_title: "[연세우유 X 마켓컬리] 전용목장우유",
            rate: "",
            after_price: "1,850원",
            before_price: "",
            item_txt: "가격,퀼리티 모두 만족스러운 1A등급 우유",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img7.jpeg",
            item_title: "[KF365] 아보카도 1개",
            rate: "10%",
            after_price: "1,890원",
            before_price: "2,100원",
            item_txt: "부드럽고 상큼한 과육,숲속의 버터(1개)",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img8.jpeg",
            item_title: "[Kurly's] 동물복지 우유 900ml",
            rate: "",
            after_price: "2,950원",
            before_price: "",
            item_txt: "좋은 우유의 기준을 찾아 설계한",
            sticker: false,
        },
        {
            imgURL: "/images/goods/best/img9.jpeg",
            item_title: "[푸드렐라] 통통살 가라아게",
            rate: "48%",
            after_price: "2,496원",
            before_price: "4,800원",
            item_txt: "육즙이 가득한 풍성한 맛",
            sticker: false,
        },
    ];


    return (
        <Best items={items} title="베스트" />
    );
};

export default BestContainer;