import React from 'react';
import { HomeTxtBannerBox } from './styles';

const HomeTxtBannerSection = ({ bannerInfo }) => {
    return (
        <>
            <HomeTxtBannerBox>
                <div className="bnr_content">
                    <div className="bnr_txt1">{bannerInfo[0]}</div>
                    <div className="bnr_txt2">{bannerInfo[1]}</div>
                </div>
            </HomeTxtBannerBox>
        </>
    );
};

export default HomeTxtBannerSection;