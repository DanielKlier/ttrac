import {CREATE_NEW_PROJECT, SET_PROJECT_TITLE} from '../../actions/actionTypes';

function createNewProject(state, payload) {
    const {id, title, code, timestamp} = payload;

    return {
        ...state,
        [id]: {id, title, code, timestamp}
    };
}

function setProjectTitle(state, payload) {
    const {id, title} = payload;

    const project = state[id];

    if (project) {

        return {
            ...state,
            [id]: {
                ...project, title
            }
        };
    }
    else {
        return state;
    }
}

export default function(state = {}, action) {
    const {type, payload} = action;

    switch (type) {
        case CREATE_NEW_PROJECT:
            return createNewProject(state, payload);
        case SET_PROJECT_TITLE:
            return setProjectTitle(state, payload);
        default:
            return state;
    }
}
