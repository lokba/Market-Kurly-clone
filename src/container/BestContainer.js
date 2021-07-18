import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Best from '../component/Category/Best/index';
import { bestItems } from '../dummy/index';
import { getBestData } from '../modules/bestCatData';

const BestContainer = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(({ bestCatData }) => ({
        items: bestCatData.getBestData,
    }));

    useEffect(() => {
        dispatch(getBestData(bestItems));
    }, [dispatch]);

    return (
        <>
            { items && < Best items={items} title="베스트" />}
        </>
    );
};

export default BestContainer;