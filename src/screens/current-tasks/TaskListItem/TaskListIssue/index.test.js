import React from 'react';
import renderer from 'react-test-renderer';
import TaskListIssue from './index';

test('TaskListIssue renders correctly', () => {
    const component = renderer.create(<TaskListIssue issue="PRJ-123"/>);
    const tree      = component.toJSON();

    expect(tree).toMatchSnapshot();
});
