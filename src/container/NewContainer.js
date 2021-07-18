import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import New from '../component/Category/New/index';
import { newItems } from '../dummy/index';
import { getNewData } from '../modules/newCatData';

const NewContainer = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(({ newCatData }) => ({
        items: newCatData.getNewData,
    }))

    useEffect(() => {
        dispatch(getNewData(newItems));
    }, [dispatch]);


    return (
        <>
            { items && <New items={items} title="신상품" />}
        </>
    );
};

export default NewContainer;