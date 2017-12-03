import React from 'react';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ColorPicker from '../index';

const colors = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff',
    '#ff00ff'
];

test('it renders just the color button when not expanded', () => {
    const component = mount(<ColorPicker colorPalette={colors} value={'#ff0000'}/>);

    expect(toJSON(component)).toMatchSnapshot();
});

test('it opens and renders the overlay when clicked', () => {
    const component = mount(<ColorPicker colorPalette={colors} value={'#ff0000'}/>);

    component.find('Button').simulate('click');

    expect(toJSON(component)).toMatchSnapshot();
});

test('it calls the change handler when a color button in the popover is clicked', () => {
    const changeHandler = jest.fn();

    const component = mount(<ColorPicker colorPalette={colors} value={'#ff00ff'}
                                         onChange={changeHandler}/>);

    component.find('Button').simulate('click');

    component.find('.color-picker-overlay').find('Button').first().simulate('click');

    expect(changeHandler).toBeCalledWith('#ff0000');

    component.update();
});
