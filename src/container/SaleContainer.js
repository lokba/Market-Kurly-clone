import React from 'react';
import Sale from '../component/Category/Sale/index';
import { saleItems } from '../constants/index';

const SaleContainer = () => {
    return (
        <Sale items={saleItems} title="알뜰쇼핑" />
    );
};

export default SaleContainer;