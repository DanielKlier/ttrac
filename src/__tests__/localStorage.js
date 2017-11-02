import {loadState, saveState} from '../localStorage';

beforeEach(() => {
    localStorage.clear();
});

test('loadState returns undefined when state is empty', () => {
    expect(loadState()).toBeUndefined();
});

test('loadState loads an existing state', () => {
    const state = {
        hello: 'world'
    };

    localStorage.setItem('state', JSON.stringify(state));
    expect(loadState()).toEqual(state);
});

test('loadState returns undefined if localStorage is corrupt', () => {
    localStorage.setItem('state', 'I am error!');

    expect(loadState()).toEqual(undefined);
});

test('saveState writes an object to local storage', () => {
    const state = {
        hello: 'world'
    };

    saveState(state);

    expect(JSON.parse(localStorage.getItem('state'))).toEqual(state);
});

test('saveState ignores errors and invalid input', () => {

    // Circular structures will cause JSON.stringify to throw an errors
    const circular = {};
    circular.a = {b: circular};

    saveState(circular);

    expect(localStorage.getItem('state')).toBeNull();
});
