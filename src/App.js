import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Login from './Vistas/Login/Login';
import Home from './Vistas/Home/Home';
import ImgDetailsContainer from './Vistas/Home/ImgDetailsContainer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/fotos/:id">
          <ImgDetailsContainer />
        </Route>
        <Route path="/fotos">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
