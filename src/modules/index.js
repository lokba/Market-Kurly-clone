import React from 'react';
import { combineReducers } from '../../node_modules/redux';
import bestCatData from './bestCatData';
import cartCatData from './cartCatData';
import eventCatData from './eventCatData';
import mainCatData from './mainCatData';
import newCatData from './newCatData';
import saleCatData from './saleCatData';


const rootReducer = combineReducers({
    bestCatData,
    eventCatData,
    newCatData,
    saleCatData,
    mainCatData,
    cartCatData,
});



export default rootReducer;