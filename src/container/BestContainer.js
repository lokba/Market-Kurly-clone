import React from 'react';
import Best from '../component/Category/Best/index';
import { bestItems } from '../constants/index';

const BestContainer = () => {
    return (
        <Best items={bestItems} title="베스트" />
    );
};

export default BestContainer;