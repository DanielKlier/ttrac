import React from 'react';
import renderer from 'react-test-renderer';
import TaskListHours from './index';

test('TaskListHours renders correctly', () => {
    const component = renderer.create(<TaskListHours/>);
    const tree      = component.toJSON();

    expect(tree).toMatchSnapshot();

    const componentWithHours = renderer.create(<TaskListHours elapsedTime={3610000}/>);
    expect(componentWithHours.toJSON()).toMatchSnapshot();
});
