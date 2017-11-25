import React from 'react';
import renderer from 'react-test-renderer';
import TimeCounter from '../TimeCounter';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

jest.useFakeTimers();

const baseDate = new Date('2017-03-09T18:00:00').valueOf();

test('TimeCounter renders correctly', () => {

    Date.now = jest.fn(() => baseDate);

    const component = renderer.create(<TimeCounter startDate={baseDate}/>);

    expect(component.toJSON()).toMatchSnapshot();

    Date.now = jest.fn(() => baseDate + 1000);

    jest.runTimersToTime(1000);

    expect(component.toJSON()).toMatchSnapshot();

    // Update time so we can display something with hours
    Date.now = jest.fn(() => baseDate + 3600 * 1000 + 80000);

    jest.runTimersToTime(3600 * 1000 + 80000);

    expect(component.toJSON()).toMatchSnapshot();
});

test('it clears the timer interval when being unmounted', () => {

    // TODO: test for nice behavior, i.e. if it clears the interval when being unmounted
    const component = mount(<TimeCounter startDate={baseDate}/>);

    component.unmount();

    expect(clearInterval).toHaveBeenCalledTimes(1);
});

