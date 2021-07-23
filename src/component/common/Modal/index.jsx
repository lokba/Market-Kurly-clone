import React, { useState } from 'react';
import { ModalContainer, ModalContent } from './styles';

const Modal =
    ({
        onCancel,
        modalContent,
        onClickCart,
    }) => {
        const { item_title, after_price, before_price } = modalContent;
        const pointNum = Math.floor(Number(after_price.split("").filter(v => v !== "원").filter(v => v !== ",").join("")) * 0.05);

        const [count, setCount] = useState(1);

        const onIncrease = () => {
            setCount(count + 1);
        }
        const onDecrease = () => {
            if (count > 1) {
                setCount(count - 1);
            }
        }

        return (
            <ModalContainer>
                <ModalContent>
                    <div className="modal_content">
                        <div className="modal_tit">
                            {item_title}
                        </div>
                        <div className="modal_sub">
                            <div className="modal_price">
                                <div className="modal_after_price">{after_price}</div>
                                <div className="modal_before_price">{before_price}</div>
                            </div>

                            <div className="ctrl_store">
                                <div className="store_btn" onClick={onDecrease}>-</div>
                                <div className="store_num">{count}</div>
                                <div className="store_btn" onClick={onIncrease}>+</div>
                            </div>
                        </div>
                    </div>
                    <div className="total_price_content">
                        <div className="total_info">
                            <div className="total_tit">합계</div>
                            <div className="total_sub">
                                <div className="total_price"><strong>{after_price}</strong></div>
                            </div>
                        </div>
                        <div className="total_point">
                            <div className="point_btn">적립</div>
                            <div className="point_txt">구매 시 {pointNum}원 적립</div>
                        </div>
                    </div>
                    <div className="modal_btnBox">
                        <div className="modalBtn cancelBtn" onClick={onCancel}>취소</div>
                        <div className="modalBtn cartBtn" onClick={() => { onClickCart(); onCancel(); }}>장바구니 담기</div>
                    </div>
                </ModalContent>
            </ModalContainer>
        );
    };

export default Modal;