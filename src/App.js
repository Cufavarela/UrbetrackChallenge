import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Login from './Vistas/Login/Login';
import Home from './Vistas/Home/Home';
import ImgDetails from './Vistas/Home/ImgDetailsContainer';
import {useSelector} from 'react-redux';

function App() {

  const loggedIn = useSelector(state => state.loggedIn);

  console.log(loggedIn);

  return (
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
  );
}

export default App;
