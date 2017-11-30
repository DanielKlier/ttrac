import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';
import {MemoryRouter} from 'react-router';

test('it renders the Navigation', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Navigation/>
        </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
});
