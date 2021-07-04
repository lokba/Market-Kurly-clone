import React from 'react';
import { RotateBannerBox } from './styles';

const HomeRotateBannerSection = ({ rotateImgs }) => {
    return (
        <RotateBannerBox>
            <div id="banner_img">
                <img alt="" src={rotateImgs} />
            </div>
        </RotateBannerBox >
    );
};

export default HomeRotateBannerSection;