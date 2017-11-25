import {createSelector} from 'reselect';
import {difference, pick, values} from 'lodash';

const getAllProjectIds     = state => state.app.projects.allIds;
const getDeletedProjectIds = state => state.app.projects.deletedIds;

const getCurrentProjectIds = state => difference(
    getAllProjectIds(state), getDeletedProjectIds(state)
);

const getProjectsById = state => state.app.projects.byId;

export default createSelector(
    [getCurrentProjectIds, getProjectsById],
    (currentProjectIds, projectsById) => values(pick(projectsById, currentProjectIds))
);
