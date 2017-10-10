import {combineReducers} from 'redux';
import allIds from './allIds';
import byId from './byId';
import deletedIds from './deletedIds';

export default combineReducers({byId, allIds, deletedIds});
