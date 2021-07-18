import { createAction, handleActions } from "redux-actions";

const GET_BEST_DATA = "bestCatData/GET_BEST_DATA";

export const getBestData = createAction(GET_BEST_DATA);


const initialState = {
    getBestData: null,
}

const bestCatData = handleActions(
    {
        [GET_BEST_DATA]: (state, { payload: getBestData }) => ({
            ...state,
            getBestData,
        }),
    },
    initialState,
);


export default bestCatData