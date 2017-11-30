import React from 'react';
import renderer from 'react-test-renderer';
import TaskListTitle from '../TaskListTitle';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

test('TaskListTitle renders correctly', () => {
    expect(renderer.create(
        <TaskListTitle/>
    ).toJSON()).toMatchSnapshot();

    expect(renderer.create(
        <TaskListTitle title="My Title"/>
    ).toJSON()).toMatchSnapshot();
});

test('TaskListTitle behaves correctly', () => {
    const onTextChanged = jest.fn(() => {
    });

    const tree = mount(<TaskListTitle onTextChanged={onTextChanged}/>);

    // Clicking inside the title will hide the title and open the edit menu
    tree.find('.title').simulate('click');
    expect(toJSON(tree)).toMatchSnapshot();

    // Input of text and then blur should trigger a change event
    tree.find('.title-input').simulate('change', {target: {value: 'hello'}});

    // Clicking outside of the input will cause it lose focus and hide it again
    tree.find('.title-input').simulate('blur');
    expect(toJSON(tree)).toMatchSnapshot();
    expect(onTextChanged).toBeCalledWith('hello');
});
