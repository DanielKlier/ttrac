import React from 'react';
import ToggleDisplay from './index';
import renderer from 'react-test-renderer';

test('it returns null when if prop is falsy', () => {
    const component = renderer.create(
        <ToggleDisplay if={false}>
            <div>Hello</div>
        </ToggleDisplay>
    );

    expect(component.toJSON()).toBeNull();
});

test('it renders the component when if prop is truthy or not present', () => {
    let component = renderer.create(
        <ToggleDisplay>
            <div>Hello</div>
        </ToggleDisplay>
    );

    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <ToggleDisplay if={true}>
            <div>Hello</div>
        </ToggleDisplay>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('it handles the show prop correctly', () => {
    let component = renderer.create(
        <ToggleDisplay show={true}>
            <div>Hello</div>
        </ToggleDisplay>
    );

    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <ToggleDisplay show={false}>
            <div>Hello</div>
        </ToggleDisplay>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('it handles the hide prop correctly', () => {
    let component = renderer.create(
        <ToggleDisplay hide={true}>
            <div>Hello</div>
        </ToggleDisplay>
    );

    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <ToggleDisplay hide={false}>
            <div>Hello</div>
        </ToggleDisplay>
    );

    expect(component.toJSON()).toMatchSnapshot();
});
