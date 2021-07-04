import React from 'react';
import Event from '../component/Category/Event/index';

const EventContainer = () => {
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
    ];


    return (
        <Event events={events} />
    );
};

export default EventContainer;