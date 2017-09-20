import runningTask from './index';

const now = new Date('2017-03-09 18:00:00');

it('returns the initial state', () => {
    expect(runningTask(undefined, {})).toEqual(null);
});

it('handles START_TASK_PROGRESS', () => {
    expect(
        runningTask(null, {
                type   : 'START_TASK_PROGRESS',
                payload: {taskId: '1', startDate: now}
            }
        )
    ).toEqual({
        taskId   : '1',
        startDate: now
    });
});

it('handles STOP_TASK_PROGRESS', () => {
    const action = {
        type   : 'STOP_TASK_PROGRESS',
        payload: {}
    };

    expect(runningTask(null, action)).toEqual(null);

    expect(runningTask(
        {
            taskId   : '1',
            startDate: now
        },
        action
    )).toEqual(null);
});
