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
    }) => {
        return (
            <MainBox>
                <HeaderContainer home />
                <HomeRotateBannerSection rotateImgs={rotateImgs} />
                <SideMenu />
                <HomeFourItems info={items1[0]} items={items1[1]} count={0} />
                <HomeSaleSection info={items2[0]} items={items2[1]} />
                <HomeFourItems info={items3[0]} items={items3[1]} count={1} />
                <HomeBannerSection imgURL={homeBannerImgs[0]} />
                <HomeMdSection info={items4[0]} items={items4[1]} lists={md_lists} count={2} />
                <HomeTxtBannerSection bannerInfo={bannerInfo} />
                <HomeFourItems info={items5[0]} items={items5[1]} count={3} />
                <HomeFourItems info={items6[0]} items={items6[1]} count={4} />
                <HomeFourItems info={items7[0]} items={items7[1]} count={5} />
                <HomeFourItems info={items8[0]} items={items8[1]} count={6} />
                <HomeKurlyRecipeSection info={items9[0]} items={items9[1]} />
                <HomeInstaReviewSection info={items10[0]} items={items10[1]} />
                <HomeBannerSection foot imgURL={homeBannerImgs[1]} />
                <Footer />
            </MainBox>
        );
    }

export default Main;