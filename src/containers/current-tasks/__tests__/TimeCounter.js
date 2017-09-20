import React from 'react';
import renderer from 'react-test-renderer';
import TimeCounter from '../TimeCounter';

jest.useFakeTimers();

const baseDate = new Date('2017-03-09T18:00:00').valueOf();

test('TimeCounter renders correctly', () => {

    Date.now = jest.fn(() => baseDate);

    const component = renderer.create(<TimeCounter startDate={baseDate}/>);

    expect(component.toJSON()).toMatchSnapshot();

    Date.now = jest.fn(() => baseDate + 1000);

    jest.runTimersToTime(1000);

    //component.update();

    expect(component.toJSON()).toMatchSnapshot();
});
