import {createStore} from 'redux'
import userReducer from './redux/userReducer'

const inicialState = { user: {}, loggedIn: false };

const store = createStore(
    userReducer,
    inicialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;