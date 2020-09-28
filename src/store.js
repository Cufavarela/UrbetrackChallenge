import {createStore, combineReducers} from 'redux'
import userReducer from './Redux/userReducer';
import ThemeReducer from './Redux/themeReducer';

const inicialState = { user: {}, loggedIn: false,  darkTheme: false };

const rootReducer = combineReducers({
    Theme: ThemeReducer,
    User: userReducer
});

const store = createStore(
    rootReducer,
    inicialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;