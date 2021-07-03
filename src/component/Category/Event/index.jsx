import React from 'react';
import Footer from '../../common/Footer/index';
import Header from '../../common/Header/index';
import { CheapBox } from './styles';

const Event = () => {
    const events = [
        {
            imgURL: "/images/banner/special_banner1.png",
        },
        {
            imgURL: "/images/banner/special_banner2.png",
        },
        {
            imgURL: "/images/banner/special_banner3.png",
        },
        {
            imgURL: "/images/banner/special_banner4.png",
        },
        {
            imgURL: "/images/banner/special_banner5.png",
        },
        {
            imgURL: "/images/banner/special_banner6.png",
        },
        {
            imgURL: "/images/banner/special_banner7.png",
        },
        {
            imgURL: "/images/banner/special_banner8.png",
        },
        {
            imgURL: "/images/banner/special_banner9.png",
        },
        {
            imgURL: "/images/banner/special_banner10.png",
        },
    ]
    return (
        <CheapBox>
            <Header />
            <section className="bnr_lists">
                <ul className="lists">
                    {
                        events.map(event => (
                            <li className="list">
                                <a href="/shop/goods/event">
                                    <img alt="" src={event.imgURL} />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <Footer />
        </CheapBox>

    );
}

export default Event;