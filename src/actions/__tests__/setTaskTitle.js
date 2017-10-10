import setTaskTitle from '../setTaskTitle';
import {SET_TASK_TITLE} from '../actionTypes';

it('returns the action', () => {
    expect(setTaskTitle('1', 'New title')).toEqual({
        type   : SET_TASK_TITLE,
        payload: {taskId: '1', title: 'New title'}
    });
});
