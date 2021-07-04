import React from 'react';
import Footer from '../common/Footer/index';
import SideMenu from '../common/SideMenu/index';
import HomeMdSection from '../Home/HomeMdSection/index';
import HomeRotateBannerSection from '../Home/HomeRotatelBannerSection/index';
import HomeTxtBannerSection from '../Home/HomeTxtBannerSection/index';
import HomeInstaReviewSection from '../Home/HomeInstaReviewSection/index';
import HomeKurlyRecipeSection from '../Home/HomeKurlyRecipeSection/index';
import HomeSaleSection from '../Home/HomeSaleSection/index';
import HomeBannerSection from '../Home/HomeBannerSection/index';
import HomeFourItems from '../common/HomeFourItems/index';
import { MainBox } from './styles';
import HeaderContainer from '../../container/HeaderContainer';

const Main =
    ({
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
        md_lists,
        bannerInfo,
        homeBannerImgs,
        homeSectionTitles,
    }) => {

        return (
            <MainBox>
                <HeaderContainer />
                <HomeRotateBannerSection rotateImgs={rotateImgs} />
                <SideMenu />
                <HomeFourItems title={homeSectionTitles[0].title} items={items1} />
                <HomeSaleSection title={homeSectionTitles[1].title} items={items2} />
                <HomeFourItems title={homeSectionTitles[2].title} items={items3} />
                <HomeBannerSection imgURL={homeBannerImgs[0]} />
                <HomeMdSection title={homeSectionTitles[3].title} items={items4} lists={md_lists} />
                <HomeTxtBannerSection bannerInfo={bannerInfo} />
                <HomeFourItems title={homeSectionTitles[4].title} items={items5} />
                <HomeFourItems title={homeSectionTitles[5].title} items={items6} />
                <HomeFourItems title={homeSectionTitles[6].title} subTitle={homeSectionTitles[6].subTitle} items={items7} />
                <HomeFourItems title={homeSectionTitles[7].title} subTitle={homeSectionTitles[7].subTitle} items={items8} />
                <HomeKurlyRecipeSection title={homeSectionTitles[8].title} items={items9} />
                <HomeInstaReviewSection title={homeSectionTitles[9].title} items={items10} />
                <HomeBannerSection foot imgURL={homeBannerImgs[1]} />
                <Footer />
            </MainBox>
        );
    }

export default Main;