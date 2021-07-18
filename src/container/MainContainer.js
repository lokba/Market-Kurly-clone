import React from 'react';
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
    mainHomeSectionTitles,
} from '../constants/index';

const MainContainer = () => {

    return (
        <Main
            items1={mainItems1}
            items2={mainItems2}
            items3={mainItems3}
            items4={mainItems4}
            items5={mainItems5}
            items6={mainItems6}
            items7={mainItems7}
            items8={mainItems8}
            items9={mainItems9}
            items10={mainItems10}
            rotateImgs={mainRotateImgs}
            md_lists={mainMdLists}
            bannerInfo={mainBannerInfo}
            homeBannerImgs={mainHomeBannerImgs}
            homeSectionTitles={mainHomeSectionTitles}
        />
    );
};

export default MainContainer;