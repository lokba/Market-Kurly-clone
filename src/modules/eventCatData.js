import { createAction, handleActions } from "redux-actions";

const GET_EVENT_DATA = "eventCatData/GET_EVENT_DATA";

export const getEventData = createAction(GET_EVENT_DATA);

const initialState = {
    getEventData: null,
}

const eventCatData = handleActions(
    {
        [GET_EVENT_DATA]: (state, { payload: getEventData }) => ({
            ...state,
            getEventData,
        }),
    },
    initialState,
);


export default eventCatData;