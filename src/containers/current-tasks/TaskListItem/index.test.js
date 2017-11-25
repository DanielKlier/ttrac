import React from 'react';
import TaskListItem from './index';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

Date.now = jest.fn(() => new Date('2017-03-09T19:33:00'));

test('TaskListItem renders correctly', () => {
    let component = mount(
        <TaskListItem elapsedTime={3600000} jiraIssue="PRJ-123"
                      title="My Task"/>
    );
    let tree      = toJSON(component);

    expect(tree).toMatchSnapshot();

    component = mount(
        <TaskListItem elapsedTime={3600000} jiraIssue="PRJ-123" title="My Task"
                      taskIsRunning={true}
                      runningTask={{
                          startDate: new Date('2017-03-09T18:00:00')
                      }}/>
    );
    tree      = toJSON(component);

    expect(tree).toMatchSnapshot();
});

test('TaskListItem calls the handler when the delete button is clicked', () => {

    const handler   = jest.fn();
    const component = mount(<TaskListItem onDeleteTaskClicked={handler}/>);

    component.find('DeleteButton').simulate('click');

    expect(handler).toHaveBeenCalled();
});
