import {combineReducers} from 'redux'

import counter from "./reducers/counter";
import counter3 from "./reducers/counter3";

export default combineReducers({
    counter, counter3
})