import {combineReducers} from 'redux';
import allIds from './allIds';
import byId from './byId';
import byTaskId from './byTaskId';
import deletedIds from './deletedIds';

export default combineReducers({byId, byTaskId, allIds, deletedIds});
