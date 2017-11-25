import {CREATE_NEW_PROJECT} from './actionTypes';
import uuid from 'uuid';

export default function(data) {
    return {
        type: CREATE_NEW_PROJECT,
        payload: {
            ...data,
            id: uuid(),
            timestamp: Date.now()
        }
    };
}
