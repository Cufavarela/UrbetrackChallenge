import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import userReducer from './Redux/userReducer';
import ThemeReducer from './Redux/themeReducer';
import photosReducer from './Redux/photosReducer';

const inicialState = {
    User: {user: {}, loggedIn: false},
    Theme: { darkTheme: false },
    Photos: { photos: [], loading: true, page: 1 }
};

const rootReducer = combineReducers({
    Photos: photosReducer,
    Theme: ThemeReducer,
    User: userReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    inicialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;