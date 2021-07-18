import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Event from '../component/Category/Event/index';
import { eventItems } from '../dummy/index';
import { getEventData } from '../modules/eventCatData';

const EventContainer = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(({ eventCatData }) => ({
        items: eventCatData.getEventData,
    }));

    useEffect(() => {
        dispatch(getEventData(eventItems));
    }, [dispatch]);

    return (
        <>
            {items && <Event events={items} />}
        </>
    );
};

export default EventContainer;