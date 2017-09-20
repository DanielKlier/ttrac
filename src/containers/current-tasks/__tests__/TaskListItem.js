import React from 'react';
import renderer from 'react-test-renderer';
import TaskListItem from '../TaskListItem';

Date.now = jest.fn(() => new Date('2017-03-09T19:33:00'));

test('TaskListItem renders correctly', () => {
    let component = renderer.create(
        <TaskListItem elapsedTime={3600000} jiraIssue="PRJ-123"
                      title="My Task"/>
    );
    let tree      = component.toJSON();

    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <TaskListItem elapsedTime={3600000} jiraIssue="PRJ-123" title="My Task"
                      taskIsRunning={true}
                      runningTask={{
                          startDate: new Date('2017-03-09T18:00:00')
                      }}/>
    );
    tree      = component.toJSON();

    expect(tree).toMatchSnapshot();
});
