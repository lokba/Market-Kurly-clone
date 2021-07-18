import { createAction, handleActions } from "redux-actions";

const GET_NEW_DATA = "newCatData/GET_NEW_DATA";

export const getNewData = createAction(GET_NEW_DATA);

const initialState = {
    getNewData: null,
};

const newCatData = handleActions(
    {
        [GET_NEW_DATA]: (state, { payload: getNewData }) => ({
            ...state,
            getNewData,
        }),
    },
    initialState
);

export default newCatData;




