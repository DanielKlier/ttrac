import getCurrentTaskIds from './getCurrentTaskIds';
import {pick, values} from 'lodash';
import {createSelector} from 'reselect';

const getTasksById = state => state.app.tasks.byId;

export default createSelector(
    [getCurrentTaskIds, getTasksById],
    (currentTaskIds, tasksById) => values(pick(tasksById, currentTaskIds))
);
