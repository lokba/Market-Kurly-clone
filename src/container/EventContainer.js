import React from 'react';
import Event from '../component/Category/Event/index';
import { eventItems } from '../constants/index';

const EventContainer = () => {

    return (
        <Event events={eventItems} />
    );
};

export default EventContainer;