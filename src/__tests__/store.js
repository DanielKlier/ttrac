import store from '../store';

test('it creates a redux store', () => {
    expect(store).toBeDefined();
});

test('it writes the state to localStorage', () => {
    localStorage.clear();

    store.dispatch({type: 'CREATE_NEW_CURRENT_TASK', payload: {}});

    expect(localStorage.getItem('state')).toBeDefined();

    localStorage.clear();
});
