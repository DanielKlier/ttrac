import * as React from 'react';
import AddNewTaskItem from '../AddNewTaskItem';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

test('AddNewTaskItem renders correctly', () => {
    const onClick   = jest.fn();
    const component = mount(<AddNewTaskItem onClick={onClick}/>);
    const tree      = toJSON(component);

    expect(tree).toMatchSnapshot();

    component.find('Button').simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
});
