import React from 'react';
import { combineReducers } from '../../node_modules/redux';
import bestCatData from './bestCatData';
import eventCatData from './eventCatData';
import newCatData from './newCatData';
import saleCatData from './saleCatData';


const rootReducer = combineReducers({
    bestCatData,
    eventCatData,
    newCatData,
    saleCatData,
});


export default rootReducer;