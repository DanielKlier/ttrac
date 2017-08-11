import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './modules';

export const history = createBrowserHistory();

const initialState = {};
const enhancers    = [];
const middleware   = [
    thunk,
    routerMiddleware(history)
];

// Add redux devtools if environment is development
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    devToolsExtension && enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store;