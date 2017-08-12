export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT           = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT           = 'counter/DECREMENT';

const initialState = {
    count         : 0,
    isIncrementing: false,
    isDecrementing: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            };
        case INCREMENT:
            return {
                ...state,
                isIncrementing: false,
                count         : state.count + 1
            };
        case DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            };
        case DECREMENT:
            return {
                ...state,
                isDecrementing: false,
                count         : state.count - 1
            };
        default:
            return state;
    }
}

export const increment = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        dispatch({
            type: INCREMENT
        });
    };
};

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        setTimeout(() => dispatch({
            type: INCREMENT
        }), 1000);
    };
};

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        });

        dispatch({
            type: DECREMENT
        });
    };
};

export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        });

        setTimeout(() => dispatch({
            type: DECREMENT
        }), 1000);
    };
};
