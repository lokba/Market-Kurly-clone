import { createAction, handleActions } from "redux-actions";
import produce from "../../node_modules/immer";

const STORE_CART_DATA = "cartCatData/STORE_CART_DATA";

export const storeCartData = createAction(STORE_CART_DATA);

const initialState = {
    cartData: [],
}

const cartCatData = handleActions(
    {
        [STORE_CART_DATA]: (state, { payload: cartData }) => ({
            ...state,
            cartData,
        })
    },
    initialState
);

export default cartCatData;
