import React from 'react';

const HomeTxtBannerSection = ({ bannerInfo }) => {
    return (
        <>
            <section className="t4_bnr">
                <div className="t4_bnr_content">
                    <div className="t4_bnr_txt1">{bannerInfo[0]}</div>
                    <div className="t4_bnr_txt2">{bannerInfo[1]}</div>
                </div>
            </section>
        </>
    );
};

export default HomeTxtBannerSection;