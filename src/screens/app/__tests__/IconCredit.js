import React from 'react';
import renderer from 'react-test-renderer';
import IconCredit from '../IconCredit';

test('it renders the IconCredit', () => {
    const component = renderer.create(<IconCredit/>);

    expect(component.toJSON()).toMatchSnapshot();
});
