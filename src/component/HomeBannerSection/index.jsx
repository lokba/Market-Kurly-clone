import React from 'react';


//id="footer_bnr" -> height  : 160px,  없으면 140px
const HomeBannerSection = ({ imgURL }) => {
    return (
        <>
            <section className="main_bnr">
                <a href="/" className="main_bnr_link">
                    <img alt="" src={imgURL} />
                </a>
            </section>
        </>
    );
};

export default HomeBannerSection;