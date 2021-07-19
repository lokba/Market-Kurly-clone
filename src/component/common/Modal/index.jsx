import React from 'react';
import { ModalContainer, ModalContent } from './styles';

const Modal = () => {
    return (
        <ModalContainer>
            <ModalContent>
                <div className="modal_content">
                    <div className="modal_tit">
                        국산 콩두부
                    </div>
                    <div className="modal_sub">
                        <div className="modal_price">14,000원</div>
                        <div className="ctrl_store">
                            <div className="store_btn">-</div>
                            <div className="store_num">1</div>
                            <div className="store_btn">+</div>
                        </div>
                    </div>
                </div>
                <div className="total_price_content">
                    <div className="total_info">
                        <div className="total_tit">합계</div>
                        <div className="total_sub">
                            <div className="total_price"><strong>1,900</strong>원</div>
                        </div>
                    </div>
                    <div className="total_point">
                        <div className="point_btn">적립</div>
                        <div className="point_txt">구매 시 95원 적립</div>
                    </div>
                </div>
                <div className="modal_btnBox">
                    <div className="modalBtn cancelBtn">취소</div>
                    <div className="modalBtn cartBtn">장바구니 담기</div>
                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;