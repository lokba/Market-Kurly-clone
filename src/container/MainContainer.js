import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Main from '../component/Main/index';
import {
    mainItems1,
    mainItems10,
    mainItems2,
    mainItems3,
    mainItems4,
    mainItems5,
    mainItems6,
    mainItems7,
    mainItems8,
    mainItems9,
    mainRotateImgs,
    mainMdLists,
    mainBannerInfo,
    mainHomeBannerImgs,
} from '../dummy/index';
import { getBannerImgs, getBannerInfo, getMainItems1, getMainItems10, getMainItems2, getMainItems3, getMainItems4, getMainItems5, getMainItems6, getMainItems7, getMainItems8, getMainItems9, getRotateImgs } from '../modules/mainCatData';

const MainContainer = () => {
    const dispatch = useDispatch();
    const {
        items1,
        items2,
        items3,
        items4,
        items5,
        items6,
        items7,
        items8,
        items9,
        items10,
        rotateImgs,
        bannerImgs,
        bannerInfo,
    } = useSelector(({ mainCatData }) => ({
        items1: mainCatData.items1,
        items2: mainCatData.items2,
        items3: mainCatData.items3,
        items4: mainCatData.items4,
        items5: mainCatData.items5,
        items6: mainCatData.items6,
        items7: mainCatData.items7,
        items8: mainCatData.items8,
        items9: mainCatData.items9,
        items10: mainCatData.items10,
        rotateImgs: mainCatData.rotateImgs,
        bannerImgs: mainCatData.bannerImgs,
        bannerInfo: mainCatData.bannerInfo,
    }));

    useEffect(() => {
        dispatch(getMainItems1(mainItems1));
        dispatch(getMainItems2(mainItems2));
        dispatch(getMainItems3(mainItems3));
        dispatch(getMainItems4(mainItems4));
        dispatch(getMainItems5(mainItems5));
        dispatch(getMainItems6(mainItems6));
        dispatch(getMainItems7(mainItems7));
        dispatch(getMainItems8(mainItems8));
        dispatch(getMainItems9(mainItems9));
        dispatch(getMainItems10(mainItems10));
        dispatch(getRotateImgs(mainRotateImgs));
        dispatch(getBannerImgs(mainHomeBannerImgs));
        dispatch(getBannerInfo(mainBannerInfo));
    }, [dispatch])


    return (
        <>
            {
                items1 &&
                items2 &&
                items3 &&
                items4 &&
                items5 &&
                items6 &&
                items7 &&
                items8 &&
                items9 &&
                items10 &&
                rotateImgs &&
                bannerImgs &&
                bannerInfo &&
                <Main
                    items1={items1}
                    items2={items2}
                    items3={items3}
                    items4={items4}
                    items5={items5}
                    items6={items6}
                    items7={items7}
                    items8={items8}
                    items9={items9}
                    items10={items10}
                    rotateImgs={rotateImgs}
                    md_lists={mainMdLists}
                    bannerInfo={bannerInfo}
                    homeBannerImgs={bannerImgs}
                />
            }
        </>
    );
};

export default MainContainer;


/*
1. rotateImges
2. mainBannerInfo
3. mainHomeHannerImgs
*/
