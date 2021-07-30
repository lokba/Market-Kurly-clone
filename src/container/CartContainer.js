import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cart from '../component/Cart/index';
import { decreaseCartNumber, deleteCartData, increaseCartNumber } from '../modules/cartCatData';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartData } = useSelector(({ cartCatData }) => ({
        cartData: cartCatData.cartData,
    }));



    const onIncreaseBtn = (index, count) => {
        dispatch(increaseCartNumber({ index, count }));

    }

    const onDecreaseBtn = (index) => {
        if (cartData && cartData[index]["count"] > 1) {
            dispatch(decreaseCartNumber(index));

        }
    }

    const onDeleteBtn = (index) => {
        dispatch(deleteCartData(index));
    }

    return (
        <Cart
            cartData={cartData}
            onIncreaseBtn={onIncreaseBtn}
            onDecreaseBtn={onDecreaseBtn}
            onDeleteBtn={onDeleteBtn}

        />
    );
};

export default CartContainer;