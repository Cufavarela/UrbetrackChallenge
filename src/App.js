import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';
import ImgDetails from './Screens/Home/ImgDetails/ImgDetailsContainer';
import {useSelector, useDispatch} from 'react-redux';
import { goDark, goLight } from './Redux/themeActions';

function App() {

  const loggedIn = useSelector(state => state.User.loggedIn);
  const isDark = useSelector(state => state.Theme.darkTheme);
  const dispatch = useDispatch();

  const themeHandler = () => {
    if (isDark) {
      dispatch(goLight());
    } else {
      dispatch(goDark());
    }
  }

  return (
    <main className={`${ isDark ? 'darkMode' : ''}`}>
      <div className="goDarkContainer">
        <a className="button" onClick={themeHandler}>Go { isDark ? 'Light' : 'Dark' }</a>
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/:id">
            <ImgDetails />
          </Route>
          <Route path="/">
          {
            loggedIn ?
              <Home />
            :
              <Login />
          }
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
