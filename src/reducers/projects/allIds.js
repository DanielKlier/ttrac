import {CREATE_NEW_PROJECT} from '../../actions/actionTypes';

function addIdToAllIds(state, payload) {
    const {id} = payload;

    return state.concat(id);
}

export default function(state = [], action) {
    const {type, payload} = action;

    switch (type) {
        case CREATE_NEW_PROJECT:
            return addIdToAllIds(state, payload);
        default:
            return state;
    }
}
