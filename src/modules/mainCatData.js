import { createAction, handleActions } from "redux-actions";

const GET_MAIN_ITEMS1 = 'mainCatData/GET_MAIN_ITEMS1';
const GET_MAIN_ITEMS2 = 'mainCatData/GET_MAIN_ITEMS2';
const GET_MAIN_ITEMS3 = 'mainCatData/GET_MAIN_ITEMS3';
const GET_MAIN_ITEMS4 = 'mainCatData/GET_MAIN_ITEMS4';
const GET_MAIN_ITEMS5 = 'mainCatData/GET_MAIN_ITEMS5';
const GET_MAIN_ITEMS6 = 'mainCatData/GET_MAIN_ITEMS6';
const GET_MAIN_ITEMS7 = 'mainCatData/GET_MAIN_ITEMS7';
const GET_MAIN_ITEMS8 = 'mainCatData/GET_MAIN_ITEMS8';
const GET_MAIN_ITEMS9 = 'mainCatData/GET_MAIN_ITEMS9';
const GET_MAIN_ITEMS10 = 'mainCatData/GET_MAIN_ITEMS10';
const GET_ROTATE_IMGS = 'mainCatData/GET_ROTATE_IMGS';
const GET_BANNER_IMGS = 'mainCataData/GET_BANNER_IMGS';
const GET_BANNER_INFO = 'mainCataData/GET_BANNER_INFO';


export const getMainItems1 = createAction(GET_MAIN_ITEMS1);
export const getMainItems2 = createAction(GET_MAIN_ITEMS2);
export const getMainItems3 = createAction(GET_MAIN_ITEMS3);
export const getMainItems4 = createAction(GET_MAIN_ITEMS4);
export const getMainItems5 = createAction(GET_MAIN_ITEMS5);
export const getMainItems6 = createAction(GET_MAIN_ITEMS6);
export const getMainItems7 = createAction(GET_MAIN_ITEMS7);
export const getMainItems8 = createAction(GET_MAIN_ITEMS8);
export const getMainItems9 = createAction(GET_MAIN_ITEMS9);
export const getMainItems10 = createAction(GET_MAIN_ITEMS10);
export const getRotateImgs = createAction(GET_ROTATE_IMGS);
export const getBannerImgs = createAction(GET_BANNER_IMGS);
export const getBannerInfo = createAction(GET_BANNER_INFO);

const initialState = {};

const mainCatData = handleActions(
    {
        [GET_MAIN_ITEMS1]: (state, { payload: items1 }) => ({
            ...state,
            items1,
        }),
        [GET_MAIN_ITEMS2]: (state, { payload: items2 }) => ({
            ...state,
            items2,
        }),
        [GET_MAIN_ITEMS3]: (state, { payload: items3 }) => ({
            ...state,
            items3,
        }),
        [GET_MAIN_ITEMS4]: (state, { payload: items4 }) => ({
            ...state,
            items4,
        }),
        [GET_MAIN_ITEMS5]: (state, { payload: items5 }) => ({
            ...state,
            items5,
        }),
        [GET_MAIN_ITEMS6]: (state, { payload: items6 }) => ({
            ...state,
            items6,
        }),
        [GET_MAIN_ITEMS7]: (state, { payload: items7 }) => ({
            ...state,
            items7,
        }),
        [GET_MAIN_ITEMS8]: (state, { payload: items8 }) => ({
            ...state,
            items8,
        }),
        [GET_MAIN_ITEMS9]: (state, { payload: items9 }) => ({
            ...state,
            items9,
        }),
        [GET_MAIN_ITEMS10]: (state, { payload: items10 }) => ({
            ...state,
            items10,
        }),
        [GET_ROTATE_IMGS]: (state, { payload: rotateImgs }) => ({
            ...state,
            rotateImgs,
        }),
        [GET_BANNER_IMGS]: (state, { payload: bannerImgs }) => ({
            ...state,
            bannerImgs,
        }),
        [GET_BANNER_INFO]: (state, { payload: bannerInfo }) => ({
            ...state,
            bannerInfo,
        }),
    },
    initialState,
);

export default mainCatData;


