import React from 'react';
import {CurrentTasks, mapDispatchToProps, mapStateToProps} from '../../current-tasks';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

test('it behaves correctly', () => {

    const handleAddNewTask      = jest.fn();
    const handleTaskTitleChange = jest.fn();
    const handleTaskStopped     = jest.fn();
    const handleTaskStarted     = jest.fn();
    const handleDeleteTask      = jest.fn();

    const tasks = [
        {id: '1', elapsedTime: 2000},
        {id: '2'}
    ];

    const runningTask = {taskId: '1', startDate: Date.parse('2017-03-09 18:00:00')};

    const component = mount(
        <CurrentTasks
            currentTasks={tasks}
            runningTask={runningTask}
            onAddNewTaskClick={handleAddNewTask}
            onTaskTitleChanged={handleTaskTitleChange}
            onStartProgressClicked={handleTaskStarted}
            onStopProgressClicked={handleTaskStopped}
            onDeleteTaskClicked={handleDeleteTask}
        />
    );

    expect(toJSON(component)).toMatchSnapshot();

    component.find('TaskListItem StopProgressButton').simulate('click');
    expect(handleTaskStopped).toHaveBeenCalled();

    component.find('AddNewTaskItem Button').simulate('click');
    expect(handleAddNewTask).toHaveBeenCalled();

    component.find('StartProgressButton').at(0).simulate('click');
    expect(handleTaskStarted).toHaveBeenCalled();

    component.find('DeleteButton').at(0).simulate('click');
    expect(handleDeleteTask).toHaveBeenCalled();

    component.find('TaskListTitle')
        .at(0)
        .find('.title-input')
        .simulate('change', {target: {value: 'hello'}});

    component.find('TaskListTitle').at(0).find('.title-input').simulate('blur');

    expect(handleTaskTitleChange).toHaveBeenCalled();
});

test('mapStateToProps', () => {
    const state = {
        app: {
            runningTask: {taskId: 1, startDate: 0},
            tasks: {
                byId: {
                    1: {id: 1},
                    2: {id: 2, timeLogIds: [1]}
                },
                allIds: [1, 2],
                deletedIds: []
            },
            timeLogs: {
                byId: {
                    1: {id: 1, stopDate: 2000, startDate: 0}
                }
            }
        }
    };

    expect(mapStateToProps(state)).toEqual({
        currentTasks: [
            {
                id: 1, elapsedTime: 0
            },
            {
                id: 2, elapsedTime: 2000, timeLogIds: [1]
            }
        ],
        runningTask: {taskId: 1, startDate: 0}
    })
});

test('mapDispatchToProps', () => {

    const spy = jest.fn();

    const {onAddNewTaskClick} = mapDispatchToProps(spy);
    onAddNewTaskClick();
    expect(spy).toHaveBeenCalled();
    spy.mockReset();

    const {onTaskTitleChanged} = mapDispatchToProps(spy);
    onTaskTitleChanged();
    expect(spy).toHaveBeenCalled();
    spy.mockReset();

    const {onStartProgressClicked} = mapDispatchToProps(spy);
    onStartProgressClicked();
    expect(spy).toHaveBeenCalled();
    spy.mockReset();

    const {onStopProgressClicked} = mapDispatchToProps(spy);
    onStopProgressClicked();
    expect(spy).toHaveBeenCalled();
    spy.mockReset();

    const {onDeleteTaskClicked} = mapDispatchToProps(spy);
    onDeleteTaskClicked();
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
});
