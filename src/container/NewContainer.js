import React from 'react';
import New from '../component/Category/New/index';
import { newItems } from '../constants/index';

const NewContainer = () => {
    return (
        <New items={newItems} title="신상품" />
    );
};

export default NewContainer;