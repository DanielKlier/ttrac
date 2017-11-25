import {DELETE_PROJECT} from './actionTypes';

export default function(id) {
    return {
        type: DELETE_PROJECT,
        payload: {id}
    };
}
