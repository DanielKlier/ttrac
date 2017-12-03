import React from 'react';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ColorButton from '../index';

const color = '#ffaaff';

test('renders a color button normally', () => {
    const component = mount(<ColorButton color={color}/>);

    expect(toJSON(component)).toMatchSnapshot();
});

test('it calls the click handler', () => {
    const handleClick = jest.fn();

    const component = mount(<ColorButton color={color} onClick={handleClick}/>);

    component.find('Button').simulate('click');

    expect(handleClick).toBeCalledWith(color);
});

test('cannot be clicked when disabled', () => {
    const handleClick = jest.fn();

    const component = mount(<ColorButton color={color} onClick={handleClick} disabled={true}/>);

    component.find('Button').simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(0);
});

test('renders its selected state', () => {
    const component = mount(<ColorButton color={color} isSelected={true}/>);

    expect(toJSON(component)).toMatchSnapshot();
});
