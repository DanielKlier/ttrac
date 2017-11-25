import {combineReducers} from 'redux';
import byId from './byId';
import allIds from './allIds';
import deletedIds from './deletedIds';

export default combineReducers({
    byId, allIds, deletedIds
});
