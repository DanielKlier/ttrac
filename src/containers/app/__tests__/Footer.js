import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

test('it renders the footer', () => {
    const component = renderer.create(<Footer/>);

    expect(component.toJSON()).toMatchSnapshot();
});
