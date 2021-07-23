import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cart from '../component/Cart/index';
import { decreaseCartNumber, increaseCartNumber } from '../modules/cartCatData';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartData } = useSelector(({ cartCatData }) => ({
        cartData: cartCatData.cartData,
    }));



    const onIncreaseBtn = (index) => {
        dispatch(increaseCartNumber(index));
    }

    const onDecreaseBtn = (index) => {
        if (cartData && cartData[index]["count"] > 1) {
            dispatch(decreaseCartNumber(index));
        }
    }



    return (
        <Cart
            cartData={cartData}
            onIncreaseBtn={onIncreaseBtn}
            onDecreaseBtn={onDecreaseBtn}

        />
    );
};

export default CartContainer;