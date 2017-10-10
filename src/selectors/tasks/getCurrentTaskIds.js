// Get tasks which are not deleted
import {difference} from 'lodash';
import {createSelector} from 'reselect';

const getAllTaskIds     = state => state.app.tasks.allIds;
const getDeletedIds     = state => state.app.tasks.deletedIds;
const getCurrentTaskIds = state => difference(getAllTaskIds(state), getDeletedIds(state));

export default createSelector(
    [getCurrentTaskIds],
    currentTaskIds => currentTaskIds
);
