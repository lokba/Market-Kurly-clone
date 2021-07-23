import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cart from '../component/Cart/index';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartData } = useSelector(({ cartCatData }) => ({
        cartData: cartCatData.cartData,
    }))
    return (
        <Cart cartData={cartData} />
    );
};

export default CartContainer;