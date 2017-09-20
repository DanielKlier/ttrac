import {combineReducers} from 'redux';
import allIds from './allIds';
import byId from './byId';
import byTaskId from './byTaskId';

export default combineReducers({byId, byTaskId, allIds});
