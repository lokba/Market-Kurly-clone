import { createAction, handleActions } from "redux-actions";
import produce from "../../node_modules/immer";

const STORE_CART_DATA = "cartCatData/STORE_CART_DATA";
const INCREASE_CART_NUMBER = "cartCatData/ INCREASE_CART_NUMBER";
const DECREASE_CART_NUMBER = "cartCatData/ DECREASE_CART_NUMBER";
const DELETE_CART_DATA = "cartCatData/DELETE_CART_DATA";

export const storeCartData = createAction(STORE_CART_DATA);
export const increaseCartNumber = createAction(INCREASE_CART_NUMBER);
export const decreaseCartNumber = createAction(DECREASE_CART_NUMBER);
export const deleteCartData = createAction(DELETE_CART_DATA);




const initialState = {
    cartData: [],
}

const cartCatData = handleActions(
    {
        [STORE_CART_DATA]: (state, { payload: cartData }) => ({
            ...state,
            cartData,
        }),
        [INCREASE_CART_NUMBER]: (state, { payload: { index, count } }) =>
            produce(state, draft => {
                draft["cartData"][Number(index)]["count"] += count;
            }),
        [DECREASE_CART_NUMBER]: (state, { payload: index }) =>
            produce(state, draft => {
                draft["cartData"][Number(index)]["count"] -= 1;
            }),
        [DELETE_CART_DATA]: (state, { payload: index }) =>
            produce(state, draft => {
                draft["cartData"] = draft["cartData"].filter((v, idx) => idx !== index);
            }),

    },
    initialState
);

export default cartCatData;
