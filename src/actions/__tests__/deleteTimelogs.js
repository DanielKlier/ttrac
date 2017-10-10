import deleteTimelogs from '../deleteTimelogs';
import {DELETE_TIMELOGS} from '../actionTypes';

it('returns the action', () => {
    expect(deleteTimelogs(['1', '2', '3'])).toEqual({
        type   : DELETE_TIMELOGS,
        payload: {timeLogIds: ['1', '2', '3']}
    });
});
