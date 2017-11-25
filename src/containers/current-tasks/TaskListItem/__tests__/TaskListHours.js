import React from 'react';
import renderer from 'react-test-renderer';
import TaskListHours from '../TaskListHours';

test('TaskListHours renders correctly', () => {
    const component = renderer.create(<TaskListHours/>);
    const tree      = component.toJSON();

    expect(tree).toMatchSnapshot();
});
