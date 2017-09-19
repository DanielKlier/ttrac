import {DELETE_TIMELOGS} from './actionTypes';

export default function(timeLogIds) {
    return {
        type   : DELETE_TIMELOGS,
        payload: {
            timeLogIds
        }
    };
}
