import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { storeCartData } from '../../../modules/cartCatData';
import Modal from '../Modal/index';
import Sticker from '../Sticker/index';
import { GoodListsContentBox } from './styles';

const GoodListsContent = ({ items }) => {

    const dispatch = useDispatch();
    const { cartData } = useSelector(({ cartCatData }) => ({
        cartData: cartCatData.cartData,
    }))


    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const onCancel = () => {
        setModal(!modal);
    }

    const onClickCart = () => {
        const { item_title: title, after_price: price, imgURL } = modalContent;
        let check = false;
        let index = -1;

        if (cartData !== []) {
            cartData.forEach((v, idx) => {
                if (v.title === title) {
                    check = true;
                    index = idx;
                }
            });
        }



        if (check) {
            let number = cartData[index].count;
            let ary = { ...cartData[index], count: number + 1 }

            console.log(ary);
            cartData[index] = ary;
            dispatch(storeCartData(cartData))
        }
        else {
            dispatch(storeCartData(cartData.concat({ title, price, imgURL, count: 1 })));
        }

        // dispatch(storeCartData({ title, price, imgURL, count: 1 }));
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
                                    before_price: `${item.before_price}`,
                                    imgURL: `${item.imgURL}`
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
                        onClickCart={onClickCart}
                    />
                }

            </GoodListsContentBox >
        </>
    );
};

export default GoodListsContent;