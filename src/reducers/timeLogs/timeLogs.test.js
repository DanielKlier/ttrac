import reducer from './index';

it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        byId      : {},
        allIds    : [],
        byTaskId  : {},
        deletedIds: []
    });
});

it('handles STOP_TASK_PROGRESS', () => {
    const date1 = new Date('2017-03-09T18:00:00');
    const date2 = new Date('2017-03-09T23:00:00');

    expect(reducer({
        byId      : {},
        allIds    : [],
        byTaskId  : {},
        deletedIds: []
    }, {
        type   : 'STOP_TASK_PROGRESS',
        payload: {
            timeLogId: '1', taskId: '2', startDate: date1, stopDate: date2
        }
    })).toEqual({
        byId      : {
            '1': {
                id       : '1',
                taskId   : '2',
                startDate: date1,
                stopDate : date2,
                deletion : {isDeleted: false, timestamp: null}
            }
        },
        byTaskId  : {
            '2': ['1']
        },
        allIds    : ['1'],
        deletedIds: []
    });
});

it('handles DELETE_TIME_LOGS', () => {
    const date1 = new Date('2017-03-09T18:00:00');
    const date2 = new Date('2017-03-09T23:00:00');
    const date3 = new Date('2017-03-09T23:30:00');

    const log1 = {
        id       : '1',
        taskId   : '2',
        startDate: date1,
        stopDate : date2,
        deletion : {isDeleted: false, timestamp: null}
    };

    const log2 = {
        id       : '2',
        taskId   : '1',
        startDate: date1,
        stopDate : date2,
        deletion : {isDeleted: false, timestamp: null}
    };

    const log3 = {
        id       : '3',
        taskId   : '2',
        startDate: date1,
        stopDate : date2,
        deletion : {isDeleted: false, timestamp: null}
    };

    expect(reducer({
        byId      : {
            '1': log1, '2': log2, '3': log3
        },
        allIds    : ['1', '2', '3'],
        byTaskId  : {
            '1': ['2'], '2': ['1', '3']
        },
        deletedIds: []
    }, {
        type   : 'DELETE_TIMELOGS',
        payload: {timeLogIds: ['1', '2'], timestamp: date3}
    })).toEqual({
        byId      : {
            '1': {...log1, deletion: {isDeleted: true, timestamp: date3}},
            '2': {...log2, deletion: {isDeleted: true, timestamp: date3}},
            '3': log3
        },
        allIds    : ['3'],
        byTaskId  : {'2': ['3']},
        deletedIds: ['1', '2']
    });
});
