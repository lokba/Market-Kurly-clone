import React, { useEffect } from 'react';
import Sale from '../component/Category/Sale/index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saleItems } from '../dummy/index';
import { getSaleData } from '../modules/saleCatData';

const SaleContainer = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(({ saleCatData }) => ({
        items: saleCatData.getSaleData,
    }));

    useEffect(() => {
        dispatch(getSaleData(saleItems));
    }, [dispatch]);

    return (
        <>
            { items && <Sale items={items} title="알뜰쇼핑" />}
        </>
    );
};

export default SaleContainer;
