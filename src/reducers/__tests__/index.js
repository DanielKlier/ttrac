import reducer from '../index';

// We don't want to update this test for every reducer we add but we do want to check if all the top
// level props are initialized.
test('it initializes its state', () => {
    expect(Object.keys(reducer(undefined, {}))).toEqual([
        'router',
        'app'
    ]);
});
