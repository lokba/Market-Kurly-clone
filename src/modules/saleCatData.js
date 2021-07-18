import { createAction, handleActions } from "redux-actions";

const GET_SALE_DATA = "saleCatData/GET_SALE_DATA";

export const getSaleData = createAction(GET_SALE_DATA);

const initialState = {
    getSaleData: null,
};

const saleCatData = handleActions(
    {
        [GET_SALE_DATA]: (state, { payload: getSaleData }) => ({
            ...state,
            getSaleData,
        }),
    },
    initialState,
);

export default saleCatData;




