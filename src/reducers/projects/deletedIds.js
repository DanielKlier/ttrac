import {DELETE_PROJECT} from '../../actions/actionTypes';

function addIdToDeletedIds(state, payload) {
    const {id} = payload;

    return state.concat(id);
}

export default function(state = [], action) {
    const {type, payload} = action;

    switch (type) {
        case DELETE_PROJECT:
            return addIdToDeletedIds(state, payload);
        default:
            return state;
    }
}
