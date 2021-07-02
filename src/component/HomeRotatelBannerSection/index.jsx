import React from 'react';

const HomeRotateBannerSection = ({ rotateImgs }) => {
    return (
        <>
            <section className="main_banner">
                <div id="banner_img1">
                    <img alt="" src={rotateImgs} />
                </div>
            </section>
        </>
    );
};

export default HomeRotateBannerSection;