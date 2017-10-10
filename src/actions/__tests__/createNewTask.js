import createNewTask from '../createNewTask';
import {CREATE_NEW_CURRENT_TASK} from '../actionTypes';

it('creates the action', () => {
    expect(createNewTask()).toEqual({
        type: CREATE_NEW_CURRENT_TASK,
        payload: {
            taskId: '1'
        }
    })
});
