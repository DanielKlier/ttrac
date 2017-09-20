import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import {loadState, saveState} from './localStorage';

export const history = createBrowserHistory();

const initialState = loadState();
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

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
