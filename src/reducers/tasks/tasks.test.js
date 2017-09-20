import reducer from './index';

it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        byId  : {},
        allIds: []
    });
});

it('handles CREATE_NEW_CURRENT_TASK', () => {
    expect(reducer({
        byId  : {},
        allIds: []
    }, {
        type   : 'CREATE_NEW_CURRENT_TASK',
        payload: {taskId: '1'}
    })).toEqual({
        byId  : {
            '1': {id: '1'}
        },
        allIds: ['1']
    });
});

it('handles DELETE_TASK', () => {
    expect(reducer({
        byId  : {
            '1': {id: '1'},
            '2': {id: '2'}
        },
        allIds: ['1', '2']
    }, {
        type   : 'DELETE_TASK',
        payload: {taskId: '1'}
    })).toEqual({
        byId  : {
            '2': {id: '2'}
        },
        allIds: ['2']
    });
});

it('handles SET_TASK_TITLE', () => {
    const initialState = {
        byId  : {
            '1': {id: '1', title: 'Initial Title'}
        },
        allIds: ['1']
    };

    // It does nothing if the task does not exist
    expect(reducer(initialState, {
        type   : 'SET_TASK_TITLE',
        payload: {taskId: 'do not exist', title: 'Title123'}
    })).toEqual(initialState);

    // It sets the title
    expect(reducer(initialState, {
        type   : 'SET_TASK_TITLE',
        payload: {taskId: '1', title: 'Title123'}
    })).toEqual({
        byId  : {
            '1': {id: '1', title: 'Title123'}
        },
        allIds: ['1']
    });
});
