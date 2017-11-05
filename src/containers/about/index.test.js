import React from 'react';
import renderer from 'react-test-renderer';
import About from './index';

test('it displays the about page', () => {
    const component = renderer.create(<About/>);

    expect(component.toJSON()).toMatchSnapshot();
});
