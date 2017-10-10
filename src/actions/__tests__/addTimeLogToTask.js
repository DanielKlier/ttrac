import addTimeLogToTask from '../addTimeLogToTask';
import {ADD_TIME_LOG_TO_TASK} from '../actionTypes';

it('creates the action', () => {
    expect(addTimeLogToTask('1', '2')).toEqual({
        type   : ADD_TIME_LOG_TO_TASK,
        payload: {taskId: '1', timeLogId: '2'}
    });
});
