import {combineReducers, compose, createStore, Store} from 'redux';
import {countReducer} from "./reducers/countReducer";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducers = combineReducers({
    counter: countReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
export const store: Store<RootStoreType> = createStore(rootReducers, composeEnhancers());

export type RootStoreType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store;
