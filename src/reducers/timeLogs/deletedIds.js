import {DELETE_TIMELOGS} from '../../actions';

function addTimeLogIdsToList(state, action) {
    const {payload}    = action;
    const {timeLogIds} = payload;

    return state.concat(timeLogIds);
}

export default function(state = [], action) {
    switch (action.type) {
        case DELETE_TIMELOGS:
            return addTimeLogIdsToList(state, action);
        default:
            return state;
    }
}
