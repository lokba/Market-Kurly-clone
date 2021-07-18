import React from 'react';
import { combineReducers } from '../../node_modules/redux';
import bestCatData from './bestCatData';
import eventCatData from './eventCatData';
import newCatData from './newCatData';


const rootReducer = combineReducers({
    bestCatData,
    eventCatData,
    newCatData,
});


export default rootReducer;