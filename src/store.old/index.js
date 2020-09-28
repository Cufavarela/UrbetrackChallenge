import {createStore, combineReducers } from 'redux';
import ThemeReducer from './theme/reducer';

const inicialState = { Theme: {}};

const rootReducer = combineReducers({
    Theme: ThemeReducer,
});

const store = createStore(rootReducer, inicialState);

export default store;