import React from 'react';
import { HomeBannerBox } from './styles';


//id="footer_bnr" -> height  : 160px,  없으면 140px
const HomeBannerSection = ({ imgURL }) => {
    return (
        <>
            <HomeBannerBox>
                <a href="/" className="main_bnr_link">
                    <img alt="" src={imgURL} />
                </a>
            </HomeBannerBox>
        </>
    );
};

export default HomeBannerSection;