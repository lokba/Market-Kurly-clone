import React from 'react';
import { combineReducers } from '../../node_modules/redux';
import bestCatData from './bestCatData';


const rootReducer = combineReducers({
    bestCatData,
});


export default rootReducer;