import React, { useState } from 'react';
import Modal from '../Modal/index';
import Sticker from '../Sticker/index';
import { GoodListsContentBox } from './styles';

const GoodListsContent = ({ items }) => {

    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const onCancel = () => {
        setModal(!modal);
    }

    return (
        <>
            <GoodListsContentBox>
                {
                    items.map(item =>
                    (
                        <div className="item">
                            <img alt="" className="good" src={item.imgURL} />
                            {item.sticker && <Sticker />}
                            <div className="cart_box" onClick={() => {
                                setModal(!modal);
                                setModalContent({
                                    item_title: `${item.item_title}`,
                                    after_price: `${item.after_price}`,
                                    before_price: `${item.before_prices}`,
                                });
                            }}>
                                <div className="cart" />
                            </div>
                            <div className="item_title">{item.item_title}</div>
                            <div className="discount">
                                {
                                    item.rate && <span className="rate">{item.rate}</span>
                                }
                                <span className="after_price">{item.after_price}</span>
                            </div>
                            {
                                item.before_price && <div className="before_price">{item.before_price}</div>
                            }
                            <div div className="item_txt" > {item.item_txt}</div>
                        </div>

                    )
                    )
                }
                {
                    modal &&
                    <Modal
                        onCancel={onCancel}
                        modalContent={modalContent}
                    />
                }

            </GoodListsContentBox >
        </>
    );
};

export default GoodListsContent;