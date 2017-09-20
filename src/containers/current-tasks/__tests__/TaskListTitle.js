import React from 'react';
import renderer from 'react-test-renderer';
import TaskListTitle from '../TaskListTitle';

test('TaskListTitle renders correctly', () => {
    expect(renderer.create(
        <TaskListTitle/>
    ).toJSON()).toMatchSnapshot();

    expect(renderer.create(
        <TaskListTitle title="My Title"/>
    ).toJSON()).toMatchSnapshot();
});
