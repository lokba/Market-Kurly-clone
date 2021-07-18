import React from 'react';
import { combineReducers } from '../../node_modules/redux';
import bestCatData from './bestCatData';
import eventCatData from './eventCatData';


const rootReducer = combineReducers({
    bestCatData,
    eventCatData,
});

export default rootReducer;