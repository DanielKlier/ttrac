import {CREATE_NEW_CURRENT_TASK} from '../actions';
import uuid from 'uuid';

export default function() {
    return {
        type   : CREATE_NEW_CURRENT_TASK,
        payload: {
            taskId: uuid()
        }
    };
}
