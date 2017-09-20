import * as React from 'react';
import renderer from 'react-test-renderer';
import AddNewTaskItem from '../AddNewTaskItem';

test('AddNewTaskItem renders correctly', () => {
    const component = renderer.create(<AddNewTaskItem/>);
    const tree      = component.toJSON();

    expect(tree).toMatchSnapshot();
});
