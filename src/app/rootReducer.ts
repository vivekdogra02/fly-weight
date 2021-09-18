import { combineReducers } from "@reduxjs/toolkit";
import reducer from '../features/rocket-launch/rocketLaunchSlice';
const rootReducer = {
    rocketDisplay: reducer,
};

export default rootReducer;