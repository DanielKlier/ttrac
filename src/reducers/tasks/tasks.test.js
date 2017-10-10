import reducer from './index';
import {DELETE_TASK} from '../../actions/actionTypes';

it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        byId      : {},
        allIds    : [],
        deletedIds: []
    });
});

it('handles CREATE_NEW_CURRENT_TASK', () => {
    expect(reducer({
        byId      : {},
        allIds    : [],
        deletedIds: []
    }, {
        type   : 'CREATE_NEW_CURRENT_TASK',
        payload: {taskId: '1'}
    })).toEqual({
        byId      : {
            '1': {id: '1'}
        },
        allIds    : ['1'],
        deletedIds: []
    });
});

it('handles DELETE_TASK', () => {
    const initialState = {
        byId      : {
            '1': {id: '1'},
            '2': {id: '2'}
        },
        allIds    : ['1', '2'],
        deletedIds: []
    };

    expect(reducer(initialState, {
        type   : 'DELETE_TASK',
        payload: {taskId: '1'}
    })).toEqual({
        ...initialState,
        deletedIds: ['1']
    });

    expect(reducer({
        ...initialState, deletedIds: ['1']
    }, {
        type   : 'DELETE_TASK',
        payload: {taskId: '1'}
    })).toEqual({
        ...initialState, deletedIds: ['1']
    });
});

it('handles SET_TASK_TITLE', () => {
    const initialState = {
        byId      : {
            '1': {id: '1', title: 'Initial Title'}
        },
        allIds    : ['1'],
        deletedIds: []
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
        byId      : {
            '1': {id: '1', title: 'Title123'}
        },
        allIds    : ['1'],
        deletedIds: []
    });
});

it('handles ADD_TIME_LOG_TO_TASK', () => {
    const initialState = {
        byId      : {
            '1': {id: '1', timeLogIds: []}
        },
        allIds    : ['1'],
        deletedIds: []
    };

    expect(reducer(initialState, {
        type   : 'ADD_TIME_LOG_TO_TASK',
        payload: {taskId: '1', timeLogId: '1'}
    })).toEqual({
        ...initialState, byId: {
            '1': {id: '1', timeLogIds: ['1']}
        }
    });
});
